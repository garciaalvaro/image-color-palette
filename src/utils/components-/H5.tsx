import { prepareProps } from "utils/tools/prepareProps";

export const H5: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <h5 {...prepareProps(rest)}>{children}</h5>;
};
