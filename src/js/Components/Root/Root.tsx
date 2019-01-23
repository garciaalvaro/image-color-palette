import { Div } from "utils/components";
import { pr_store } from "utils/data/plugin";
import { Tabs } from "./Tabs";
import { ViewPalette } from "Components/ViewPalette/ViewPalette";
import { ViewSettings } from "Components/ViewSettings/ViewSettings";

interface WithSelectProps extends Pick<State, "view"> {}

interface Props extends WithSelectProps {}

const { withSelect } = wp.data;

export const Root: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		view: select(pr_store).getView()
	})
)((props: Props) => {
	const { view } = props;

	return (
		<Div id="container" classes="color_type-light">
			<Tabs />
			{view === "palette" ? <ViewPalette /> : <ViewSettings />}
		</Div>
	);
});
