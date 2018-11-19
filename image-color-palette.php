<?php
/**
 * Plugin Name: Image Color Palette for Gutenberg
 * Plugin URI: https://wordpress.org/plugins/image-color-palette/
 * Description: Create a color palette based on the colors of an image.
 * Author: melonpan
 * Version: 1.3.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace IMAGECOLORPALETTE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'IMAGECOLORPALETTE_PLUGIN_VERSION' ) ) {
	define( 'IMAGECOLORPALETTE_PLUGIN_VERSION', '1.3.0' );
}
if ( ! defined( 'IMAGECOLORPALETTE_BUILD_DIR' ) ) {
	define( 'IMAGECOLORPALETTE_BUILD_DIR', plugins_url( 'build/', __FILE__ ) );
}

/**
 * Enqueue the plugin styles and scripts.
 *
 * @since 1.0.0
 */
function enqueue() {

	wp_enqueue_style(
		'image-color-palette-css',
		IMAGECOLORPALETTE_BUILD_DIR . 'image-color-palette.css',
		array(),
		IMAGECOLORPALETTE_PLUGIN_VERSION
	);

	wp_enqueue_script(
		'image-color-palette-js',
		IMAGECOLORPALETTE_BUILD_DIR . 'image-color-palette.js',
		array(
			'jquery',
			'lodash',
			'wp-i18n',
			'wp-compose',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-edit-post',
			'wp-plugins',
			'wp-data',
		),
		IMAGECOLORPALETTE_PLUGIN_VERSION,
		true // Enqueue in the footer.
	);

	$data = array(
		'local'  => array(
			/* translators: %s: Block attribute. */
			'paste_to_attribute'         => __( 'Apply color to selected block\'s %s', 'image-color-palette' ),
			'copy_to_clipboard'          => __( 'Copy color to the clipboard', 'image-color-palette' ),
			'settings_label'             => __( 'Settings', 'image-color-palette' ),
			'palette_label'              => __( 'Palette', 'image-color-palette' ),
			'palette_length_label'       => __( 'Number of palette colors', 'image-color-palette' ),
			'palette_length_description' => __( 'Number of colors from the image to show in the palette', 'image-color-palette' ),
			'scheme_label'               => __( 'Color scheme', 'image-color-palette' ),
			'scheme_description'         => __( 'The selected scheme will appear on the right side of each image color.', 'image-color-palette' ),
			'click_to_open'              => __( 'Click to open the Media Library and select an image.', 'image-color-palette' ),
			'instructions_1'             => __( 'Click the button and select an image from the Media Library. A palette of colors should appear below the image.', 'image-color-palette' ),
			'instructions_2'             => __( 'Click on a color and its menu will open. If there is a block selected that has custom color attributes, options to update them directly from the menu will show (currently, core blocks are supported).', 'image-color-palette' ),
			'instructions_3'             => __( 'If the color was copied to the clipboard (in HEX format) it can be pasted to the color picker of any block.', 'image-color-palette' ),
			'instructions_description'   => __( 'Create a color palette based on the colors of an image.', 'image-color-palette' ),
			'instructions'               => __( 'Instructions', 'image-color-palette' ),
			'header_image_colors'        => __( 'Image colors', 'image-color-palette' ),
			'schemes'                    => array(
				'none'          => __( 'No color scheme', 'image-color-palette' ),
				'analogous'     => __( 'Analogous', 'image-color-palette' ),
				'monochromatic' => __( 'Monochromatic', 'image-color-palette' ),
				'triad'         => __( 'Triad', 'image-color-palette' ),
				'complementary' => __( 'Complementary', 'image-color-palette' ),
				'lighter'       => __( 'Lighter', 'image-color-palette' ),
				'brighter'      => __( 'Brighter', 'image-color-palette' ),
				'darker'        => __( 'Darker', 'image-color-palette' ),
				'desaturated'   => __( 'Desaturated', 'image-color-palette' ),
				'saturated'     => __( 'Saturated', 'image-color-palette' ),
			),
		),
	);

	wp_localize_script( 'image-color-palette-js', 'icp', $data );

}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue' );

/**
 * Load plugin localization.
 *
 * @since 1.0.0
 */
function localization() {

	load_plugin_textdomain( 'image-color-palette' );

}
add_action( 'plugins_loaded', __NAMESPACE__ . '\localization' );
