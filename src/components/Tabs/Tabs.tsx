import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from "@wordpress/data";

import styles from "./Tabs.styl";
import { Button, store_slug } from "@/utils";

interface Tab {
	value: State["view"];
	label: string;
}

const tabs: Tab[] = [
	{ value: "palette", label: __("Palette") },
	{ value: "settings", label: __("Settings") },
];

export const Tabs: FunctionComponent = () => {
	const { setView } = useDispatch(store_slug);
	const view = useSelect(select => select(store_slug).getView());

	return (
		<div className={styles.container}>
			{tabs.map(({ value, label }) => (
				<Button
					key={value}
					className={{
						[styles.button]: true,
						[styles.button_tab]: true,
						[styles.is_active]: view === value,
					}}
					onClick={() => setView(value)}
				>
					{label}
				</Button>
			))}
		</div>
	);
};
