import l, { plugin_namespace } from "../utils/#";
import initial_state from "./initial_state";

const { registerStore } = wp.data;

const reducer = function() {
	return function(state = initial_state, action) {
		// 'Persistence' takes the saved properties as the whole initial_state,
		// so we need to include the initial_state properties in the first reducer call.
		if (state.image_id === undefined) {
			state = { ...initial_state, ...state };
		}

		switch (action.type) {
			case "UPDATE_SCHEME":
				return {
					...state,
					scheme: action.scheme
				};
			case "UPDATE_PALETTE_LENGTH":
				return {
					...state,
					palette_length: action.palette_length
				};
			case "UPDATE_COLORS":
				return {
					...state,
					colors: action.colors
				};
			case "UPDATE_IMAGE_DATA":
				const { id, alt, url } = action.image_data;

				return {
					...state,
					image_data: {
						id: id,
						alt: alt,
						url: url
					}
				};
		}

		return state;
	};
};

const selectors = function() {
	return {
		isImageLoaded(state) {
			return state.image_data.id !== false;
		},
		getScheme(state) {
			return state.scheme;
		},
		getPaletteLength(state) {
			return state.palette_length;
		},
		getColors(state) {
			return state.colors;
		},
		getImageData(state) {
			return state.image_data;
		}
	};
};

const actions = function() {
	return {
		updateScheme(scheme) {
			return {
				type: "UPDATE_SCHEME",
				scheme
			};
		},
		updatePaletteLength(palette_length) {
			return {
				type: "UPDATE_PALETTE_LENGTH",
				palette_length
			};
		},
		updateColors(colors) {
			return {
				type: "UPDATE_COLORS",
				colors
			};
		},
		updateImageData(image_data) {
			return {
				type: "UPDATE_IMAGE_DATA",
				image_data
			};
		}
	};
};

const store = registerStore(plugin_namespace, {
	reducer: reducer(),
	actions: actions(),
	selectors: selectors(),
	controls: {},
	resolvers: {},
	persist: ["palette_length", "scheme"]
});

export default store;
