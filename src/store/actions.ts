export const actions: ActionCreators = {
	setView: payload => ({
		type: "SET_VIEW",
		payload,
	}),

	setColors: payload => ({
		type: "SET_COLORS",
		payload,
	}),

	setColorDistanceEq: payload => ({
		type: "SET_COLOR_DISTANCE_EQ",
		payload,
	}),

	setColorPaletteLength: payload => ({
		type: "SET_COLOR_PALETTE_LENGTH",
		payload,
	}),

	setColorScheme: payload => ({
		type: "SET_COLOR_SCHEME",
		payload,
	}),

	setImageId: payload => ({
		type: "SET_IMAGE_ID",
		payload,
	}),

	setImageUrl: payload => ({
		type: "SET_IMAGE_URL",
		payload,
	}),
};
