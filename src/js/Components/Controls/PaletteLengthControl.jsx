import l, { plugin_namespace } from "../../utils/#";

const { palette_length_label, palette_length_description } = icp.local;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { RangeControl } = wp.components;

const ControlPaletteLength = props => {
	const { updatePaletteLength, palette_length } = props;

	return (
		<RangeControl
			className="icp-control icp-control-range icp-palette_length"
			label={palette_length_label}
			help={palette_length_description}
			value={palette_length}
			min="5"
			max="15"
			step="1"
			onChange={value => updatePaletteLength(value)}
		/>
	);
};

export default compose([
	withSelect(select => {
		const { getPaletteLength } = select(plugin_namespace);

		return {
			palette_length: getPaletteLength()
		};
	}),
	withDispatch(dispatch => {
		const { updatePaletteLength } = dispatch(plugin_namespace);

		return {
			updatePaletteLength
		};
	})
])(ControlPaletteLength);
