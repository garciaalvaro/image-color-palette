import { Div } from "utils/components";
import { pr_store } from "utils/data/plugin";
import { Image } from "./Image";
import { Placeholder } from "./Placeholder";

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
		image_id: select(pr_store).getImageId()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setImageId: dispatch(pr_store).setImageId,
		setImageUrl: dispatch(pr_store).setImageUrl
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
						return <Image open={open} just_selected={just_selected} />;
					}

					return <Placeholder open={open} />;
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
