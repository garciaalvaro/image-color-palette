import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import styles from "./ViewPalette.styl";
import { store_slug } from "@/utils";
import { Media } from "../Media";
import { ColorsHeader } from "../ColorsHeader";
import { ColorRow } from "../ColorRow";

export const ViewPalette: FunctionComponent = () => {
	const colors = useSelect(select => select(store_slug).getColors());
	const image_url = useSelect(select => select(store_slug).getImageUrl());
	const is_quantizing = colors.length === 0 && !!image_url;

	return (
		<Fragment>
			{is_quantizing && (
				<div className={styles.quantizing}>
					<span>{__("Quantizing...")}</span>
				</div>
			)}

			<Media />

			{colors.length > 0 && (
				<Fragment>
					<ColorsHeader />

					{colors.map((color, index) => (
						<ColorRow key={index} color={color} />
					))}
				</Fragment>
			)}
		</Fragment>
	);
};
