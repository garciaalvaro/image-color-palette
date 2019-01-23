import { color_schemes } from "utils/data/color_schemes";
import { pr_store } from "utils/data/plugin";
import { addPrefix } from "utils/tools/addPrefix";

interface WithSelectProps extends Pick<State, "color_scheme"> {}

interface WithDispatchProps extends Pick<ActionCreators, "setColorScheme"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { RadioControl } = wp.components;
const {
	scheme_label,
	scheme_description
} = (window as any).image_color_palette.local;

export const ControlColorScheme: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_scheme: select(pr_store).getColorScheme()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorScheme: dispatch(pr_store).setColorScheme
	}))
])((props: Props) => {
	const { setColorScheme, color_scheme } = props;

	return (
		<RadioControl
			className={addPrefix(["control", "control-radio", "color_scheme"])}
			label={scheme_label}
			help={scheme_description}
			selected={color_scheme}
			options={color_schemes}
			onChange={value => setColorScheme(value)}
		/>
	);
});
