import { withSelect } from "@wordpress/data";

import "./App.styl";
import { Div } from "utils/components";
import { store_slug } from "utils/data";
import { Tabs } from "../Tabs/Tabs";
import { ViewPalette } from "../ViewPalette";
import { ViewSettings } from "../ViewSettings";

type WithSelectProps = Pick<State, "view">;

export const App: React.ComponentType = withSelect<WithSelectProps>(select => ({
	view: select(store_slug).getView(),
}))(props => {
	const { view } = props;

	return (
		<Div id="container" className="color_type-light">
			<Tabs />
			{view === "palette" ? <ViewPalette /> : <ViewSettings />}
		</Div>
	);
});
