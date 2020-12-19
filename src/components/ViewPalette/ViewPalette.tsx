import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";

import "./ViewPalette.styl";
import { Div, Span } from "utils/components";
import { store_slug } from "utils/data";
import { Media } from "../Media";
import { Colors } from "../Colors";

type WithSelectProps = Pick<State, "colors" | "image_url">;

type Props = WithSelectProps;

export const ViewPalette: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		colors: select(store_slug).getColors(),
		image_url: select(store_slug).getImageUrl(),
	})
)((props: Props) => {
	const { colors, image_url } = props;

	return (
		<Div id="view-palette">
			{!colors.length && !!image_url && (
				<Div id="quantizing">
					<Span>{__("Quantizing...")}</Span>
				</Div>
			)}
			<Media />
			{!!colors.length && <Colors />}
		</Div>
	);
});
