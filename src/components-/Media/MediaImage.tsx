import { compose } from "@wordpress/compose";
import { useRef } from "@wordpress/element";
import { withSelect, withDispatch } from "@wordpress/data";
import RgbQuant from "rgbquant";

import "./MediaImage.styl";
import { store_slug, rgbquant_options } from "utils/data";
import { Div, Button, Icon, ImgRef } from "utils/Components";

type WithSelectProps = Pick<
	State,
	"colors" | "color_distance_equation" | "color_palette_length" | "image_url"
>;

type WithDispatchProps = Pick<ActionCreators, "setColors">;

type OwnProps = {
	open: Function;
	just_selected: boolean;
};

type Props = OwnProps & WithSelectProps & WithDispatchProps;

export const MediaImage: React.ComponentType<OwnProps> = compose([
	withSelect<WithSelectProps>(select => ({
		colors: select(store_slug).getColors(),
		color_distance_equation: select(store_slug).getColorDistanceEquation(),
		color_palette_length: select(store_slug).getColorPaletteLength(),
		image_url: select(store_slug).getImageUrl()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColors: dispatch(store_slug).setColors
	}))
])((props: Props) => {
	const img_ref = useRef<HTMLImageElement>(null);
	const {
		open,
		image_url,
		just_selected,
		colors,
		setColors,
		color_palette_length,
		color_distance_equation
	} = props;
	const generatePalette = () => {
		const rgbquant = new RgbQuant({
			...rgbquant_options,
			colors: color_palette_length,
			colorDist: color_distance_equation
		});

		rgbquant.sample(img_ref.current);

		const palette = rgbquant.palette(true, true);
		const palette_prepared = palette.map(
			([r, g, b]: [number, number, number]) => `rgb(${r},${g},${b})`
		);

		setColors(palette_prepared);
	};

	return (
		<Div id="image-container">
			<ImgRef
				ref={img_ref}
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
			<Button
				id="button-open_media"
				className="button-icon"
				onClick={open}
			>
				<Icon icon="edit" />
			</Button>
		</Div>
	);
});
