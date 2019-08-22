import { Div, Button } from "utils/Components";
import { pr_store } from "utils/data";

interface WithSelectProps extends Pick<State, "view"> {}

interface WithDispatchProps extends Pick<ActionCreators, "setView"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

interface Tab {
	value: State["view"];
	label: string;
}

const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const tabs: Tab[] = [
	{ value: "palette", label: __("Palette") },
	{ value: "settings", label: __("Settings") }
];

export const Tabs: React.ComponentType = compose([
	withDispatch<WithDispatchProps>(dispatch => ({
		setView: dispatch(pr_store).setView
	})),
	withSelect<WithSelectProps>(select => ({
		view: select(pr_store).getView()
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
