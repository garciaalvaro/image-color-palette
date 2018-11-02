import l, { schemes, plugin_namespace } from "../../utils/#";
import tinycolor from "../../../plugins/tinycolor.min";
import withGeneratePalette from "./_withGeneratePalette";

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { SelectControl } = wp.components;
const { Component } = wp.element;

class SchemeSelect extends Component {
	onChangeHandler = scheme => {
		const {
			updateScheme,
			updateColors,
			generatePaletteList,
			colors
		} = this.props;
		const main_colors = colors.map(color_array =>
			tinycolor(color_array.main_color)
		);
		const palette_list = generatePaletteList(main_colors, scheme);

		updateScheme(scheme);
		updateColors(palette_list);
	};

	render() {
		const { onChangeHandler } = this;
		const { scheme } = this.props;

		return (
			<SelectControl
				className="icp-control icp-control-select icp-scheme"
				value={scheme}
				options={schemes}
				onChange={onChangeHandler}
			/>
		);
	}
}

export default compose([
	withSelect(select => {
		const { getScheme, getColors } = select(plugin_namespace);

		return {
			scheme: getScheme(),
			colors: getColors()
		};
	}),
	withDispatch(dispatch => {
		const { updateScheme, updateColors } = dispatch(plugin_namespace);

		return {
			updateScheme,
			updateColors
		};
	}),
	withGeneratePalette
])(SchemeSelect);
