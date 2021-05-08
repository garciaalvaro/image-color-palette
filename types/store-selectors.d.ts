type Selector<R> = () => R;
type SelectorCreator<R> = (state: State) => R;

interface SelectorsReturn {
	getView: State["view"];
	getColors: State["colors"];
	getColorPaletteLength: State["color_palette_length"];
	getColorDistanceEq: State["color_distance_equation"];
	getColorScheme: State["color_scheme"];
	getImageId: State["image_id"];
	getImageUrl: State["image_url"];
}

type Selectors = {
	[K in keyof SelectorsReturn]: Selector<SelectorsReturn[K]>;
};

type SelectorCreators = {
	[K in keyof SelectorsReturn]: SelectorCreator<SelectorsReturn[K]>;
};
