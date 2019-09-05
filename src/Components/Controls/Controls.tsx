import { Fragment } from "@wordpress/element";

import { ControlPluginInfo } from "./ControlPluginInfo";
import { ControlPaletteLength } from "./ControlPaletteLength";
import { ControlColorScheme } from "./ControlColorScheme";
import { ControlColorDistance } from "./ControlColorDistance";

export const Controls: React.ComponentType = props => {
	return (
		<Fragment>
			<ControlPluginInfo />
			<ControlPaletteLength />
			<ControlColorScheme />
			<ControlColorDistance />
		</Fragment>
	);
};
