type Selector<T, P = null> = (state: State, parameter: P) => T;

interface Selectors {
	getView: Selector<State["view"]>;
	getColors: Selector<State["colors"]>;
	getColorPaletteLength: Selector<State["color_palette_length"]>;
	getColorDistanceEquation: Selector<State["color_distance_equation"]>;
	getColorScheme: Selector<State["color_scheme"]>;
	getImageId: Selector<State["image_id"]>;
	getImageUrl: Selector<State["image_url"]>;
}
