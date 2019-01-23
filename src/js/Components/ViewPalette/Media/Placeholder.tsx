import { Div, Span, Icon } from "utils/components";

interface OwnProps {
	open: Function;
}

interface Props extends OwnProps {}

const { click_to_open } = (window as any).image_color_palette.local;

export const Placeholder: React.ComponentType<Props> = props => {
	const { open } = props;

	return (
		<Div onClick={open} id="placeholder">
			<Div id="placeholder-icon">
				<Icon icon="image" />
			</Div>
			<Div id="placeholder-description">
				<Span>{click_to_open}</Span>
			</Div>
		</Div>
	);
};
