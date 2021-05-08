import React, { FunctionComponent } from "react";

import styles from "./Controls.styl";
import { PluginInfo } from "./PluginInfo";
import { PaletteLength } from "./PaletteLength";
import { ColorScheme } from "./ColorScheme";
import { ColorDistance } from "./ColorDistance";

export const Controls: FunctionComponent = () => {
	return (
		<div className={styles.container}>
			<PluginInfo />
			<PaletteLength />
			<ColorScheme />
			<ColorDistance />
		</div>
	);
};
