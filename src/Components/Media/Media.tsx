import { Div } from "utils/Components";
import { store_slug } from "utils/data";
import { MediaImage } from "./MediaImage";
import { MediaPlaceholder } from "./MediaPlaceholder";

interface WithSelectProps extends Pick<State, "image_id"> {}

interface WithDispatchProps
	extends Pick<ActionCreators, "setImageId" | "setImageUrl"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

const { MediaUpload } = wp.blockEditor;
const { compose } = wp.compose;
const { useState } = wp.element;
const { withSelect, withDispatch } = wp.data;

export const Media: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		image_id: select(store_slug).getImageId()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setImageId: dispatch(store_slug).setImageId,
		setImageUrl: dispatch(store_slug).setImageUrl
	}))
])((props: Props) => {
	const { image_id, setImageId, setImageUrl } = props;
	const [just_selected, setJustSelected] = useState(false);

	return (
		<Div id="media">
			<MediaUpload
				allowedTypes={["image"]}
				value={image_id}
				render={({ open }) => {
					if (image_id) {
						return <MediaImage open={open} just_selected={just_selected} />;
					}

					return <MediaPlaceholder open={open} />;
				}}
				onSelect={image => {
					const { id, sizes } = image;
					const size =
						sizes.medium_large ||
						sizes.medium ||
						sizes.large ||
						sizes.thumbnail;

					if (size) {
						setJustSelected(true);
						setImageId(id);
						setImageUrl(size.url);
					}
				}}
			/>
		</Div>
	);
});
