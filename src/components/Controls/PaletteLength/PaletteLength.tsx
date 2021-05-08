import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";

import { store_slug } from "@/utils";

export const PaletteLength: FunctionComponent = () => {
	const color_palette_length = useSelect(select =>
		select(store_slug).getColorPaletteLength()
	);

	const { setColorPaletteLength } = useDispatch(store_slug);

	return (
		<RangeControl
			label={__("Number of palette colors")}
			help={__("Number of colors from the image to show in the palette")}
			value={color_palette_length}
			min={5}
			max={15}
			step={1}
			onChange={value => {
				if (!value) return;

				setColorPaletteLength(value);
			}}
		/>
	);
};
