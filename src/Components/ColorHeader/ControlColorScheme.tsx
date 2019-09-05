import { compose } from "@wordpress/compose";
import { withSelect, withDispatch } from "@wordpress/data";
import { SelectControl } from "@wordpress/components";

import { store_slug, color_schemes } from "utils/data";
import { addPrefix } from "utils/tools";

interface WithSelectProps extends Pick<State, "color_scheme"> {}

interface WithDispatchProps extends Pick<ActionCreators, "setColorScheme"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

export const ControlColorScheme: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_scheme: select(store_slug).getColorScheme()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorScheme: dispatch(store_slug).setColorScheme
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
