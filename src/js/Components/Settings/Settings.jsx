import l from "../../utils/#";
import PluginInfo from "./PluginInfo";
import InstructionsPanel from "./InstructionsPanel";
import SettingsPanel from "./SettingsPanel";
import Html from "../Utils/_Html";

const Settings = props => {
	return (
		<Html id="icp-panel-settings">
			<PluginInfo />
			<InstructionsPanel />
			<SettingsPanel />
		</Html>
	);
};

export default Settings;
