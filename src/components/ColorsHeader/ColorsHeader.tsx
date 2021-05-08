import React from "react";
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from "@wordpress/data";

import styles from "./ColorsHeader.styl";
import { store_slug, color_scheme_options } from "@/utils";

export const ColorsHeader: React.ComponentType = () => {
	const color_scheme = useSelect(select =>
		select(store_slug).getColorScheme()
	);

	const { setColorScheme } = useDispatch(store_slug);

	return (
		<div className={styles.container}>
			<h5 className={styles.title}>
				<span>{__("Image colors")}</span>
			</h5>

			<select
				className={styles.select}
				value={color_scheme}
				onChange={event =>
					setColorScheme(event.target.value as ColorSchemeType)
				}
			>
				{color_scheme_options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};
