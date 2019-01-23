import { Span, Button } from "utils/components";
import Popover, { ArrowContainer } from "react-tiny-popover";
import { Menu } from "./Menu";

interface WithStateProps {
	is_open: boolean;
}

interface OwnProps {
	button_extra_classes: string | string[];
	color: string;
	color_type: string;
	label?: string;
}

interface Props extends OwnProps, WithStateProps, SetStateProp {}

const { castArray } = lodash;
const { withState } = wp.compose;

export const ButtonPopover: React.ComponentType<OwnProps> = withState<
	WithStateProps
>({
	is_open: false
})((props: Props) => {
	const {
		label,
		button_extra_classes,
		color,
		color_type,
		is_open,
		setState
	} = props;
	const close = () => setState({ is_open: false });
	const toggle = () => setState({ is_open: !is_open });

	return (
		<Popover
			isOpen={is_open}
			position={"top"}
			onClickOutside={close}
			transitionDuration={0.1}
			content={({ position, targetRect, popoverRect }) => (
				<ArrowContainer
					position={position}
					targetRect={targetRect}
					popoverRect={popoverRect}
					arrowColor={"#111"}
					arrowSize={6}
				>
					<Menu color={color} close={close} />
				</ArrowContainer>
			)}
		>
			<Button
				onClick={toggle}
				style={{ backgroundColor: color }}
				classes={[
					...castArray(button_extra_classes),
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
