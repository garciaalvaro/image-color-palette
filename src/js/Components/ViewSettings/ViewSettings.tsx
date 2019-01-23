import { Div } from "utils/components";
import { PluginInfo } from "./PluginInfo";
import { ControlPaletteLength } from "./ControlPaletteLength";
import { ControlColorScheme } from "./ControlColorScheme";
import { ControlColorDistance } from "./ControlColorDistance";

export const ViewSettings: React.ComponentType = props => {
	return (
		<Div id="settings">
			<PluginInfo />
			<ControlPaletteLength />
			<ControlColorScheme />
			<ControlColorDistance />
		</Div>
	);
};
