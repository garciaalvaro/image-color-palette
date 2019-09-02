import { generateColorsScheme } from "utils/tools";
import { store_slug } from "utils/data";
import { Div } from "utils/Components";
import { ColorRowButton } from "./ColorRowButton";

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

const { Component } = wp.element;
const { withState, compose } = wp.compose;
const { withSelect } = wp.data;

export const ColorRow: React.ComponentType<OwnProps> = compose([
	withState<WithStateProps>({
		color_hex: "",
		color_type: "light",
		scheme_colors: [],
		scheme_colors_type: []
	}),
	withSelect<WithSelectProps>(select => ({
		color_scheme: select(store_slug).getColorScheme()
	}))
])(
	class extends Component<Props> {
		componentDidMount() {
			const { color_scheme, color, setState } = this.props;

			const {
				scheme_colors,
				scheme_colors_type,
				color_hex,
				color_type
			} = generateColorsScheme(color_scheme, color);

			setState({
				scheme_colors,
				scheme_colors_type,
				color_hex,
				color_type
			});
		}

		componentDidUpdate(prev_props: Props) {
			const { color_scheme, color, setState } = this.props;

			if (
				color_scheme !== prev_props.color_scheme ||
				color !== prev_props.color
			) {
				const {
					scheme_colors,
					scheme_colors_type,
					color_hex,
					color_type
				} = generateColorsScheme(color_scheme, color);

				setState({
					scheme_colors,
					scheme_colors_type,
					color_hex,
					color_type
				});
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
				<Div className="color_row">
					<ColorRowButton
						label={color_hex}
						button_extra_className="main_color"
						color={color_hex}
						color_type={color_type}
					/>
					{!!scheme_colors.length && (
						<Div className="scheme_colors">
							{scheme_colors.map((color, index) => (
								<ColorRowButton
									key={index}
									button_extra_className="scheme_color"
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
