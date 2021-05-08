import React, { PropsWithChildren } from "react";
import { forwardRef } from "@wordpress/element";

import styles from "./Button.styl";
import { className, ClassName } from "@/utils/tools/className";
import { Icon, IconName } from "../Icon";

interface Props {
	type?: "text" | "icon";
	icon?: IconName;
	onClick: () => void;
	className?: ClassName;
	style?: Record<string, string | number>;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
	(props, ref) => {
		const { children, icon, style, type, onClick } = props;

		return (
			<button
				ref={ref}
				type="button"
				onClick={onClick}
				className={className(
					styles.container,
					type ? styles[type] : null,
					props.className
				)}
				style={style}
			>
				{icon && <Icon icon={icon} />}

				{children}
			</button>
		);
	}
);
