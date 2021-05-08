import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";

import { color_scheme_options, store_slug } from "@/utils";

export const ColorScheme: FunctionComponent = () => {
	const color_scheme = useSelect(select =>
		select(store_slug).getColorScheme()
	);

	const { setColorScheme } = useDispatch(store_slug);

	return (
		<RadioControl
			label={__("Color scheme")}
			help={__(
				"The selected scheme will appear on the right side of each image color."
			)}
			selected={color_scheme}
			options={color_scheme_options}
			onChange={value => {
				if (!value) return;

				setColorScheme(value);
			}}
		/>
	);
};
