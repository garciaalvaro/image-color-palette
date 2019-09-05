import { __ } from "@wordpress/i18n";

export const color_schemes: {
	label: string;
	value: ColorScheme;
}[] = [
	{ label: __("No color scheme"), value: "none" },
	{ label: __("Analogous"), value: "analogous" },
	{
		label: __("Monochromatic"),
		value: "monochromatic"
	},
	{ label: __("Triad"), value: "triad" },
	{ label: __("Complementary"), value: "complementary" },
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Brighter"), value: "brighter" },
	{ label: __("Darker"), value: "darker" },
	{ label: __("Desaturated"), value: "desaturated" },
	{ label: __("Saturated"), value: "saturated" }
];
