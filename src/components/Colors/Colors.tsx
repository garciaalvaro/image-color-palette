import { withSelect } from "@wordpress/data";

import "./Colors.styl";
import { Div } from "utils/components";
import { store_slug } from "utils/data";
import { ColorRow } from "../ColorRow";
import { ColorsHeader } from "../ColorsHeader";

type WithSelectProps = Pick<State, "colors">;

export const Colors: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		colors: select(store_slug).getColors(),
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
