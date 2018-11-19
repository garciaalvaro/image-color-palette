import l from "../../utils/#";
import Color from "./Color";
import Div from "../Utils/_Html";

const { Component } = wp.element;

class ColorRow extends Component {
	render() {
		const { main_color, palette, att_with_custom_colors } = this.props;

		return (
			<Div className="icp-color_row">
				<Div className="icp-image_color">
					<Color
						color={main_color}
						show_hex={true}
						att_with_custom_colors={att_with_custom_colors}
					/>
				</Div>
				<Div className="icp-scheme_colors">
					{palette.map((color, index) => (
						<Color
							key={index}
							color={color}
							show_hex={false}
							att_with_custom_colors={att_with_custom_colors}
						/>
					))}
				</Div>
			</Div>
		);
	}
}

export default ColorRow;
