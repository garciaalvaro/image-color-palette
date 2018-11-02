import l, { plugin_namespace } from "../../utils/#";
import Html from "../Utils/_Html";

const { clipboard_copy } = icp.local;
const { Component } = wp.element;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { Tooltip } = wp.components;

const withTooltip = WrappedComponent => {
	return class extends Component {
		render() {
			const { tooltips_active } = this.props;

			if (tooltips_active) {
				return (
					<Tooltip text={clipboard_copy}>
						<Html>
							<WrappedComponent {...this.props} />
						</Html>
					</Tooltip>
				);
			}

			return <WrappedComponent {...this.props} />;
		}
	};
};

export default compose([
	withSelect(select => {
		const { isTooltipsActive } = select(plugin_namespace);

		return {
			tooltips_active: isTooltipsActive()
		};
	}),
	withTooltip
]);
