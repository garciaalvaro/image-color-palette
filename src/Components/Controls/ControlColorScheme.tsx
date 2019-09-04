import { color_schemes, store_slug } from "utils/data";
import { addPrefix } from "utils/tools";

interface WithSelectProps extends Pick<State, "color_scheme"> {}

interface WithDispatchProps extends Pick<ActionCreators, "setColorScheme"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { RadioControl } = wp.components;

export const ControlColorScheme: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_scheme: select(store_slug).getColorScheme()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorScheme: dispatch(store_slug).setColorScheme
	}))
])((props: Props) => {
	const { setColorScheme, color_scheme } = props;

	return (
		<RadioControl
			className={addPrefix(["control", "control-radio", "color_scheme"])}
			label={__("Color scheme")}
			help={__(
				"The selected scheme will appear on the right side of each image color."
			)}
			selected={color_scheme}
			options={color_schemes}
			onChange={value => {
				if (!value) {
					return;
				}

				setColorScheme(value);
			}}
		/>
	);
});
