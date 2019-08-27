interface State {
	view: "palette" | "settings";
	color_distance_equation: "euclidean" | "manhattan";
	color_palette_length: number;
	colors: string[];
	color_scheme: ColorScheme;
	image_id: number;
	image_url: string;
}
