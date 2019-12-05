import { __ } from "@wordpress/i18n";

import "./ColorsHeader.styl";
import { Div, H5, Span } from "utils/Components";
import { ColorsHeaderControlScheme } from "./ColorsHeaderControlScheme";

export const ColorsHeader: React.ComponentType = props => {
	return (
		<Div id="colors_header">
			<H5 id="colors_header-title">
				<Span>{__("Image colors")}</Span>
			</H5>
			<ColorsHeaderControlScheme />
		</Div>
	);
};
