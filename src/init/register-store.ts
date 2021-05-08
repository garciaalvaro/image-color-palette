import {
	createReduxStore,
	register,
	registerStore,
	Store,
} from "@wordpress/data";

import { store_slug } from "@/utils";
import { reducer } from "@/store/reducer";
import { actions } from "@/store/actions";
import { selectors } from "@/store/selectors";

let store: Store<State>;

if (createReduxStore !== undefined) {
	store = createReduxStore(store_slug, {
		reducer,
		actions,
		selectors,
		persist: [
			"color_palette_length",
			"color_scheme",
			"color_distance_equation",
		],
	});

	register(store);
} else {
	store = registerStore<State>(store_slug, {
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
}

export { store };
