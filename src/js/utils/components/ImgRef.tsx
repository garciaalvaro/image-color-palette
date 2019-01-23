import { HTMLProps } from "./core";
import { addPrefix } from "utils/tools/addPrefix";

export const ImgRef = wp.element.forwardRef(
	(props_raw: Omit<HTMLProps, "children">, ref: any) => {
		const { id, classes = [], ...rest } = props_raw;

		const props = {
			id: id ? addPrefix(id) : undefined,
			className: classes && classes.length ? addPrefix(classes) : undefined,
			...rest
		};

		return <img ref={ref} {...props} />;
	}
);
