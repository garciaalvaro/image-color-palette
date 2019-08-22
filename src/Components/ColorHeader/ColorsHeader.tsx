import { Div, H5, Span } from "utils/Components";
import { ControlColorScheme } from "./ControlColorScheme";

const { header_image_colors } = (window as any).image_color_palette.local;

export const ColorsHeader: React.ComponentType = props => {
	return (
		<Div id="colors-header">
			<H5 id="title-image_colors">
				<Span>{header_image_colors}</Span>
			</H5>
			<ControlColorScheme />
		</Div>
	);
};
