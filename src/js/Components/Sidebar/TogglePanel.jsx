import l from "../../utils/#";
import classNames from "classnames";
import Html from "../Utils/_Html";

const { palette_label, settings_label } = icp.local;
const { Button } = wp.components;
const { Component } = wp.element;

class TogglePanel extends Component {
	getButtonClassName = panel => {
		const { current_panel } = this.props;

		return classNames(
			{
				"is-active": current_panel === panel
			},
			"toggle-panel"
		);
	};

	render() {
		const { getButtonClassName } = this;
		const { openPanel } = this.props;

		return (
			<Html id="icp-toggle-panel">
				<Button
					className={getButtonClassName("palette")}
					onClick={() => openPanel("palette")}
				>
					<Html html_element="span">{palette_label}</Html>
				</Button>
				<Button
					className={getButtonClassName("settings")}
					onClick={() => openPanel("settings")}
				>
					<Html html_element="span">{settings_label}</Html>
				</Button>
			</Html>
		);
	}
}

export default TogglePanel;
