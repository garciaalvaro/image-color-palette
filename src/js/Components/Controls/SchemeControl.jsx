import l, { schemes, plugin_namespace } from "../../utils/#";

const { scheme_label, scheme_description } = icp.local;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { RadioControl } = wp.components;

const SchemeControl = props => {
	const { updateScheme, scheme } = props;

	return (
		<RadioControl
			className="icp-control icp-control-radio icp-scheme"
			label={scheme_label}
			help={scheme_description}
			selected={scheme}
			options={schemes}
			onChange={value => updateScheme(value)}
		/>
	);
};

export default compose([
	withSelect(select => {
		const { getScheme } = select(plugin_namespace);

		return {
			scheme: getScheme()
		};
	}),
	withDispatch(dispatch => {
		const { updateScheme } = dispatch(plugin_namespace);

		return {
			updateScheme
		};
	})
])(SchemeControl);
