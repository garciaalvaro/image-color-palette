import tinycolor from "tinycolor2";

type GetColorBg = (color: TinyColorInstance) => ColorBg;

const getColorBg: GetColorBg = color => {
	if (
		tinycolor.isReadable("#000", color, {
			level: "AA",
			size: "large",
		})
	) {
		return "light";
	}

	return "dark";
};

type GetScheme = (
	color_scheme: ColorSchemeType,
	color: TinyColorInstance
) => TinyColorInstance[];

const getScheme: GetScheme = (color_scheme, color) => {
	const scheme_length = 7;
	const iteration_factor = 10;

	// Clone the color scheme_length+1 times
	const colors: TinyColorInstance[] = Array(scheme_length + 1)
		.fill(null)
		.map(() => color.clone());

	switch (color_scheme) {
		case "analogous":
			return color.analogous(scheme_length + 1).slice(1);

		case "monochromatic":
			return color
				.monochromatic(scheme_length + 1)
				.slice(1)
				.sort((a, b) => (a.toHsv().v < b.toHsv().v ? 1 : -1));

		case "triad":
			return color.triad().slice(1);

		case "complementary":
			return [color.complement()];

		case "darker":
			return colors
				.map((color, i) => color.darken(iteration_factor * i))
				.slice(1);

		case "desaturated":
			return colors
				.map((color, i) => color.desaturate(iteration_factor * i))
				.slice(1);

		case "saturated":
			return colors
				.map((color, i) => color.saturate(iteration_factor * i))
				.slice(1);

		case "lighter":
			// eslint-disable-next-line no-case-declarations
			const luminance_factor =
				(100 * (1 - color.toHsl().l)) / (scheme_length + 1);

			return colors
				.map((color, i) => color.lighten(luminance_factor * i))
				.slice(1);

		case "brighter":
			// eslint-disable-next-line no-case-declarations
			const brightness_factor =
				(100 * ((255 - color.getBrightness()) / 255)) /
				(scheme_length - 1);

			return colors
				.map((color, i) => color.brighten(brightness_factor * i))
				.slice(1);

		default:
			return [];
	}
};

type GenerateColorScheme = (
	color_scheme: ColorSchemeType,
	color_raw: Color
) => {
	scheme: ColorScheme;
	scheme_bg: ColorBg[];
	color_bg: ColorBg;
	color: string;
};

export const generateColorScheme: GenerateColorScheme = (
	color_scheme,
	color_raw
) => {
	const color = tinycolor(color_raw);
	const colors = getScheme(color_scheme, color);

	return {
		scheme: colors.map(color => color.toHexString()),
		scheme_bg: colors.map(color => getColorBg(color)),
		color_bg: getColorBg(color),
		color: color.toHexString(),
	};
};
