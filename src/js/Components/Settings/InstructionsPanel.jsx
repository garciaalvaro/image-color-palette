import l from "../../utils/#";
import Html from "../Utils/_Html";

const {
	instructions,
	instructions_1,
	instructions_2,
	instructions_3
} = icp.local;
const steps = [instructions_1, instructions_2, instructions_3];
const { PanelBody } = wp.components;

const InstructionsPanel = () => {
	return (
		<PanelBody
			initialOpen={false}
			title={instructions}
			className="icp-instructions-container icp-panel"
		>
			<Html id="icp-instructions-content">
				<Html html_element="ol">
					{steps.map((step, index) => (
						<Html key={index} html_element="li">
							{step}
						</Html>
					))}
				</Html>
			</Html>
		</PanelBody>
	);
};

export default InstructionsPanel;
