import l, { plugin_namespace } from "../../utils/#";
import HtmlComponent from "../Utils/_HtmlComponent";

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
						<HtmlComponent>
							<WrappedComponent {...this.props} />
						</HtmlComponent>
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
