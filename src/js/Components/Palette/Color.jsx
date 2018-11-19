import l, { icons } from "../../utils/#";
import classNames from "classnames";
import Html from "../Utils/_Html";
import HtmlComponent from "../Utils/_HtmlComponent";
import tinycolor from "../../../plugins/tinycolor.min";

const { throttle } = lodash;
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { withState } = wp.compose;
const { select, dispatch } = wp.data;
const { getSelectedBlockClientId } = select("core/editor");
const { updateBlockAttributes } = dispatch("core/editor");
const { ClipboardButton, Popover, Button, MenuGroup, MenuItem } = wp.components;

class Color extends Component {
	componentWillUnmount = () => {
		this.onClickOutsideHandler.cancel();
	};

	onClickOutsideHandler = throttle(
		() => {
			const { setState } = this.props;

			setState({ popover_open: false });
		},
		0,
		{
			leading: false,
			trailing: true
		}
	);

	getContrastColor = () => {
		const { color } = this.props;
		const contrast_color =
			tinycolor.mostReadable(color, ["#000", "#fff"])._r === 0
				? "dark"
				: "light";

		return contrast_color;
	};

	render() {
		const { getContrastColor, onClickOutsideHandler } = this;
		const {
			setState,
			popover_open,
			color,
			show_hex,
			toggleCopied,
			att_with_custom_colors
		} = this.props;
		const color_className = classNames(
			{
				"is-menu_open": popover_open
			},
			"icp-color_button",
			"icp-color_button",
			`text_color-${getContrastColor()}`
		);
		const popover_className = classNames(
			`text_color-${getContrastColor()}`
		);

		return (
			<Button
				className={color_className}
				style={{ backgroundColor: color }}
				onClick={() => {
					if (!popover_open) {
						setState({ popover_open: true });
					}
				}}
			>
				{show_hex && (
					<HtmlComponent
						html_element="span"
						className="icp-color_text"
					>
						{color}
					</HtmlComponent>
				)}
				{popover_open && (
					<Popover
						id="icp-color_menu-container"
						className={popover_className}
						focusOnMount={false}
						onClickOutside={onClickOutsideHandler}
					>
						<Html
							style={{
								"--main_color": color
							}}
						>
							<MenuGroup className="icp-color_menu">
								<ClipboardButton
									onCopy={() => {
										setState({ popover_open: false });
										toggleCopied(color, getContrastColor());
									}}
									onFinishCopy={() =>
										toggleCopied(false, false)
									}
									text={color}
								>
									{icons.color_picker}
									{__("Copy color to the Clipboard")}
								</ClipboardButton>
								{att_with_custom_colors.map((att, index) => (
									<MenuItem
										key={index}
										icon={icons[att.icon]}
										onClick={() => {
											const selected_block_clientId = getSelectedBlockClientId();

											setState({ popover_open: false });
											updateBlockAttributes(
												selected_block_clientId,
												{
													[att.value]: color
												}
											);
										}}
									>
										{sprintf(
											__(
												"Apply color to selected Block's %s"
											),
											att.label
										)}
									</MenuItem>
								))}
							</MenuGroup>
						</Html>
					</Popover>
				)}
			</Button>
		);
	}
}

export default withState({ popover_open: false })(Color);
