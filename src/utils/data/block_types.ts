import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";

interface BlockTypeColorAttribute {
	label: string;
	attribute:
		| string
		| ((
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				attributes: Record<string, any>,
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				prop: any
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
		  ) => Record<string, any>);
	icon: "fill" | "text" | "border";
}

interface BlockTypeColorAttributes {
	[block_type: string]: BlockTypeColorAttribute[];
}

const text_color_attr: BlockTypeColorAttribute = {
	label: __("Text Color"),
	icon: "text",
	attribute: (attributes, color) => ({
		style: {
			...(attributes.style || {}),
			color: {
				...(attributes.style?.color || {}),
				text: color,
			},
		},
	}),
};

const bg_color_attr: BlockTypeColorAttribute = {
	label: __("Background Color"),
	icon: "fill",
	attribute: (attributes, color) => ({
		style: {
			...(attributes.style || {}),
			color: {
				...(attributes.style?.color || {}),
				background: color,
			},
		},
	}),
};

export const block_types: BlockTypeColorAttributes = {
	...(applyFilters(
		"imageColorPalette.addBlockTypeColorAttributes",
		{}
	) as BlockTypeColorAttributes),

	"core/group": [text_color_attr],

	"core/heading": [text_color_attr, bg_color_attr],

	"core/paragraph": [text_color_attr, bg_color_attr],

	"core/button": [text_color_attr, bg_color_attr],

	"core/pullquote": [
		{
			label: __("Main Color"),
			attribute: "customMainColor",
			icon: "border",
		},
		{ label: __("Text Color"), attribute: "customTextColor", icon: "text" },
	],

	"core/media-text": [text_color_attr, bg_color_attr],

	"core/cover": [
		{
			label: __("Overlay Color"),
			attribute: "customOverlayColor",
			icon: "fill",
		},
	],
};
