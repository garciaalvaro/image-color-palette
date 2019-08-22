import { Div, H5, Span } from "utils/Components";
import { ColorsHeaderControlScheme } from "./ColorsHeaderControlScheme";

const { header_image_colors } = (window as any).image_color_palette.local;

export const ColorsHeader: React.ComponentType = props => {
	return (
		<Div id="colors_header">
			<H5 id="colors_header-title">
				<Span>{header_image_colors}</Span>
			</H5>
			<ColorsHeaderControlScheme />
		</Div>
	);
};
