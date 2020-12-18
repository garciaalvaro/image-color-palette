import { __, sprintf } from "@wordpress/i18n";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import copy from "copy-text-to-clipboard";

import "./ColorRowMenu.styl";
import { block_types } from "utils/data";
import { Div, Button, Icon, Span } from "utils/components";

type WithSelectProps = {
	selected_block: ReturnType<
		typeof import("wordpress__block-editor/store/selectors").getSelectedBlock
	>;
};

type WithDispatchProps = {
	updateBlockAttributes: typeof import("wordpress__block-editor/store/actions").updateBlockAttributes;
};

type OwnProps = {
	close: Function;
	color: string;
};

type Props = OwnProps & WithDispatchProps & WithSelectProps;

export const ColorRowMenu: React.ComponentType<OwnProps> = compose([
	withSelect<WithSelectProps>(select => ({
		selected_block: select("core/block-editor").getSelectedBlock()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		updateBlockAttributes: dispatch("core/block-editor")
			.updateBlockAttributes
	}))
])((props: Props) => {
	const { close, color, selected_block, updateBlockAttributes } = props;

	return (
		<Div
			className={["menu-container", "color_type-light"]}
			style={{ color }}
		>
			<Div className={["menu", "color_type-light"]}>
				<Button
					className={["button", "button-menu"]}
					onClick={() => {
						close();
						copy(color);
					}}
				>
					<Div className="menu-icon">
						<Icon icon="color_picker" />
					</Div>
					<Span>{__("Copy color to the clipboard")}</Span>
				</Button>
				{selected_block &&
					block_types[selected_block.name] &&
					block_types[selected_block.name].map(
						({ attribute, label, icon }, index) => (
							<Button
								key={index}
								className={["button", "button-menu"]}
								onClick={() => {
									close();
									updateBlockAttributes(
										selected_block.clientId,
										{
											[attribute]: color
										}
									);
								}}
							>
								<Div className="menu-icon">
									<Icon icon={icon} />
								</Div>
								<Span>
									{/* translators: %s: Block attribute. */
									sprintf(__("Apply to block's %s"), label)}
								</Span>
							</Button>
						)
					)}
			</Div>
		</Div>
	);
});
