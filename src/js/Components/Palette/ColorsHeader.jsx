import l, { schemes, plugin_namespace } from "../../utils/#";
import SchemeSelect from "./SchemeSelect";
import Html from "../Utils/_Html";

const { header_image_colors } = icp.local;

const ColorsHeader = props => {
	return (
		<Html id="icp-colors-header">
			<Html html_element="h5" id="icp-title-image_colors">
				<Html html_element="span">{header_image_colors}</Html>
			</Html>
			<SchemeSelect />
		</Html>
	);
};

export default ColorsHeader;
