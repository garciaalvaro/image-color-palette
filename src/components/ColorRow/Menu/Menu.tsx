import React, { FunctionComponent } from "react";
import copy from "copy-text-to-clipboard";
import { __, sprintf } from "@wordpress/i18n";
import { select, useSelect, useDispatch } from "@wordpress/data";

import styles from "./Menu.styl";
import { block_types, Button, Icon } from "@/utils";

interface Props {
	close: () => void;
	color: Color;
}

export const Menu: FunctionComponent<Props> = (props: Props) => {
	const { close, color } = props;

	const selected_block = useSelect(select =>
		select("core/block-editor").getSelectedBlock()
	);

	const { updateBlockAttributes } = useDispatch("core/block-editor");

	return (
		<div className={styles.container} style={{ color }}>
			<Button
				className={styles.button}
				onClick={() => {
					close();
					copy(color);
				}}
			>
				<div className={styles.icon}>
					<Icon icon="color_picker" />
				</div>

				<span>{__("Copy color to the clipboard")}</span>
			</Button>

			{selected_block &&
				block_types[selected_block.name] &&
				block_types[selected_block.name].map(
					({ attribute, label, icon }, index) => (
						<Button
							key={index}
							className={styles.button}
							onClick={() => {
								close();

								if (typeof attribute === "string") {
									updateBlockAttributes(
										selected_block.clientId,
										{
											[attribute]: color,
										}
									);
								} else {
									const attributes = select(
										"core/block-editor"
									).getBlockAttributes(
										selected_block.clientId
									);

									updateBlockAttributes(
										selected_block.clientId,
										attribute(attributes || {}, color)
									);
								}
							}}
						>
							<div className={styles.icon}>
								<Icon icon={icon} />
							</div>

							<span>
								{
									/* translators: %s: Block attribute. */
									sprintf(__("Apply to block's %s"), label)
								}
							</span>
						</Button>
					)
				)}
		</div>
	);
};
