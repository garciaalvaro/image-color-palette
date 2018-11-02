import l from "../../utils/#";

const { forwardRef } = wp.element;

const HtmlForwardRef = forwardRef(
	({ children, html_element, ...rest }, ref) => {
		let element;

		switch (html_element) {
			case "img":
				element = <img {...rest} ref={ref} />;
				break;
			default:
				element = (
					<div {...rest} ref={ref}>
						{children}
					</div>
				);
		}

		return element;
	}
);

export default HtmlForwardRef;
