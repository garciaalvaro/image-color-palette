import { __ } from "@wordpress/i18n";

import { Icon, Div, H3, Span } from "utils/Components";
import { plugin_title } from "utils/data";

export const ControlPluginInfo: React.ComponentType = props => {
	return (
		<Div id="info">
			<Div id="info-logo">
				<Icon icon="logo" />
			</Div>
			<Div id="info-container">
				<H3 id="info-name">{plugin_title}</H3>
				<Span id="info-description">
					{__("Create a color palette based on the colors of an image.")}
				</Span>
			</Div>
		</Div>
	);
};
