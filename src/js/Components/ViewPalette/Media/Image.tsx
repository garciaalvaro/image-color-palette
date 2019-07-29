import { pr_store } from "utils/data/plugin";
import { rgbquant_options } from "utils/data/rgbquant_options";
import { Div, Button, Icon, ImgRef } from "utils/components";
// @ts-ignore
import RgbQuant from "rgbquant";

interface WithSelectProps
	extends Pick<
		State,
		"colors" | "color_distance_equation" | "color_palette_length" | "image_url"
	> {}

interface WithDispatchProps extends Pick<ActionCreators, "setColors"> {}

interface OwnProps {
	open: Function;
	just_selected: boolean;
}

interface Props extends OwnProps, WithSelectProps, WithDispatchProps {}

const { Component, createRef } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

export const Image: React.ComponentType<OwnProps> = compose([
	withSelect<WithSelectProps>(select => ({
		colors: select(pr_store).getColors(),
		color_distance_equation: select(pr_store).getColorDistanceEquation(),
		color_palette_length: select(pr_store).getColorPaletteLength(),
		image_url: select(pr_store).getImageUrl()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColors: dispatch(pr_store).setColors
	}))
])(
	class extends Component<Props> {
		private img: React.RefObject<HTMLElement | null>;

		constructor(props: Props) {
			super(props);

			this.img = createRef();
		}

		generatePalette = () => {
			const { img, props } = this;
			const {
				setColors,
				color_palette_length,
				color_distance_equation
			} = props;

			const rgbquant = new RgbQuant({
				...rgbquant_options,
				colors: color_palette_length,
				colorDist: color_distance_equation
			});

			rgbquant.sample(img.current);

			const palette = rgbquant.palette(true, true);
			const palette_prepared = palette.map(
				([r, g, b]: [number, number, number]) => `rgb(${r},${g},${b})`
			);

			setColors(palette_prepared);
		};

		render() {
			const { generatePalette, props } = this;
			const { open, image_url, just_selected, colors } = props;

			return (
				<Div id="image-container">
					<ImgRef
						ref={this.img}
						id="image"
						src={image_url}
						onClick={open}
						onLoad={() => {
							// We use just_selected to trigger generatePalette
							// function only when the image has been selected.
							// Otherwise when switching tabs the onLoad callback would
							// trigger the function, although the previous palette is
							// the same.
							if (just_selected || !colors.length) {
								generatePalette();
							}
						}}
					/>
					<Button id="button-open_media" classes="button-icon" onClick={open}>
						<Icon icon="edit" />
					</Button>
				</Div>
			);
		}
	}
);
