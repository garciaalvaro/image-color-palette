import { pr_store } from "utils/data";
import { reducer } from "store/reducer";
import { actions } from "store/actions";
import { selectors } from "store/selectors";

wp.data.registerStore(pr_store, {
	reducer: reducer as any,
	actions: actions as ActionCreators & Object,
	selectors: selectors as Selectors & Object,
	// @ts-ignore
	persist: ["color_palette_length", "color_scheme", "color_distance_equation"]
});
