import l from "../../utils/#";

const { Component } = wp.element;

class HtmlComponent extends Component {
	render() {
		const { children, html_element, ...rest } = this.props;
		let element;

		switch (html_element) {
			case "span":
				element = <span {...rest}>{children}</span>;
				break;
			default:
				element = <div {...rest}>{children}</div>;
		}

		return element;
	}
}

export default HtmlComponent;
