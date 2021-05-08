export const selectors: SelectorCreators = {
	getView: state => state.view,

	getColors: state => state.colors,

	getColorPaletteLength: state => state.color_palette_length,

	getColorDistanceEq: state => state.color_distance_equation,

	getColorScheme: state => state.color_scheme,

	getImageId: state => state.image_id,

	getImageUrl: state => state.image_url,
};
