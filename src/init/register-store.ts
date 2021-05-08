import { registerStore } from "@wordpress/data";

import { store_slug } from "@/utils";
import { reducer } from "@/store/reducer";
import { actions } from "@/store/actions";
import { selectors } from "@/store/selectors";

export const store = registerStore<State>(store_slug, {
	// @ts-expect-error TODO
	reducer,
	// @ts-expect-error TODO
	actions,
	selectors,

	persist: [
		"color_palette_length",
		"color_scheme",
		"color_distance_equation",
	],
});
