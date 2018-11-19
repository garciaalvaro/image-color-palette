import l, { plugin_namespace } from "../../utils/#";
import withTooltip from "./_withTooltip";
import Color from "./Color";
import Html from "../Utils/_Html";

const { clipboard_copied } = icp.local;
const { withState, compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { Component } = wp.element;

class ColorRow extends Component {
	toggleCopied = (color, text_color) => {
		const { setState, updateLastCopiedColor } = this.props;

		setState({
			color: color,
			text_color: text_color
		});

		if (color !== false) {
			updateLastCopiedColor(color);
		}
	};

	render() {
		const { toggleCopied } = this;
		const {
			main_color,
			palette,
			color,
			text_color,
			is_last_copied_color,
			att_with_custom_colors
		} = this.props;

		return (
			<Html className="icp-color_row">
				<Html className="icp-image_color">
					<Color
						color={main_color}
						show_hex={true}
						toggleCopied={toggleCopied}
						att_with_custom_colors={att_with_custom_colors}
					/>
				</Html>
				<Html className="icp-scheme_colors">
					{palette.map((color, index) => (
						<Color
							key={index}
							color={color}
							show_hex={false}
							toggleCopied={toggleCopied}
							att_with_custom_colors={att_with_custom_colors}
						/>
					))}
				</Html>
				{color !== false && is_last_copied_color && (
					<Html
						className={[
							"icp-color_copied",
							`text_color-${text_color}`
						].join(" ")}
						style={{
							backgroundColor: color
						}}
					>
						<Html html_element="span">{clipboard_copied}</Html>
					</Html>
				)}
			</Html>
		);
	}
}

export default compose([
	withState({
		color: false,
		text_color: false
	}),
	withSelect((select, { color }) => {
		const { getLastCopiedColor } = select(plugin_namespace);

		return {
			is_last_copied_color: getLastCopiedColor() === color
		};
	}),
	withDispatch(dispatch => {
		const { updateLastCopiedColor } = dispatch(plugin_namespace);

		return {
			updateLastCopiedColor
		};
	}),
	withTooltip
])(ColorRow);
