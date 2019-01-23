import { pr_store } from "utils/data/plugin";
import { addPrefix } from "utils/tools/addPrefix";

interface WithSelectProps extends Pick<State, "color_distance_equation"> {}

interface WithDispatchProps
	extends Pick<ActionCreators, "setColorDistanceEquation"> {}

interface Props extends WithSelectProps, WithDispatchProps {}

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { RadioControl } = wp.components;
const {
	color_distance_equation_label,
	color_distance_equation_description
} = (window as any).image_color_palette.local;
const options: { value: State["color_distance_equation"]; label: string }[] = [
	{ value: "manhattan", label: "Manhattan" },
	{ value: "euclidean", label: "Euclidean" }
];

export const ControlColorDistance: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => ({
		color_distance_equation: select(pr_store).getColorDistanceEquation()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		setColorDistanceEquation: dispatch(pr_store).setColorDistanceEquation
	}))
])((props: Props) => {
	const { setColorDistanceEquation, color_distance_equation } = props;

	return (
		<RadioControl
			className={addPrefix(["control", "control-radio", "scheme"])}
			label={color_distance_equation_label}
			help={color_distance_equation_description}
			selected={color_distance_equation}
			options={options}
			onChange={value => setColorDistanceEquation(value)}
		/>
	);
});
