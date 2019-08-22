import { prepareProps } from "utils/tools";

export const ImgRef = wp.element.forwardRef<HTMLImageElement, ComponentProps>(
	(props, ref) => {
		const { children, ...rest } = props;

		return <img {...prepareProps(rest)} ref={ref} />;
	}
);
