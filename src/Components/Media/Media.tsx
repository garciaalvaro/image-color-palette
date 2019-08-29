import { Div } from "utils/Components";
import { store_prefix } from "utils/data";
import { MediaImage } from "./MediaImage";
import { MediaPlaceholder } from "./MediaPlaceholder";

interface WithStateProps {
	just_selected: boolean;
}

interface WithSelectProps extends Pick<State, "image_id"> {}

interface WithDispatchProps
	extends Pick<ActionCreators, "setImageId" | "setImageUrl"> {}

interface Props
	extends WithSelectProps,
		WithDispatchProps,
		WithStateProps,
		SetStateProp {}

const { MediaUpload } = wp.blockEditor;
const { compose, withState } = wp.compose;
const { withSelect, withDispatch } = wp.data;

export const Media: React.ComponentType = compose([
	withState<WithStateProps>({ just_selected: false }),
	withSelect<WithSelectProps>(select => ({
		image_id: select(store_prefix).getImageId()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setImageId: dispatch(store_prefix).setImageId,
		setImageUrl: dispatch(store_prefix).setImageUrl
	}))
])((props: Props) => {
	const { image_id, setImageId, setImageUrl, just_selected, setState } = props;

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
						setState({ just_selected: true });
						setImageId(id);
						setImageUrl(size.url);
					}
				}}
			/>
		</Div>
	);
});
