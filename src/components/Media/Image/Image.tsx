import React, { FunctionComponent } from "react";
import RgbQuant from "rgbquant";
import { useRef } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";

import styles from "./Image.styl";
import { store_slug, rgbquant_options, Button } from "@/utils";

interface Props {
	open: () => void;
	just_selected: boolean;
}

export const Image: FunctionComponent<Props> = (props: Props) => {
	const $img = useRef<HTMLImageElement | null>(null);
	const { open, just_selected } = props;
	const { setColors } = useDispatch(store_slug);
	const colors = useSelect(select => select(store_slug).getColors());

	const color_distance_eq = useSelect(select =>
		select(store_slug).getColorDistanceEq()
	);

	const color_palette_length = useSelect(select =>
		select(store_slug).getColorPaletteLength()
	);

	const image_url = useSelect(select => select(store_slug).getImageUrl());

	const generatePalette = () => {
		const rgbquant = new RgbQuant({
			...rgbquant_options,
			colors: color_palette_length,
			colorDist: color_distance_eq,
		});

		rgbquant.sample($img.current);

		const palette_raw = rgbquant.palette(true, true);

		const palette = palette_raw.map(
			([r, g, b]: [number, number, number]) => `rgb(${r},${g},${b})`
		);

		setColors(palette);
	};

	return (
		<div className={styles.container}>
			<img
				ref={$img}
				className={styles.image}
				src={image_url}
				onClick={open}
				onLoad={() => {
					// We use just_selected to trigger generatePalette
					// function only when the image has been selected.
					// Otherwise when switching tabs the onLoad callback would
					// trigger the function, although the previous palette is
					// the same.
					if (just_selected || !colors.length) {
						generatePalette();
					}
				}}
			/>

			<Button className={styles.button} onClick={open} icon="edit" />
		</div>
	);
};
