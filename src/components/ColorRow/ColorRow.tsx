import React, { FunctionComponent } from "react";
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import styles from "./ColorRow.styl";
import { generateColorScheme, store_slug } from "@/utils";
import { Color } from "./Color";

interface Props {
	color: string;
}

export const ColorRow: FunctionComponent<Props> = props => {
	const color_scheme = useSelect(select =>
		select(store_slug).getColorScheme()
	);

	const [scheme, setScheme] = useState<ColorScheme>([]);

	const [scheme_bg, setSchemeBg] = useState<ColorBg[]>([]);

	const [color_bg, setColorBg] = useState<ColorBg>("light");

	const [color, setColor] = useState<Color>("");

	useEffect(() => {
		const { scheme, scheme_bg, color, color_bg } = generateColorScheme(
			color_scheme,
			props.color
		);

		setScheme(scheme);
		setSchemeBg(scheme_bg);
		setColor(color);
		setColorBg(color_bg);
	}, [color, color_scheme]);

	return (
		<div className={styles.container}>
			<Color color={color} color_bg={color_bg} show_text={true} />

			{scheme.length > 0 && (
				<div>
					{scheme.map((color, index) => (
						<Color
							// Ideally a unique id should be used,
							// but the color value could be repeated.
							key={index}
							color={color}
							color_bg={scheme_bg[index]}
						/>
					))}
				</div>
			)}
		</div>
	);
};
