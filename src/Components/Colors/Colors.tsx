import { Div } from "utils/Components";
import { pr_store } from "utils/data";
import { ColorRow } from "../ColorRow/ColorRow";
import { ColorsHeader } from "../ColorsHeader/ColorsHeader";

interface WithSelectProps extends Pick<State, "colors"> {}

const { withSelect } = wp.data;

export const Colors: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		colors: select(pr_store).getColors()
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
