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
			case "UPDATE_LAST_COPIED_COLOR":
				return {
					...state,
					last_copied_color: action.color
				};
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
			case "UPDATE_TOOLTIPS_ACTIVE":
				return {
					...state,
					tooltips_active: action.tooltips_active
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
		getLastCopiedColor(state) {
			return state.last_copied_color;
		},
		getScheme(state) {
			return state.scheme;
		},
		getPaletteLength(state) {
			return state.palette_length;
		},
		isTooltipsActive(state) {
			return state.tooltips_active;
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
		updateLastCopiedColor(color) {
			return {
				type: "UPDATE_LAST_COPIED_COLOR",
				color
			};
		},
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
		updateTooltipsActive(tooltips_active) {
			return {
				type: "UPDATE_TOOLTIPS_ACTIVE",
				tooltips_active
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
	persist: ["tooltips_active", "palette_length", "scheme"]
});

export default store;
