import { Div } from "utils/components";
import { pr_store } from "utils/data/plugin";
import { Media } from "./Media/Media";
import { Colors } from "./Colors/Colors";

interface WithSelectProps extends Pick<State, "colors"> {}

interface Props extends WithSelectProps {}

const { withSelect } = wp.data;

export const ViewPalette: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		colors: select(pr_store).getColors()
	})
)((props: Props) => {
	const { colors } = props;

	return (
		<Div id="palette">
			<Media />
			{!!colors.length && <Colors />}
		</Div>
	);
});
