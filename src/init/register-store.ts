import { pr_store } from "utils/data";
import { reducer } from "store/reducer";
import { actions } from "store/actions";
import { selectors } from "store/selectors";

wp.data.registerStore(pr_store, {
	// @ts-ignore
	reducer,
	// @ts-ignore
	actions,
	// @ts-ignore
	selectors,
	persist: ["color_palette_length", "color_scheme", "color_distance_equation"]
});
