import l from "../../utils/#";
import PaletteLengthControl from "../Controls/PaletteLengthControl";
import SchemeControl from "../Controls/SchemeControl";

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
		</PanelBody>
	);
};

export default SettingsPanel;
