export const actions: ActionCreators = {
	setView: payload => ({
		type: "SET_VIEW",
		payload
	}),
	setColors: payload => ({
		type: "SET_COLORS",
		payload
	}),
	setColorDistanceEquation: payload => ({
		type: "SET_COLOR_DISTANCE_EQUATION",
		payload
	}),
	setColorPaletteLength: payload => ({
		type: "SET_COLOR_PALETTE_LENGTH",
		payload
	}),
	setColorScheme: payload => ({
		type: "SET_COLOR_SCHEME",
		payload
	}),
	setImageId: payload => ({
		type: "SET_IMAGE_ID",
		payload
	}),
	setImageUrl: payload => ({
		type: "SET_IMAGE_URL",
		payload
	})
};
