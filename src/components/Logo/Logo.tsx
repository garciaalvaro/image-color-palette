import React, { FunctionComponent } from "react";

import styles from "./Logo.styl";
import { className } from "@/utils";

export const Logo: FunctionComponent = () => {
	return (
		<svg
			className={styles.container}
			width="16"
			height="16"
			viewBox="0 0 24 24"
		>
			<rect
				className={className(styles["column-1"], styles["row-1"])}
				width="8"
				height="4"
				x="0"
				y="0"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-2"], styles["row-1"])}
				width="8"
				height="4"
				x="8"
				y="0"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-3"], styles["row-1"])}
				width="8"
				height="4"
				x="16"
				y="0"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-1"], styles["row-2"])}
				width="8"
				height="4"
				x="0"
				y="4"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-2"], styles["row-2"])}
				width="8"
				height="4"
				x="8"
				y="4"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-3"], styles["row-2"])}
				width="8"
				height="4"
				x="16"
				y="4"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-1"], styles["row-3"])}
				width="8"
				height="4"
				x="0"
				y="8"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-2"], styles["row-3"])}
				width="8"
				height="4"
				x="8"
				y="8"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-3"], styles["row-3"])}
				width="8"
				height="4"
				x="16"
				y="8"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-1"], styles["row-4"])}
				width="8"
				height="4"
				x="0"
				y="12"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-2"], styles["row-4"])}
				width="8"
				height="4"
				x="8"
				y="12"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-3"], styles["row-4"])}
				width="8"
				height="4"
				x="16"
				y="12"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-1"], styles["row-5"])}
				width="8"
				height="4"
				x="0"
				y="16"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-2"], styles["row-5"])}
				width="8"
				height="4"
				x="8"
				y="16"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-3"], styles["row-5"])}
				width="8"
				height="4"
				x="16"
				y="16"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-1"], styles["row-6"])}
				width="8"
				height="4"
				x="0"
				y="20"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-2"], styles["row-6"])}
				width="8"
				height="4"
				x="8"
				y="20"
				strokeWidth="0"
			/>
			<rect
				className={className(styles["column-3"], styles["row-6"])}
				width="8"
				height="4"
				x="16"
				y="20"
				strokeWidth="0"
			/>
		</svg>
	);
};
