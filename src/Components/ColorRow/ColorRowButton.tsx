import Popover, { ArrowContainer } from "react-tiny-popover";

import { Span, Button } from "utils/Components";
import { ColorRowMenu } from "./ColorRowMenu";

interface WithStateProps {
	is_open: boolean;
}

interface OwnProps {
	button_extra_className: string | string[];
	color: string;
	color_type: string;
	label?: string;
}

interface Props extends OwnProps, WithStateProps, SetStateProp {}

const { castArray } = lodash;
const { withState } = wp.compose;

export const ColorRowButton: React.ComponentType<OwnProps> = withState<
	WithStateProps
>({
	is_open: false
})((props: Props) => {
	const {
		label,
		button_extra_className,
		color,
		color_type,
		is_open,
		setState
	} = props;
	const close = () => setState({ is_open: false });
	const toggle = () => setState({ is_open: !is_open });

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
});
