<?php
/**
 * Plugin Name: Image Color Palette
 * Plugin URI: https://wordpress.org/plugins/image-color-palette/
 * Description: Create a color palette based on the colors of an image.
 * Author: melonpan
 * Version: 1.5.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace IMAGECOLORPALETTE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '1.5.0' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_NAME' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_NAME', 'image-color-palette' );
}
if ( ! defined( __NAMESPACE__ . '\BUILD_DIR' ) ) {
	define( __NAMESPACE__ . '\BUILD_DIR', plugins_url( 'build/', __FILE__ ) );
}

/**
 * Enqueue the plugin styles and scripts.
 *
 * @since 1.0.0
 */
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue', 910 );
function enqueue() {

	wp_enqueue_style(
		PLUGIN_NAME,
		BUILD_DIR . PLUGIN_NAME . '.css',
		array(),
		PLUGIN_VERSION
	);

	wp_enqueue_script(
		PLUGIN_NAME,
		BUILD_DIR . PLUGIN_NAME . '.js',
		array(
			'lodash',
			'wp-block-editor',
			'wp-components',
			'wp-compose',
			'wp-data',
			'wp-edit-post',
			'wp-element',
			'wp-hooks',
			'wp-i18n',
			'wp-plugins',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
}

/**
 * Load plugin localization.
 *
 * @since 1.0.0
 */
add_action( 'plugins_loaded', __NAMESPACE__ . '\localization' );
function localization() {
	load_plugin_textdomain( 'image-color-palette' );
}
