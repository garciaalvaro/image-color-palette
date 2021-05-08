import React, { FunctionComponent } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";

import styles from "./Color.styl";
import { Button, useToggle, className } from "@/utils";
import { Menu } from "../Menu";

interface Props {
	color: Color;
	color_bg: ColorBg;
	show_text?: boolean;
}

export const Color: FunctionComponent<Props> = props => {
	const { color, color_bg, show_text } = props;
	const { is_open, close, toggle } = useToggle();

	return (
		<Popover
			containerClassName={styles.popover}
			isOpen={is_open}
			onClickOutside={close}
			containerStyle={{ transition: "none" }}
			positions={["top", "right", "left", "bottom"]}
			content={({ position, childRect, popoverRect }) => (
				<ArrowContainer
					position={position}
					childRect={childRect}
					popoverRect={popoverRect}
					arrowColor="#111"
					arrowSize={6}
				>
					<Menu color={color} close={close} />
				</ArrowContainer>
			)}
		>
			<Button
				onClick={toggle}
				style={{ backgroundColor: color }}
				className={className(styles.button, styles[color_bg])}
			>
				{show_text && <span>{color}</span>}
			</Button>
		</Popover>
	);
};
