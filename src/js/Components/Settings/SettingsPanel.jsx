import l from "../../utils/#";
import PaletteLengthControl from "../Controls/PaletteLengthControl";
import SchemeControl from "../Controls/SchemeControl";
import TooltipsControl from "../Controls/TooltipsControl";

const { settings_label } = icp.local;
const { PanelBody } = wp.components;

const SettingsPanel = () => {
	return (
		<PanelBody
			initialOpen={true}
			title={settings_label}
			className="icp-settings-container icp-panel"
		>
			<PaletteLengthControl />
			<SchemeControl />
			<TooltipsControl />
		</PanelBody>
	);
};

export default SettingsPanel;
