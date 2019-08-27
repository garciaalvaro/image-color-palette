interface Action<T, P = null> {
	type: T;
	payload: P;
}

interface ActionCreator<A extends Actions> {
	(payload: A["payload"]): A;
}

type ActionSetView = Action<"SET_VIEW", State["view"]>;
type ActionSetColors = Action<"SET_COLORS", State["colors"]>;
type ActionSetColorDistanceEquation = Action<
	"SET_COLOR_DISTANCE_EQUATION",
	State["color_distance_equation"]
>;
type ActionSetColorPaletteLength = Action<
	"SET_COLOR_PALETTE_LENGTH",
	State["color_palette_length"]
>;
type ActionSetColorScheme = Action<"SET_COLOR_SCHEME", State["color_scheme"]>;
type ActionSetImageId = Action<"SET_IMAGE_ID", State["image_id"]>;
type ActionSetImageUrl = Action<"SET_IMAGE_URL", State["image_url"]>;

interface ActionCreators {
	setView: ActionCreator<ActionSetView>;
	setColors: ActionCreator<ActionSetColors>;
	setColorDistanceEquation: ActionCreator<ActionSetColorDistanceEquation>;
	setColorPaletteLength: ActionCreator<ActionSetColorPaletteLength>;
	setColorScheme: ActionCreator<ActionSetColorScheme>;
	setImageId: ActionCreator<ActionSetImageId>;
	setImageUrl: ActionCreator<ActionSetImageUrl>;
}

type Actions =
	| ActionSetView
	| ActionSetColors
	| ActionSetColorDistanceEquation
	| ActionSetColorPaletteLength
	| ActionSetColorScheme
	| ActionSetImageId
	| ActionSetImageUrl;
