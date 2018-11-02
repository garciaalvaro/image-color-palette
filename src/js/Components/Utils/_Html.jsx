import l from "../../utils/#";

const Html = ({ children, html_element, ...rest }) => {
	let element;

	switch (html_element) {
		case "span":
			element = <span {...rest}>{children}</span>;
			break;
		case "h5":
			element = <h5 {...rest}>{children}</h5>;
			break;
		case "h3":
			element = <h3 {...rest}>{children}</h3>;
			break;
		case "ol":
			element = <ol {...rest}>{children}</ol>;
			break;
		case "li":
			element = <li {...rest}>{children}</li>;
			break;
		default:
			element = <div {...rest}>{children}</div>;
	}

	return element;
};

export default Html;
