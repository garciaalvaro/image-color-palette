import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";

import { store_slug } from "@/utils";

interface Option {
	value: State["color_distance_equation"];
	label: string;
}

const options: Option[] = [
	{ value: "manhattan", label: "Manhattan" },
	{ value: "euclidean", label: "Euclidean" },
];

export const ColorDistance: FunctionComponent = () => {
	const color_distance_eq = useSelect(select =>
		select(store_slug).getColorDistanceEq()
	);

	const { setColorDistanceEq } = useDispatch(store_slug);

	return (
		<RadioControl
			label={__("Color distance equation")}
			help={__(
				"Equation used to calculate the dominant colors of the image."
			)}
			selected={color_distance_eq}
			options={options}
			onChange={value => {
				if (!value) return;

				setColorDistanceEq(value);
			}}
		/>
	);
};
