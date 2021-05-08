type ColorSchemeType =
	| "none"
	| "analogous"
	| "monochromatic"
	| "triad"
	| "complementary"
	| "lighter"
	| "brighter"
	| "darker"
	| "desaturated"
	| "saturated";

type TinyColorInstance = tinycolor.Instance;

type ColorBg = "light" | "dark";

type ValueOf<T> = T[keyof T];

type Color = string;

type ColorScheme = Color[];

type View = "palette" | "settings";

type ColorDistanceEq = "euclidean" | "manhattan";
