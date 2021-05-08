<?php
/**
 * Plugin Name: Image Color Palette
 * Plugin URI: https://wordpress.org/plugins/image-color-palette/
 * Description: Create a color palette based on the colors of an image.
 * Author: melonpan
 * Version: 2.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace IMAGECOLORPALETTE;

// Exit if accessed directly.
if (!defined("ABSPATH")) {
	exit();
}

/**
 * Enqueue the plugin styles and scripts.
 *
 * @since 1.0.0
 */
add_action("enqueue_block_editor_assets", __NAMESPACE__ . '\enqueue', 910);
function enqueue()
{
	$plugin_name = "image-color-palette";
	$plugin_version = "1.5.0";
	$dist_dir = \plugins_url("dist/", __FILE__);

	wp_enqueue_style(
		$plugin_name,
		$dist_dir . $plugin_name . ".css",
		[],
		$plugin_version
	);

	wp_enqueue_script(
		$plugin_name,
		$dist_dir . $plugin_name . ".js",
		[
			"lodash",
			"wp-block-editor",
			"wp-components",
			"wp-compose",
			"wp-data",
			"wp-edit-post",
			"wp-element",
			"wp-hooks",
			"wp-i18n",
			"wp-plugins",
		],
		$plugin_version,
		true // Enqueue in the footer.
	);
}

/**
 * Load plugin localization.
 *
 * @since 1.0.0
 */
add_action("plugins_loaded", __NAMESPACE__ . "\localization");
function localization()
{
	load_plugin_textdomain("image-color-palette");
}
