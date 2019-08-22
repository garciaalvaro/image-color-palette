import { addPrefix } from "utils/tools";

export type Icons = Record<
	"image" | "edit" | "color_picker" | "border" | "fill" | "text" | "logo",
	JSX.Element
>;

export const icons: Icons = {
	image: (
		/* https://material.io/tools/icons/?icon=photo_size_select_actual */
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path fill="none" d="M24 24H0V0h24v24z" />
			<path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z" />
		</svg>
	),
	edit: (
		/* https://material.io/tools/icons/?icon=edit */
		<svg width="17" height="17" viewBox="0 0 24 24">
			<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	),
	color_picker: (
		/* https://material.io/tools/icons/?icon=colorize */
		<svg width="20" height="20" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z" />
		</svg>
	),
	border: (
		/* https://material.io/tools/icons/?icon=border_color */
		<svg width="20" height="20" viewBox="0 0 24 24">
			<path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z" />
			<path d="M0 0h24v24H0z" fill="none" />
			<path fillOpacity=".36" d="M0 20h24v4H0z" />
		</svg>
	),
	fill: (
		/* https://material.io/tools/icons/?icon=format_color_fill */
		<svg width="20" height="20" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z" />
			<path fillOpacity=".36" d="M0 20h24v4H0z" />
		</svg>
	),
	text: (
		/* https://material.io/tools/icons/?icon=format_color_text */
		<svg width="20" height="20" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path fillOpacity=".36" d="M0 20h24v4H0z" />
			<path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" />
		</svg>
	),
	logo: (
		<svg
			className={addPrefix("logo")}
			width="16"
			height="16"
			viewBox="0 0 24 24"
		>
			<rect
				className={addPrefix(["column-1", "row-1"])}
				width="8"
				height="4"
				x="0"
				y="0"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-2", "row-1"])}
				width="8"
				height="4"
				x="8"
				y="0"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-3", "row-1"])}
				width="8"
				height="4"
				x="16"
				y="0"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-1", "row-2"])}
				width="8"
				height="4"
				x="0"
				y="4"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-2", "row-2"])}
				width="8"
				height="4"
				x="8"
				y="4"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-3", "row-2"])}
				width="8"
				height="4"
				x="16"
				y="4"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-1", "row-3"])}
				width="8"
				height="4"
				x="0"
				y="8"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-2", "row-3"])}
				width="8"
				height="4"
				x="8"
				y="8"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-3", "row-3"])}
				width="8"
				height="4"
				x="16"
				y="8"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-1", "row-4"])}
				width="8"
				height="4"
				x="0"
				y="12"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-2", "row-4"])}
				width="8"
				height="4"
				x="8"
				y="12"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-3", "row-4"])}
				width="8"
				height="4"
				x="16"
				y="12"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-1", "row-5"])}
				width="8"
				height="4"
				x="0"
				y="16"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-2", "row-5"])}
				width="8"
				height="4"
				x="8"
				y="16"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-3", "row-5"])}
				width="8"
				height="4"
				x="16"
				y="16"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-1", "row-6"])}
				width="8"
				height="4"
				x="0"
				y="20"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-2", "row-6"])}
				width="8"
				height="4"
				x="8"
				y="20"
				strokeWidth="0"
			/>
			<rect
				className={addPrefix(["column-3", "row-6"])}
				width="8"
				height="4"
				x="16"
				y="20"
				strokeWidth="0"
			/>
		</svg>
	)
};
