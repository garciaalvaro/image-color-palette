interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
}

type ColorScheme =
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
