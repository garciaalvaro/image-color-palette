import l from "../../utils/#";
import classNames from "classnames";
import Div, { Span } from "../Utils/_Html";

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
			<Div id="icp-toggle-panel">
				<Button
					className={getButtonClassName("palette")}
					onClick={() => openPanel("palette")}
				>
					<Span>{palette_label}</Span>
				</Button>
				<Button
					className={getButtonClassName("settings")}
					onClick={() => openPanel("settings")}
				>
					<Span>{settings_label}</Span>
				</Button>
			</Div>
		);
	}
}

export default TogglePanel;
