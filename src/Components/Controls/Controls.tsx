import { ControlPluginInfo } from "./ControlPluginInfo";
import { ControlPaletteLength } from "./ControlPaletteLength";
import { ControlColorScheme } from "./ControlColorScheme";
import { ControlColorDistance } from "./ControlColorDistance";

const { Fragment } = wp.element;

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
