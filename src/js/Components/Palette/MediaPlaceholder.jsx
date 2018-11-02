import l, { icons } from "../../utils/#";
import Html from "../Utils/_Html";

const { click_to_open } = icp.local;

const MediaPlaceholder = props => {
	const { open } = props;

	return (
		<Html onClick={open} id="icp-placeholder">
			<Html id="icp-placeholder-icon">{icons.image}</Html>
			<Html id="icp-placeholder-description">
				<Html html_element="span">{click_to_open}</Html>
			</Html>
		</Html>
	);
};

export default MediaPlaceholder;
