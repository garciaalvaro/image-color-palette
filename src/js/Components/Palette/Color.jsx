import l from "../../utils/#";
import HtmlComponent from "../Utils/_HtmlComponent";
import tinycolor from "../../../plugins/tinycolor.min";

const { Component } = wp.element;
const { ClipboardButton } = wp.components;

class Color extends Component {
	getContrastColor = () => {
		const { color } = this.props;
		const contrast_color =
			tinycolor.mostReadable(color, ["#000", "#fff"])._r === 0
				? "dark"
				: "light";

		return contrast_color;
	};

	getClassName = () => {
		const { getContrastColor } = this;

		const className = [
			"icp-color_button",
			`text_color-${getContrastColor()}`
		].join(" ");

		return className;
	};

	render() {
		const { getClassName, getContrastColor } = this;
		const { color, show_hex, toggleCopied } = this.props;

		return (
			<ClipboardButton
				className={getClassName()}
				onCopy={() => toggleCopied(color, getContrastColor())}
				onFinishCopy={() => toggleCopied(false, false)}
				text={color}
				style={{ backgroundColor: color }}
			>
				{show_hex && (
					<HtmlComponent
						html_element="span"
						className="icp-color_text"
					>
						{color}
					</HtmlComponent>
				)}
			</ClipboardButton>
		);
	}
}

export default Color;
