import l, { plugin_namespace } from "../../utils/#";

const { tooltips_active_label, tooltips_active_description } = icp.local;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { CheckboxControl } = wp.components;

const TooltipsControl = props => {
	const { updateTooltipsActive, tooltips_active } = props;

	return (
		<CheckboxControl
			className="icp-control icp-control-checkbox icp-tooltips_active"
			label={tooltips_active_label}
			help={tooltips_active_description}
			checked={tooltips_active}
			onChange={value => updateTooltipsActive(value)}
		/>
	);
};

export default compose([
	withSelect(select => {
		const { isTooltipsActive } = select(plugin_namespace);

		return {
			tooltips_active: isTooltipsActive()
		};
	}),
	withDispatch(dispatch => {
		const { updateTooltipsActive } = dispatch(plugin_namespace);

		return {
			updateTooltipsActive
		};
	})
])(TooltipsControl);
