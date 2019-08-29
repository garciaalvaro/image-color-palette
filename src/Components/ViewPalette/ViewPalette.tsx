import { Div, Span } from "utils/Components";
import { store_prefix } from "utils/data";
import { Media } from "../Media/Media";
import { Colors } from "../Colors/Colors";

interface WithSelectProps extends Pick<State, "colors" | "image_url"> {}

interface Props extends WithSelectProps {}

const { __ } = wp.i18n;
const { withSelect } = wp.data;

export const ViewPalette: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		colors: select(store_prefix).getColors(),
		image_url: select(store_prefix).getImageUrl()
	})
)((props: Props) => {
	const { colors, image_url } = props;

	return (
		<Div id="view-palette">
			{!colors.length && !!image_url && (
				<Div id="quantizing">
					<Span>{__("Quantizing...")}</Span>
				</Div>
			)}
			<Media />
			{!!colors.length && <Colors />}
		</Div>
	);
});
