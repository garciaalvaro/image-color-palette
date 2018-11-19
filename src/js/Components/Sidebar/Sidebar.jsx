import l, { plugin_namespace } from "../../utils/#";
import TogglePanel from "./TogglePanel";
import Div from "../Utils/_Html";
import Palette from "../Palette/Palette";
import Settings from "../Settings/Settings";

const { withState, compose } = wp.compose;
const { withSelect } = wp.data;
const { Component } = wp.element;

class Sidebar extends Component {
	openPanel = panel => {
		this.props.setState({ current_panel: panel });
	};

	getClassName = () => {
		const { scheme } = this.props;
		const className = [`scheme-${scheme}`].join(" ");

		return className;
	};

	render() {
		const { openPanel, getClassName } = this;
		const { current_panel } = this.props;

		return (
			<Div id="icp-container" className={getClassName()}>
				<TogglePanel
					openPanel={openPanel}
					current_panel={current_panel}
				/>
				{current_panel === "palette" ? <Palette /> : <Settings />}
			</Div>
		);
	}
}

export default compose([
	withSelect(select => {
		const { getScheme } = select(plugin_namespace);

		return {
			scheme: getScheme()
		};
	}),
	withState({ current_panel: "palette" })
])(Sidebar);
