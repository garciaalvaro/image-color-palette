import l, { plugin_namespace, blocks_info } from "../../utils/#";
import ColorsHeader from "./ColorsHeader";
import ColorRow from "./ColorRow";
import Html from "../Utils/_Html";

const { isUndefined, get, isNil, isEqual } = lodash;
const { Component } = wp.element;
const { withSelect, select } = wp.data;
const { compose, withState } = wp.compose;
const { getBlockType } = select("core/blocks");

class ColorsContainer extends Component {
	componentDidUpdate = prevProps => {
		const { selected_block_name, setState } = this.props;

		if (!isEqual(selected_block_name, prevProps.selected_block_name)) {
			const att_with_custom_colors = this.getAttributesWithCustomcolors();

			setState({ att_with_custom_colors: att_with_custom_colors });
		}
	};

	getAttributesWithCustomcolors = () => {
		const { selected_block_name } = this.props;

		if (isNil(selected_block_name)) {
			return [];
		}

		const custom_colors = blocks_info[selected_block_name];
		const attributes_available = get(
			getBlockType(selected_block_name),
			"attributes"
		);

		if (isUndefined(custom_colors) || isUndefined(attributes_available)) {
			return [];
		}

		const custom_colors_sanitized = custom_colors.filter(
			color => !isUndefined(get(attributes_available, color.value))
		);

		return custom_colors_sanitized;
	};

	render() {
		const { colors, att_with_custom_colors } = this.props;

		return (
			<Html id="icp-colors-container">
				<ColorsHeader />
				{colors.map((color, index) => (
					<ColorRow
						key={index}
						att_with_custom_colors={att_with_custom_colors}
						{...color}
					/>
				))}
			</Html>
		);
	}
}

export default compose([
	withState({
		att_with_custom_colors: []
	}),
	withSelect(select => {
		const { getColors } = select(plugin_namespace);
		const { getSelectedBlockClientId, getBlockName } = select(
			"core/editor"
		);
		const selected_block_clientId = getSelectedBlockClientId();

		return {
			colors: getColors(),
			selected_block_name: getBlockName(selected_block_clientId)
		};
	})
])(ColorsContainer);
