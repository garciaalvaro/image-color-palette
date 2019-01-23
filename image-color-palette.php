<?php
/**
 * Plugin Name: Image Color Palette
 * Plugin URI: https://wordpress.org/plugins/image-color-palette/
 * Description: Create a color palette based on the colors of an image.
 * Author: melonpan
 * Version: 1.3.1
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace IMAGECOLORPALETTE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '1.3.1' );
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

	$data = array(
		'local'  => array(
			/* translators: %s: Block attribute. */
			'paste_to_attribute'                  => __( 'Apply to block\'s %s', 'image-color-palette' ),
			'copy_to_clipboard'                   => __( 'Copy color to the clipboard', 'image-color-palette' ),
			'settings_label'                      => __( 'Settings', 'image-color-palette' ),
			'palette_label'                       => __( 'Palette', 'image-color-palette' ),
			'palette_length_label'                => __( 'Number of palette colors', 'image-color-palette' ),
			'palette_length_description'          => __( 'Number of colors from the image to show in the palette', 'image-color-palette' ),
			'scheme_label'                        => __( 'Color scheme', 'image-color-palette' ),
			'scheme_description'                  => __( 'The selected scheme will appear on the right side of each image color.', 'image-color-palette' ),
			'click_to_open'                       => __( 'Click to open the Media Library and select an image.', 'image-color-palette' ),
			'header_image_colors'                 => __( 'Image colors', 'image-color-palette' ),
			'color_distance_equation_label'       => __( 'Color distance equation', 'image-color-palette' ),
			'color_distance_equation_description' => __( 'Equation used to calculate the dominant colors of the image.', 'image-color-palette' ),
			'instructions_description'            => __( 'Create a color palette based on the colors of an image.', 'image-color-palette' ),
			'schemes'                             => array(
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

	wp_localize_script( PLUGIN_NAME, 'image_color_palette', $data );
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
