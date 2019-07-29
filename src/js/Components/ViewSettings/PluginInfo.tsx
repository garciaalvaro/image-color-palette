import { Icon, Div, H3, Span } from "utils/components";
import { plugin_title } from "utils/data/plugin";

const { instructions_description } = (window as any).image_color_palette.local;

export const PluginInfo: React.ComponentType = props => {
	return (
		<Div id="info">
			<Div id="info-logo">
				<Icon icon="logo" />
			</Div>
			<Div id="info-container">
				<H3 id="info-name">{plugin_title}</H3>
				<Span id="info-description">{instructions_description}</Span>
			</Div>
		</Div>
	);
};