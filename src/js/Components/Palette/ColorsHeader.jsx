import l, { schemes, plugin_namespace } from "../../utils/#";
import SchemeSelect from "./SchemeSelect";
import Div, { H5, Span } from "../Utils/_Html";

const { header_image_colors } = icp.local;

const ColorsHeader = props => {
	return (
		<Div id="icp-colors-header">
			<H5 id="icp-title-image_colors">
				<Span>{header_image_colors}</Span>
			</H5>
			<SchemeSelect />
		</Div>
	);
};

export default ColorsHeader;
