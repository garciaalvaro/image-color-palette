const initial_state: State = {
	view: "palette",
	colors: [],
	color_distance_equation: "manhattan",
	color_palette_length: 10,
	color_scheme: "darker",
	image_id: 0,
	image_url: ""
};

export const reducer = (state = initial_state, action: Actions) => {
	switch (action.type) {
		case "SET_VIEW": {
			return {
				...state,
				view: action.payload
			};
		}
		case "SET_COLORS": {
			return {
				...state,
				colors: action.payload
			};
		}
		case "SET_COLOR_DISTANCE_EQUATION": {
			return {
				...state,
				colors: [],
				color_distance_equation: action.payload
			};
		}
		case "SET_COLOR_PALETTE_LENGTH": {
			return {
				...state,
				colors: [],
				color_palette_length: action.payload
			};
		}
		case "SET_COLOR_SCHEME": {
			return {
				...state,
				color_scheme: action.payload
			};
		}
		case "SET_IMAGE_ID": {
			return {
				...state,
				colors: [],
				image_id: action.payload
			};
		}
		case "SET_IMAGE_URL": {
			return {
				...state,
				image_url: action.payload
			};
		}
		default:
			return state;
	}
};
