import { pr_store } from "utils/data/plugin";
import { Div } from "utils/components";
import { ButtonPopover } from "./ButtonPopover";
import tinycolor from "tinycolor2";

interface WithStateProps {
	color_hex: "";
	color_type: "light" | "dark";
	scheme_colors: string[];
	scheme_colors_type: ("light" | "dark")[];
}

interface WithSelectProps extends Pick<State, "color_scheme"> {}

interface OwnProps {
	color: string;
}

interface Props
	extends WithSelectProps,
		WithStateProps,
		SetStateProp,
		OwnProps {}

const { times, slice } = lodash;
const { Component } = wp.element;
const { withState, compose } = wp.compose;
const { withSelect } = wp.data;
const getColorType = (color: tinycolor.Instance) =>
	tinycolor.isReadable("#000", color, {
		level: "AA",
		size: "large"
	})
		? "light"
		: "dark";

export const ColorRow: React.ComponentType<OwnProps> = compose([
	withState<WithStateProps>({
		color_hex: "",
		color_type: "light",
		scheme_colors: [],
		scheme_colors_type: []
	}),
	withSelect<WithSelectProps>(select => ({
		color_scheme: select(pr_store).getColorScheme()
	}))
])(
	class extends Component<Props> {
		generateColorsScheme = () => {
			const { color_scheme, color: color_raw, setState } = this.props;
			const color = tinycolor(color_raw);
			const scheme_length = 7;
			const factor = 10;
			let colors: tinycolor.Instance[] = [];

			if (
				color_scheme === "lighter" ||
				color_scheme === "brighter" ||
				color_scheme === "darker" ||
				color_scheme === "desaturated" ||
				color_scheme === "saturated"
			) {
				colors = times(scheme_length + 1, i => color.clone());
			}

			switch (color_scheme) {
				case "analogous":
					colors = color.analogous(scheme_length + 1);
					colors = slice(colors, 1);
					break;

				case "monochromatic":
					colors = color.monochromatic(scheme_length + 1);
					colors = slice(colors, 1);
					break;

				case "triad":
					colors = color.triad();
					colors = slice(colors, 1);
					break;

				case "complementary":
					colors = [color.complement()];
					break;

				case "darker":
					colors = colors.map((color, i) => color.darken(factor * i));
					colors = slice(colors, 1);
					break;

				case "desaturated":
					colors = colors.map((color, i) => color.desaturate(factor * i));
					colors = slice(colors, 1);
					break;

				case "saturated":
					colors = colors.map((color, i) => color.saturate(factor * i));
					colors = slice(colors, 1);
					break;

				case "lighter":
					const luminance_factor =
						(100 * (1 - color.toHsl().l)) / (scheme_length + 1);

					colors = colors.map((color, i) =>
						color.lighten(luminance_factor * i)
					);
					colors = slice(colors, 1);
					break;

				case "brighter":
					const brightness_factor =
						(100 * ((255 - color.getBrightness()) / 255)) / (scheme_length - 1);

					colors = colors.map((color, i) =>
						color.brighten(brightness_factor * i)
					);
					colors = slice(colors, 1);
					break;

				default:
					colors = [];
			}

			setState({
				scheme_colors: colors.map(color => color.toHexString()),
				scheme_colors_type: colors.map(color => getColorType(color)),
				color_hex: color.toHexString(),
				color_type: getColorType(color)
			});
		};

		componentDidMount() {
			this.generateColorsScheme();
		}

		componentDidUpdate(prev_props: Props) {
			const { color_scheme, color } = this.props;

			if (
				color_scheme !== prev_props.color_scheme ||
				color !== prev_props.color
			) {
				this.generateColorsScheme();
			}
		}

		render() {
			const {
				color_hex,
				scheme_colors,
				color_type,
				scheme_colors_type
			} = this.props;

			return (
				<Div classes="color_row">
					<ButtonPopover
						label={color_hex}
						button_extra_classes="main_color"
						color={color_hex}
						color_type={color_type}
					/>
					{!!scheme_colors.length && (
						<Div classes="scheme_colors">
							{scheme_colors.map((color, index) => (
								<ButtonPopover
									key={index}
									button_extra_classes="scheme_color"
									color={color}
									color_type={scheme_colors_type[index]}
								/>
							))}
						</Div>
					)}
				</Div>
			);
		}
	}
);
