=== Image Color Palette ===
Contributors: melonpan
Tags: blocks, gutenberg, color
Requires at least: 5.2
Tested up to: 5.2
Stable tag: 1.4.2
Requires PHP: 7.1
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Create a color palette based on the colors of an image.

== Description ==

This plugin provides a simple utility to generate a color palette based on the dominant colors of an image.
It also creates color schemes based on the image colors. Available schemes include:

* Analogous
* Monochromatic
* Triad
* Complementary
* Lighter
* Brighter
* Darker
* Desaturated
* Saturated

The colors can be copied to the clipboard and pasted in a color picker.
When a registered block is selected the plugin permits applying the color to certain block attributes like text or background color.

[GitHub repository](https://wordpress.org/plugins/image-color-palette/)


== Screenshots ==

1. Example use of palette generated colors.
2. Scheme select list.

== Usage ==

Go to any post editor where the new Gutenberg editor is enabled.
Inside the Post editor on the right side of the top Toolbar the plugin icon/button should appear (if not, please read the FAQ below).
Click the icon/button to open the plugin sidebar.
Click the main button and the Media Library will open. Select an image and click the Select button.
A color palette will be created based on the colors of the image.
Click on any of the colors and a menu will appear.
The color can be copied to the clipboard (in HEX format) and pasted in the color picker of any block.
For supported blocks, the menu will display extra options to apply the color directly to the Block attributes.

== Installation ==

Installation from the WordPress admin.

1. Log in to the WordPress admin and navigate to Plugins > Add New.
2. Type "Image Color Palette" in the Search field.
3. In the results list Image Color Palette plugin should appear, click **Install Now** button.
4. Once it finished installing, click the Activate button.
5. That's it, now you can go to any post where Gutenberg is enabled and start using the plugin.

== Frequently Asked Questions ==

= I do not see the plugin icon in the post editor =

Alternatively the Plugin can be opened from the Show More button (the 3 dots on the right side of the Editor Top Bar).
Click the More button and inside the menu list click on the plugin name "Image Color Palette".

== Changelog ==

= 1.4.2 =
* Monochromatic scheme colors are now sorted by brightness.
* Fixed small bug which recalculated color palette unnecessarily.
* Fixed popover menu not appearing with the correct z-index.
* Raised minimum WordPress version to 5.2 to make use of block-editor package.

= 1.4.1 =
* Fixed bug where no version number was being added to the enqueues.

= 1.4.0 =
* Added Color distance equation option.
* Added more core block types to set it's color attributes.
* Added the filter "imageColorPalette.addBlockTypeColorAttributes" for developers to include their own block type attributes.
* Updated the color menu UI.
* Rebuilt code, migrated JavaScript to TypeScript.

= 1.3.1 =
* Fixed block selected before plugin sidebar is open not passing attribute options to color menu.

= 1.3.0 =
* Added new feature to paste the color automatically to the selected block color attribute (currently available for core blocks)
* Added new popover menu when clicking on a color
* Small fixes

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
