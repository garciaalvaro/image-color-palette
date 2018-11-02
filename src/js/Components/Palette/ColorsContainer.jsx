import l, { plugin_namespace } from "../../utils/#";
import ColorsHeader from "./ColorsHeader";
import ColorRow from "./ColorRow";
import Html from "../Utils/_Html";

const { withSelect } = wp.data;

const ColorsContainer = props => {
	const { colors } = props;

	return (
		<Html id="icp-colors-container">
			<ColorsHeader />
			{colors.map((color, index) => (
				<ColorRow key={index} {...color} />
			))}
		</Html>
	);
};

export default withSelect(select => {
	const { getColors } = select(plugin_namespace);

	return {
		colors: getColors()
	};
})(ColorsContainer);
