import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { RadioControl } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";

import { store_slug } from "utils/data";
import { addPrefix } from "utils/tools";

interface WithSelectProps extends Pick<State, "color_distance_equation"> {}

interface WithDispatchProps
	extends Pick<ActionCreators, "setColorDistanceEquation"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

interface Option {
	value: State["color_distance_equation"];
	label: string;
}

const options: Option[] = [
	{ value: "manhattan", label: "Manhattan" },
	{ value: "euclidean", label: "Euclidean" }
];

export const ControlColorDistance: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_distance_equation: select(store_slug).getColorDistanceEquation()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorDistanceEquation: dispatch(store_slug).setColorDistanceEquation
	}))
])((props: Props) => {
	const { setColorDistanceEquation, color_distance_equation } = props;

	return (
		<RadioControl
			className={addPrefix(["control", "control-radio", "scheme"])}
			label={__("Color distance equation")}
			help={__("Equation used to calculate the dominant colors of the image.")}
			selected={color_distance_equation}
			options={options}
			onChange={value => {
				if (!value) {
					return;
				}

				setColorDistanceEquation(value);
			}}
		/>
	);
});
