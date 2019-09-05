import { __ } from "@wordpress/i18n";

import { Div, H5, Span } from "utils/Components";
import { ControlColorScheme } from "./ControlColorScheme";

export const ColorsHeader: React.ComponentType = props => {
	return (
		<Div id="colors-header">
			<H5 id="title-image_colors">
				<Span>{__("Image colors")}</Span>
			</H5>
			<ControlColorScheme />
		</Div>
	);
};
