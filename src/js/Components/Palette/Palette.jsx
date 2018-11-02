import l, { plugin_namespace } from "../../utils/#";
import MediaContainer from "./MediaContainer";
import ColorsContainer from "./ColorsContainer";
import Html from "../Utils/_Html";

const { withSelect } = wp.data;

const Palette = props => {
	const { is_image_loaded } = props;

	return (
		<Html id="icp-panel-palette">
			<MediaContainer />
			{is_image_loaded && <ColorsContainer />}
		</Html>
	);
};

export default withSelect(select => {
	const { isImageLoaded } = select(plugin_namespace);

	return {
		is_image_loaded: isImageLoaded()
	};
})(Palette);
