import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { withSelect, withDispatch } from "@wordpress/data";

import "./Tabs.styl";
import { Div, Button } from "utils/components";
import { store_slug } from "utils/data";

type WithSelectProps = Pick<State, "view">;

type WithDispatchProps = Pick<ActionCreators, "setView">;

type Props = WithSelectProps & WithDispatchProps;

interface Tab {
	value: State["view"];
	label: string;
}

const tabs: Tab[] = [
	{ value: "palette", label: __("Palette") },
	{ value: "settings", label: __("Settings") }
];

export const Tabs: React.ComponentType = compose([
	withDispatch<WithDispatchProps>(dispatch => ({
		setView: dispatch(store_slug).setView
	})),
	withSelect<WithSelectProps>(select => ({
		view: select(store_slug).getView()
	}))
])((props: Props) => {
	const { view, setView } = props;

	return (
		<Div id="tabs">
			{tabs.map(({ value, label }) => (
				<Button
					key={value}
					className={[
						"button",
						"button-tab",
						view === value ? "is-active" : null
					]}
					onClick={() => setView(value)}
				>
					{label}
				</Button>
			))}
		</Div>
	);
});
