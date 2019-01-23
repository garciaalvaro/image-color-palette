import { Div } from "utils/components";
import { pr_store } from "utils/data/plugin";
import { ColorRow } from "./ColorRow";
import { ColorsHeader } from "./ColorsHeader";

interface WithSelectProps extends Pick<State, "colors"> {}

interface Props extends WithSelectProps {}

const { withSelect } = wp.data;

export const Colors: React.ComponentType = withSelect<WithSelectProps>(
	select => ({
		colors: select(pr_store).getColors()
	})
)((props: Props) => {
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
