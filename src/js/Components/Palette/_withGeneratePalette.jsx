import l from "../../utils/#";

const { slice, times } = lodash;
const { Component } = wp.element;

const withGeneratePalette = WrappedComponent => {
	return class extends Component {
		generateSchemePalette = (color, scheme) => {
			const scheme_length = 7;
			const factor = 10;
			let palette = [];

			if (
				scheme === "lighter" ||
				scheme === "brighter" ||
				scheme === "darker" ||
				scheme === "desaturated" ||
				scheme === "saturated"
			) {
				palette = times(scheme_length + 1, i => color.clone());
			}

			switch (scheme) {
				case "analogous":
					palette = color.analogous(scheme_length + 1);
					palette = slice(palette, 1);
					break;

				case "monochromatic":
					palette = color.monochromatic(scheme_length + 1);
					palette = slice(palette, 1);
					break;

				case "triad":
					palette = color.triad();
					palette = slice(palette, 1);
					break;

				case "complementary":
					palette = [color.complement()];
					break;

				case "darker":
					palette = palette.map((color, i) =>
						color.darken(factor * i)
					);
					palette = slice(palette, 1);
					break;

				case "desaturated":
					palette = palette.map((color, i) =>
						color.desaturate(factor * i)
					);
					palette = slice(palette, 1);
					break;

				case "saturated":
					palette = palette.map((color, i) =>
						color.saturate(factor * i)
					);
					palette = slice(palette, 1);
					break;

				case "lighter":
					const luminance_factor =
						(100 * (1 - color.toHsl().l)) / (scheme_length + 1);

					palette = palette.map((color, i) =>
						color.lighten(luminance_factor * i)
					);
					palette = slice(palette, 1);
					break;

				case "brighter":
					const brightness_factor =
						(100 * ((255 - color.getBrightness()) / 255)) /
						(scheme_length - 1);

					palette = palette.map((color, i) =>
						color.brighten(brightness_factor * i)
					);
					palette = slice(palette, 1);
					break;

				default:
					palette = [];
			}

			palette = palette.map(color => color.toHexString());

			return palette;
		};

		generatePaletteList = (main_colors, scheme) => {
			const { generateSchemePalette } = this;
			const palette_list = main_colors.reduce((palettes, color) => {
				const palette = generateSchemePalette(color, scheme);
				const this_palette = {
					main_color: color.toHexString(),
					palette: palette
				};

				palettes.push(this_palette);

				return palettes;
			}, []);

			return palette_list;
		};

		render() {
			return (
				<WrappedComponent
					{...this.props}
					generatePaletteList={this.generatePaletteList}
					generateSchemePalette={this.generateSchemePalette}
				/>
			);
		}
	};
};

export default withGeneratePalette;
