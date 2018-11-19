import l from "../../utils/#";
import PluginInfo from "./PluginInfo";
import InstructionsPanel from "./InstructionsPanel";
import SettingsPanel from "./SettingsPanel";
import Div from "../Utils/_Html";

const Settings = props => {
	return (
		<Div id="icp-panel-settings">
			<PluginInfo />
			<InstructionsPanel />
			<SettingsPanel />
		</Div>
	);
};

export default Settings;
