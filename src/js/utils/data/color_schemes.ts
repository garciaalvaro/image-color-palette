const {
	none,
	analogous,
	monochromatic,
	triad,
	complementary,
	lighter,
	brighter,
	darker,
	desaturated,
	saturated
} = (window as any).image_color_palette.local.schemes;

export const color_schemes: {
	label: string;
	value: ColorScheme;
}[] = [
	{ label: none, value: "none" },
	{ label: analogous, value: "analogous" },
	{
		label: monochromatic,
		value: "monochromatic"
	},
	{ label: triad, value: "triad" },
	{ label: complementary, value: "complementary" },
	{ label: lighter, value: "lighter" },
	{ label: brighter, value: "brighter" },
	{ label: darker, value: "darker" },
	{ label: desaturated, value: "desaturated" },
	{ label: saturated, value: "saturated" }
];
