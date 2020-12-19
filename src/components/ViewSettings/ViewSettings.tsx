import "./ViewSettings.styl";
import { Div } from "utils/components";
import { Controls } from "../Controls";

export const ViewSettings: React.ComponentType = () => {
	return (
		<Div id="view-settings">
			<Controls />
		</Div>
	);
};
