interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
}

interface SetStateProp {
	setState(obj: any): void;
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
