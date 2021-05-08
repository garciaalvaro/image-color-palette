import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";

import styles from "./Placeholder.styl";
import { Icon } from "@/utils";

interface Props {
	open: () => void;
}

export const Placeholder: FunctionComponent<Props> = props => {
	const { open } = props;

	return (
		<button onClick={open} className={styles.container}>
			<div className={styles.icon}>
				<Icon icon="image" />
			</div>

			<div className={styles.description}>
				<span>
					{__("Click to open the Media Library and select an image.")}
				</span>
			</div>
		</button>
	);
};
