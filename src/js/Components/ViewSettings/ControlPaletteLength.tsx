import { addPrefix } from "utils/tools/addPrefix";
import { pr_store } from "utils/data/plugin";

interface WithSelectProps extends Pick<State, "color_palette_length"> {}

interface WithDispatchProps
	extends Pick<ActionCreators, "setColorPaletteLength"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { RangeControl } = wp.components;
const {
	palette_length_label,
	palette_length_description
} = (window as any).image_color_palette.local;

export const ControlPaletteLength: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_palette_length: select(pr_store).getColorPaletteLength()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorPaletteLength: dispatch(pr_store).setColorPaletteLength
	}))
])((props: Props) => {
	const { setColorPaletteLength, color_palette_length } = props;

	return (
		<RangeControl
			className={addPrefix([
				"control",
				"control-range",
				"color_palette_length"
			])}
			label={palette_length_label}
			help={palette_length_description}
			value={color_palette_length}
			min={5}
			max={15}
			step={1}
			onChange={value => setColorPaletteLength(value)}
		/>
	);
});
