import type { MutableRefObject } from "react";
import type { AnyAction } from "@wordpress/data";
import "@wordpress/compose";

declare module "@wordpress/data" {
	function dispatch(key: "melonpan/image-color-palette"): ActionCreators;
	function select(key: "melonpan/image-color-palette"): Selectors;

	function register(store: Store<State, AnyAction>);
	function createReduxStore(
		key: "melonpan/image-color-palette",
		store: {
			reducer: Reducer;
			actions: ActionCreators;
			selectors: SelectorCreators;
			persist: (keyof State)[];
		}
	): Store<State, AnyAction>;

	// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
	function select(
		key: "core/block-editor"
	):
		| typeof import("@types/wordpress__block-editor/store/selectors")
		| {
				getBlockParents: () => void;
		  };
}

declare module "@wordpress/compose" {
	function useCopyOnClick(
		$element: MutableRefObject<HTMLElement | null>,
		text: string
	): void;
}
