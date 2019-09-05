import { useState, useEffect } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

import { generateColorsScheme } from "utils/tools";
import { store_slug } from "utils/data";
import { Div } from "utils/Components";
import { ColorRowButton } from "./ColorRowButton";

interface WithSelectProps extends Pick<State, "color_scheme"> {}

interface OwnProps {
	color: string;
}

export const ColorRow: React.ComponentType<OwnProps> = withSelect<
	WithSelectProps,
	OwnProps
>(select => ({
	color_scheme: select(store_slug).getColorScheme()
}))(props => {
	const { color, color_scheme } = props;
	const [scheme_colors, setSchemeColors] = useState<string[]>([]);
	const [scheme_colors_type, setSchemeColorsType] = useState<
		("light" | "dark")[]
	>([]);
	const [color_hex, setColorHex] = useState<string>("");
	const [color_type, setColorType] = useState<"light" | "dark">("light");

	useEffect(() => {
		const {
			scheme_colors,
			scheme_colors_type,
			color_hex,
			color_type
		} = generateColorsScheme(color_scheme, color);

		setSchemeColors(scheme_colors);
		setSchemeColorsType(scheme_colors_type);
		setColorHex(color_hex);
		setColorType(color_type);
	}, [color, color_scheme]);

	return (
		<Div className="color_row">
			<ColorRowButton
				label={color_hex}
				button_extra_className="main_color"
				color={color_hex}
				color_type={color_type}
			/>
			{!!scheme_colors.length && (
				<Div className="scheme_colors">
					{scheme_colors.map((color, index) => (
						<ColorRowButton
							key={index}
							button_extra_className="scheme_color"
							color={color}
							color_type={scheme_colors_type[index]}
						/>
					))}
				</Div>
			)}
		</Div>
	);
});
