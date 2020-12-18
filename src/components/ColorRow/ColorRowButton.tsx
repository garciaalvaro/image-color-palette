import { castArray } from "lodash";
import Popover, { ArrowContainer } from "react-tiny-popover";

import { Span, Button } from "utils/components";
import { ColorRowMenu } from "./ColorRowMenu";
import { useToggle } from "utils/hooks";

interface Props {
	button_extra_className: string | string[];
	color: string;
	color_type: string;
	label?: string;
}

export const ColorRowButton: React.ComponentType<Props> = props => {
	const { label, button_extra_className, color, color_type } = props;
	const { is_open, close, toggle } = useToggle();

	return (
		<Popover
			containerStyle={{
				minWidth: "200px",
				marginLeft: "-10px",
				zIndex: "999999"
			}}
			isOpen={is_open}
			onClickOutside={close}
			transitionDuration={0.01}
			content={({ position, targetRect, popoverRect }) => (
				<ArrowContainer
					position={position}
					targetRect={targetRect}
					popoverRect={popoverRect}
					arrowColor={"#111"}
					arrowSize={6}
				>
					<ColorRowMenu color={color} close={close} />
				</ArrowContainer>
			)}
		>
			<Button
				onClick={toggle}
				style={{ backgroundColor: color }}
				className={[
					...castArray(button_extra_className),
					"button",
					"button-open_color",
					`color_type-${color_type}`
				]}
			>
				{label && <Span>{label}</Span>}
			</Button>
		</Popover>
	);
};
