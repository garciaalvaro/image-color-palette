import l, { icons, rgbquant_options, plugin_namespace } from "../../utils/#";
import Div from "../Utils/_Html";
import { ImgForwardRef } from "../Utils/_HtmlForwardRef";
import tinycolor from "../../../plugins/tinycolor.min";
import RgbQuant from "../../../plugins/rgbquant.min";
import withGeneratePalette from "./_withGeneratePalette";

const { isNil } = lodash;
const { Button } = wp.components;
const { Component, Fragment, createRef } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class MediaImage extends Component {
	constructor(props) {
		super(props);

		this.image = createRef();
	}

	generateImagePalette = () => {
		const { image } = this;
		const { palette_length } = this.props;
		let rgbquant;
		let image_dominant_colors;

		rgbquant_options.colors = palette_length;
		rgbquant = new RgbQuant(rgbquant_options);
		rgbquant.sample(image.current);

		image_dominant_colors = rgbquant.palette(true, true);
		image_dominant_colors = image_dominant_colors.map(raw =>
			tinycolor(`rgb(${raw[0]},${raw[1]},${raw[2]})`)
		);

		return image_dominant_colors;
	};

	onLoadHandler = () => {
		const { image, generateImagePalette } = this;
		const { updateColors, generatePaletteList, scheme } = this.props;

		if (isNil(image.current)) {
			return;
		}
		const image_palette = generateImagePalette();
		const palette_list = generatePaletteList(image_palette, scheme);

		updateColors(palette_list);
	};

	render() {
		const { onLoadHandler } = this;
		const { open, url, alt } = this.props;

		return (
			<Fragment>
				<Div id="icp-image-container">
					<ImgForwardRef
						id="icp-image"
						onClick={open}
						onLoad={onLoadHandler}
						src={url}
						alt={alt}
						ref={this.image}
					/>
				</Div>
				<Button id="icp-image-edit" onClick={open}>
					{icons.edit}
				</Button>
			</Fragment>
		);
	}
}

export default compose([
	withSelect(select => {
		const { getPaletteLength, getScheme } = select(plugin_namespace);

		return {
			palette_length: getPaletteLength(),
			scheme: getScheme()
		};
	}),
	withDispatch(dispatch => {
		const { updateColors } = dispatch(plugin_namespace);

		return {
			updateColors
		};
	}),
	withGeneratePalette
])(MediaImage);
