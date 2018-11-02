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
} = icp.local.schemes;

const options = [
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

export default options;
