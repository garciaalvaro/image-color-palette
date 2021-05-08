import React from "react";
import { useSelect } from "@wordpress/data";

import styles from "./App.styl";
import { store_slug } from "@/utils";
import { Tabs } from "../Tabs";
import { ViewPalette } from "../ViewPalette";
import { ViewSettings } from "../ViewSettings";

export const App: React.ComponentType = () => {
	const view = useSelect(select => select(store_slug).getView());

	return (
		<div className={styles.container}>
			<Tabs />

			{view === "palette" ? <ViewPalette /> : <ViewSettings />}
		</div>
	);
};
