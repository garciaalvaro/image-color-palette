import l, { icons, plugin_name } from "../../utils/#";
import Html from "../Utils/_Html";

const { instructions_description } = icp.local;

const PluginInfo = () => {
	return (
		<Html id="icp-plugin-info">
			<Html id="icp-plugin-info-logo">{icons.logo}</Html>
			<Html id="icp-plugin-info-container">
				<Html html_element="h3" id="icp-plugin-info-name">
					{plugin_name}
				</Html>
				<Html html_element="span" id="icp-plugin-info-description">
					{instructions_description}
				</Html>
			</Html>
		</Html>
	);
};

export default PluginInfo;
