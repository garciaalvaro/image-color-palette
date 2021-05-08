type ActionCreator<T, P = void> = (
	payload: P
) => P extends void ? { type: T } : { type: T; payload: P };

interface ActionCreators {
	setView: ActionCreator<"SET_VIEW", State["view"]>;
	setColors: ActionCreator<"SET_COLORS", State["colors"]>;

	setColorDistanceEq: ActionCreator<
		"SET_COLOR_DISTANCE_EQ",
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

type Action = ReturnType<ActionCreators[keyof ActionCreators]>;
