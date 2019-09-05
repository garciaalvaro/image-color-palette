import { __ } from "@wordpress/i18n";

import { Div, Span, Icon } from "utils/Components";

interface Props {
	open: Function;
}

export const MediaPlaceholder: React.ComponentType<Props> = props => {
	const { open } = props;

	return (
		<Div onClick={open} id="placeholder">
			<Div id="placeholder-icon">
				<Icon icon="image" />
			</Div>
			<Div id="placeholder-description">
				<Span>
					{__("Click to open the Media Library and select an image.")}
				</Span>
			</Div>
		</Div>
	);
};
