// Console log shortcut
declare const l: Function;

// Lodash
declare const lodash: typeof import("lodash");

// rgbquant
declare module "rgbquant";

// Wordpress
declare const wp: {
	blockEditor: typeof import("wordpress__block-editor");
	blocks: typeof import("wordpress__blocks");
	components: typeof import("wordpress__components");
	compose: typeof import("wordpress__compose");
	data: typeof import("wordpress__data");
	editPost: typeof import("wordpress__edit-post");
	element: typeof import("wordpress__element");
	hooks: typeof import("wordpress__hooks");
	i18n: typeof import("wordpress__i18n");
	plugins: typeof import("wordpress__plugins");
};
