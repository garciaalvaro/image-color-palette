type BlockTypeColorAttributes = Record<
	string,
	{ label: string; attribute: string; icon: "fill" | "text" | "border" }[]
>;

const { __ } = wp.i18n;

export const block_types: BlockTypeColorAttributes = {
	...wp.hooks.applyFilters("imageColorPalette.addBlockTypeColorAttributes", {}),
	"core/group": [
		{
			label: __("Background Color"),
			attribute: "customBackgroundColor",
			icon: "fill"
		}
	],
	"core/heading": [
		{ label: __("Text Color"), attribute: "customTextColor", icon: "text" }
	],
	"core/paragraph": [
		{
			label: __("Background Color"),
			attribute: "customBackgroundColor",
			icon: "fill"
		},
		{ label: __("Text Color"), attribute: "customTextColor", icon: "text" }
	],
	"core/button": [
		{
			label: __("Background Color"),
			attribute: "customBackgroundColor",
			icon: "fill"
		},
		{ label: __("Text Color"), attribute: "customTextColor", icon: "text" }
	],
	"core/pullquote": [
		{ label: __("Main Color"), attribute: "customMainColor", icon: "border" },
		{ label: __("Text Color"), attribute: "customTextColor", icon: "text" }
	],
	"core/media-text": [
		{
			label: __("Background Color"),
			attribute: "customBackgroundColor",
			icon: "fill"
		}
	],
	"core/cover": [
		{
			label: __("Overlay Color"),
			attribute: "customOverlayColor",
			icon: "fill"
		}
	]
};
