import l, { plugin_namespace } from "../../utils/#";
import MediaImage from "./MediaImage";
import MediaPlaceholder from "./MediaPlaceholder";
import Div from "../Utils/_Html";

const { isNil } = lodash;
const { MediaUpload } = wp.editor;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { Component } = wp.element;

class MediaContainer extends Component {
	renderHandler = ({ open }) => {
		const { image_data, is_image_loaded } = this.props;
		const { id, url, alt } = image_data;

		if (is_image_loaded) {
			return <MediaImage open={open} url={url} alt={alt} />;
		} else {
			return <MediaPlaceholder open={open} />;
		}
	};

	onSelectHandler = image => {
		const { sizes, id, alt } = image;
		const { updateImageData } = this.props;
		const image_size =
			sizes.medium_large ||
			sizes.medium ||
			sizes.large ||
			sizes.thumbnail;

		if (isNil(image_size)) {
			updateImageData({
				id: false,
				url: false,
				alt: false
			});
		} else {
			updateImageData({
				id: id,
				url: image_size.url,
				alt: alt
			});
		}
	};

	render() {
		const { onSelectHandler, renderHandler } = this;
		const { image_data } = this.props;

		return (
			<Div id="icp-media-container">
				<MediaUpload
					onSelect={onSelectHandler}
					type="image"
					value={image_data.id}
					multiple={false}
					render={renderHandler}
				/>
			</Div>
		);
	}
}

export default compose([
	withSelect(select => {
		const { getImageData, isImageLoaded } = select(plugin_namespace);

		return {
			image_data: getImageData(),
			is_image_loaded: isImageLoaded()
		};
	}),
	withDispatch(dispatch => {
		const { updateImageData } = dispatch(plugin_namespace);

		return {
			updateImageData
		};
	})
])(MediaContainer);
