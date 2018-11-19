import l from "../../utils/#";

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;
const Span = ({ children, ...rest }) => <span {...rest}>{children}</span>;
const H3 = ({ children, ...rest }) => <h3 {...rest}>{children}</h3>;
const H5 = ({ children, ...rest }) => <h5 {...rest}>{children}</h5>;
const Ol = ({ children, ...rest }) => <ol {...rest}>{children}</ol>;
const Li = ({ children, ...rest }) => <li {...rest}>{children}</li>;

export default Div;
export { Span, H3, H5, Ol, Li };
