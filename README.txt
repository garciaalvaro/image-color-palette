=== Image Color Palette for Gutenberg ===
Contributors: melonpan
Tags: gutenberg, color
Requires at least: 4.9.8
Tested up to: 4.9.8
Stable tag: 1.2.0
Requires PHP: 5.6
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Create a color palette based on the colors of an image.

== Description ==

This plugin provides a simple utility to generate a color palette based on the dominant colors of an image. The colors can be copied to the clipboard and pasted in a color picker.
It also creates color schemes based on the image colors.

Until WordPress 5 is released this plugin depends on the latest version of Gutenberg plugin.

== Screenshots ==

1. Example use of palette generated colors.
2. Scheme select list.

== Usage ==

Make sure [Gutenberg plugin](https://wordpress.org/plugins/gutenberg/) is installed and activated.
Inside the Post editor on the right side of the top Toolbar the plugin icon/button should appear (if not, please read the FAQ below).
Click the icon/button to open the plugin sidebar.
Click the main button and the Media Library will open. Select an image and click the Select button.
A color palette should be created based on the colors of the image.
Click on any of the colors and it will be copied to the clipboard (in HEX format).
Once copied you can paste the color value in the color picker of any block.

== Installation ==

Installation from the WordPress admin.

1. Log in to the WordPress admin and navigate to Plugins > Add New.
2. Type "Image Color Palette" in the Search field.
3. In the results list Image Color Palette plugin should appear, click **Install Now** button.
4. Once it finished installing, click the Activate button.
5. That's it, now you can go to any post where Gutenberg is enabled and start using the plugin.

== Frequently Asked Questions ==

= I do not see the plugin icon in the post editor =

Alternatively the Plugin can be opened from the More button (the 3 dots on the right side of the Gutenberg top Toolbar).
Click the More button and inside the menu list click on the plugin name "Image Color Palette".

== Changelog ==

= 1.2.0 =
* Improved code base and interface
* Organized UI in two tabs: Palette & Settings
* The scheme can now be toggled directly from the Palette

= 1.1.0 =
* Improved UX with better debouncing and better performance in color palette generation
* Moved copied_color and copied_index out of store
* Reorganized JavaScript components

= 1.0.0 =
* Initial release.

== Credits ==

Banner image belongs to [Simone Hutsch](https://unsplash.com/@heysupersimi).
