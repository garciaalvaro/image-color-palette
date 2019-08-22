import { pr_store } from "utils/data";
import { addPrefix } from "utils/tools";
import { color_schemes } from "utils/data/color_schemes";

interface WithSelectProps extends Pick<State, "color_scheme"> {}

interface WithDispatchProps extends Pick<ActionCreators, "setColorScheme"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { SelectControl } = wp.components;

export const ControlColorScheme: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_scheme: select(pr_store).getColorScheme()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorScheme: dispatch(pr_store).setColorScheme
	}))
])((props: Props) => {
	const { color_scheme, setColorScheme } = props;

	return (
		<SelectControl
			className={addPrefix(["control", "control-select", "color_scheme"])}
			value={color_scheme}
			options={color_schemes}
			onChange={value => setColorScheme(value)}
		/>
	);
});
