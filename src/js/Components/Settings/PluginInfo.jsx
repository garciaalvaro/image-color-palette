import l, { icons, plugin_name } from "../../utils/#";
import Div, { H3, Span } from "../Utils/_Html";

const { instructions_description } = icp.local;

const PluginInfo = () => {
	return (
		<Div id="icp-plugin-info">
			<Div id="icp-plugin-info-logo">{icons.logo}</Div>
			<Div id="icp-plugin-info-container">
				<H3 id="icp-plugin-info-name">{plugin_name}</H3>
				<Span id="icp-plugin-info-description">
					{instructions_description}
				</Span>
			</Div>
		</Div>
	);
};

export default PluginInfo;
