import { withSelect } from "@wordpress/data";

import { Div } from "utils/Components";
import { store_slug } from "utils/data";
import { ColorRow } from "../ColorRow/ColorRow";
import { ColorsHeader } from "../ColorsHeader/ColorsHeader";

interface WithSelectProps extends Pick<State, "colors"> {}

export const Colors: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		colors: select(store_slug).getColors()
	})
)(props => {
	const { colors } = props;

	return (
		<Div id="colors">
			<ColorsHeader />
			{colors.map((color, index) => (
				<ColorRow key={index} color={color} />
			))}
		</Div>
	);
});
