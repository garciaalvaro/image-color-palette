import { times, slice } from "lodash";
import tinycolor from "tinycolor2";

const getColorType = (color: tinycolor.Instance): "light" | "dark" =>
	tinycolor.isReadable("#000", color, {
		level: "AA",
		size: "large"
	})
		? "light"
		: "dark";

export const generateColorsScheme = (
	color_scheme: ColorScheme,
	color_raw: string
) => {
	const color = tinycolor(color_raw);
	const scheme_length = 7;
	const factor = 10;
	let colors: tinycolor.Instance[] = [];

	if (
		color_scheme === "lighter" ||
		color_scheme === "brighter" ||
		color_scheme === "darker" ||
		color_scheme === "desaturated" ||
		color_scheme === "saturated"
	) {
		colors = times(scheme_length + 1, i => color.clone());
	}

	switch (color_scheme) {
		case "analogous":
			colors = color.analogous(scheme_length + 1);
			colors = slice(colors, 1);
			break;

		case "monochromatic":
			colors = color.monochromatic(scheme_length + 1);
			colors = slice(colors, 1);
			colors = colors.sort((a, b) => (a.toHsv().v < b.toHsv().v ? 1 : -1));
			break;

		case "triad":
			colors = color.triad();
			colors = slice(colors, 1);
			break;

		case "complementary":
			colors = [color.complement()];
			break;

		case "darker":
			colors = colors.map((color, i) => color.darken(factor * i));
			colors = slice(colors, 1);
			break;

		case "desaturated":
			colors = colors.map((color, i) => color.desaturate(factor * i));
			colors = slice(colors, 1);
			break;

		case "saturated":
			colors = colors.map((color, i) => color.saturate(factor * i));
			colors = slice(colors, 1);
			break;

		case "lighter":
			const luminance_factor =
				(100 * (1 - color.toHsl().l)) / (scheme_length + 1);

			colors = colors.map((color, i) => color.lighten(luminance_factor * i));
			colors = slice(colors, 1);
			break;

		case "brighter":
			const brightness_factor =
				(100 * ((255 - color.getBrightness()) / 255)) / (scheme_length - 1);

			colors = colors.map((color, i) => color.brighten(brightness_factor * i));
			colors = slice(colors, 1);
			break;

		default:
			colors = [];
	}

	return {
		scheme_colors: colors.map(color => color.toHexString()),
		scheme_colors_type: colors.map(color => getColorType(color)),
		color_hex: color.toHexString(),
		color_type: getColorType(color)
	};
};
