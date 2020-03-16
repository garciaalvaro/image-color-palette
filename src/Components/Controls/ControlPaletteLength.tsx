import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { RangeControl } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";

import { addPrefix } from "utils/tools";
import { store_slug } from "utils/data";

type WithSelectProps = Pick<State, "color_palette_length">;

type WithDispatchProps = Pick<ActionCreators, "setColorPaletteLength">;

type Props = WithSelectProps & WithDispatchProps;

export const ControlPaletteLength: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_palette_length: select(store_slug).getColorPaletteLength()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorPaletteLength: dispatch(store_slug).setColorPaletteLength
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
			label={__("Number of palette colors")}
			help={__("Number of colors from the image to show in the palette")}
			value={color_palette_length}
			min={5}
			max={15}
			step={1}
			onChange={value => {
				if (!value) {
					return;
				}

				setColorPaletteLength(value);
			}}
		/>
	);
});
