import { forwardRef } from "@wordpress/element";

import { prepareProps } from "utils/tools/prepareProps";

export const ImgRef = forwardRef<HTMLImageElement, ComponentProps>(
	(props, ref) => {
		return <img {...prepareProps(props)} ref={ref} />;
	}
);
