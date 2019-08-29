import { Div } from "utils/Components";
import { store_prefix } from "utils/data";
import { Tabs } from "../Tabs/Tabs";
import { ViewPalette } from "../ViewPalette/ViewPalette";
import { ViewSettings } from "../ViewSettings/ViewSettings";

interface WithSelectProps extends Pick<State, "view"> {}

const { withSelect } = wp.data;

export const App: React.ComponentType = withSelect<WithSelectProps>(select => ({
	view: select(store_prefix).getView()
}))(props => {
	const { view } = props;

	return (
		<Div id="container" className="color_type-light">
			<Tabs />
			{view === "palette" ? <ViewPalette /> : <ViewSettings />}
		</Div>
	);
});
