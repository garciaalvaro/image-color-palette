import l from "../../utils/#";

const { Component } = wp.element;

class DivComponent extends Component {
	render() {
		const { children, ...rest } = this.props;

		return <div {...rest}>{children}</div>;
	}
}
class SpanComponent extends Component {
	render() {
		const { children, ...rest } = this.props;

		return <span {...rest}>{children}</span>;
	}
}

export default DivComponent;
export { SpanComponent };
