import l, { plugin_name, plugin_namespace_dash, icons } from "./utils/#";
import Sidebar from "./Components/Sidebar/Sidebar";

const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

registerPlugin(plugin_namespace_dash, {
	icon: <div id="icp-pinned-logo">{icons.logo}</div>,
	render: () => (
		<Fragment>
			<PluginSidebar name={plugin_namespace_dash} title={plugin_name}>
				<Sidebar />
			</PluginSidebar>
			<PluginSidebarMoreMenuItem target={plugin_namespace_dash}>
				{plugin_name}
			</PluginSidebarMoreMenuItem>
		</Fragment>
	)
});
