import l, { icons } from "../../utils/#";
import Div, { Span } from "../Utils/_Html";

const { click_to_open } = icp.local;

const MediaPlaceholder = props => {
	const { open } = props;

	return (
		<Div onClick={open} id="icp-placeholder">
			<Div id="icp-placeholder-icon">{icons.image}</Div>
			<Div id="icp-placeholder-description">
				<Span>{click_to_open}</Span>
			</Div>
		</Div>
	);
};

export default MediaPlaceholder;
