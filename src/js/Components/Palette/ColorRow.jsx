import l from "../../utils/#";
import Color from "./Color";
import Html from "../Utils/_Html";

const { Component } = wp.element;

class ColorRow extends Component {
	render() {
		const { main_color, palette, att_with_custom_colors } = this.props;

		return (
			<Html className="icp-color_row">
				<Html className="icp-image_color">
					<Color
						color={main_color}
						show_hex={true}
						att_with_custom_colors={att_with_custom_colors}
					/>
				</Html>
				<Html className="icp-scheme_colors">
					{palette.map((color, index) => (
						<Color
							key={index}
							color={color}
							show_hex={false}
							att_with_custom_colors={att_with_custom_colors}
						/>
					))}
				</Html>
			</Html>
		);
	}
}

export default ColorRow;
