import { forwardRef } from "@wordpress/element";

import { prepareProps } from "utils/tools/prepareProps";

export const ImgRef = forwardRef<HTMLImageElement, ComponentProps>(
	(props, ref) => {
		const { children, ...rest } = props;

		return <img {...prepareProps(rest)} ref={ref} />;
	}
);
