import copy from "copy-text-to-clipboard";

import { block_types } from "utils/data";
import { Div, Button, Icon, Span } from "utils/Components";

interface WithSelectProps {
	selected_block: ReturnType<
		typeof import("wordpress__block-editor/store/selectors").getSelectedBlock
	>;
}

interface WithDispatchProps {
	updateBlockAttributes: typeof import("wordpress__block-editor/store/actions").updateBlockAttributes;
}

interface OwnProps {
	close: Function;
	color: string;
}

interface Props extends OwnProps, WithDispatchProps, WithSelectProps {}

const { sprintf } = wp.i18n;
const { withDispatch, withSelect } = wp.data;
const { compose } = wp.compose;
const {
	copy_to_clipboard,
	paste_to_attribute
} = (window as any).image_color_palette.local;

export const ColorRowMenu: React.ComponentType<OwnProps> = compose([
	withSelect<WithSelectProps>(select => ({
		selected_block: select("core/block-editor").getSelectedBlock()
	})),
	withDispatch<WithDispatchProps>(dispatch => ({
		updateBlockAttributes: dispatch("core/block-editor").updateBlockAttributes
	}))
])((props: Props) => {
	const { close, color, selected_block, updateBlockAttributes } = props;

	return (
		<Div className={["menu-container", "color_type-light"]} style={{ color }}>
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
					<Span>{copy_to_clipboard}</Span>
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
									updateBlockAttributes(selected_block.clientId, {
										[attribute]: color
									});
								}}
							>
								<Div className="menu-icon">
									<Icon icon={icon} />
								</Div>
								<Span>{sprintf(paste_to_attribute, label)}</Span>
							</Button>
						)
					)}
			</Div>
		</Div>
	);
});
