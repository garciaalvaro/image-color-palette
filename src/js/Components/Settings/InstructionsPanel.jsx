import l from "../../utils/#";
import Div, { Ol, Li } from "../Utils/_Html";

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
			<Div id="icp-instructions-content">
				<Ol>
					{steps.map((step, index) => (
						<Li key={index}>{step}</Li>
					))}
				</Ol>
			</Div>
		</PanelBody>
	);
};

export default InstructionsPanel;
