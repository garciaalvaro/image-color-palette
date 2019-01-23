// Console log shortcut
declare const l: Function;

// Lodash
declare const lodash: typeof import("lodash");

// Lodash
declare const image_color_palette: {
	local: any;
};

// Wordpress
declare const wp: {
	blockEditor: typeof import("wordpress__block-editor");
	blocks: typeof import("wordpress__blocks");
	components: typeof import("wordpress__components");
	compose: typeof import("wordpress__compose");
	data: typeof import("wordpress__data");
	editPost: typeof import("wordpress__edit-post");
	element: typeof import("wordpress__element");
	hooks: typeof import("wordpress__hooks");
	i18n: typeof import("wordpress__i18n");
	plugins: typeof import("wordpress__plugins");
};

interface Object {
	[key: string]: any;
}

// https://stackoverflow.com/a/49286056 | CC BY-SA 3.0
type ValueOf<T> = T[keyof T];

interface SetStateProp {
	setState(obj: any): void;
}

type ColorScheme =
	| "none"
	| "analogous"
	| "monochromatic"
	| "triad"
	| "complementary"
	| "lighter"
	| "brighter"
	| "darker"
	| "desaturated"
	| "saturated";

type Action<T, P = null> = {
	type: T;
	payload?: P;
};

type ActionCreator<T, P = null> = (payload?: P) => Action<T, P>;

type Selector<T, P = null> = (state: State, parameter: P) => T;

interface State {
	view: "palette" | "settings";
	color_distance_equation: "euclidean" | "manhattan";
	color_palette_length: number;
	colors: string[];
	color_scheme: ColorScheme;
	image_id: number;
	image_url: string;
}

interface ActionCreators {
	setView: ActionCreator<"SET_VIEW", State["view"]>;
	setColors: ActionCreator<"SET_COLORS", State["colors"]>;
	setColorDistanceEquation: ActionCreator<
		"SET_COLOR_DISTANCE_EQUATION",
		State["color_distance_equation"]
	>;
	setColorPaletteLength: ActionCreator<
		"SET_COLOR_PALETTE_LENGTH",
		State["color_palette_length"]
	>;
	setColorScheme: ActionCreator<"SET_COLOR_SCHEME", State["color_scheme"]>;
	setImageId: ActionCreator<"SET_IMAGE_ID", State["image_id"]>;
	setImageUrl: ActionCreator<"SET_IMAGE_URL", State["image_url"]>;
}

interface Selectors {
	getView: Selector<State["view"]>;
	getColors: Selector<State["colors"]>;
	getColorPaletteLength: Selector<State["color_palette_length"]>;
	getColorDistanceEquation: Selector<State["color_distance_equation"]>;
	getColorScheme: Selector<State["color_scheme"]>;
	getImageId: Selector<State["image_id"]>;
	getImageUrl: Selector<State["image_url"]>;
}
