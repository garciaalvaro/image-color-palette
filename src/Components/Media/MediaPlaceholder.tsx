import { Div, Span, Icon } from "utils/Components";

interface Props {
	open: Function;
}

const { click_to_open } = (window as any).image_color_palette.local;

export const MediaPlaceholder: React.ComponentType<Props> = props => {
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
