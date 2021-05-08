import React, { FunctionComponent } from "react";
import { useState } from "@wordpress/element";
import { MediaUpload } from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";

import { store_slug } from "@/utils";
import { Image } from "./Image";
import { Placeholder } from "./Placeholder";

export const Media: FunctionComponent = () => {
	const [just_selected, setJustSelected] = useState(false);
	const image_id = useSelect(select => select(store_slug).getImageId());
	const { setImageId, setImageUrl } = useDispatch(store_slug);

	return (
		<MediaUpload
			allowedTypes={["image"]}
			value={image_id}
			render={({ open }) => {
				if (image_id) {
					return <Image open={open} just_selected={just_selected} />;
				}

				return <Placeholder open={open} />;
			}}
			onSelect={image => {
				const { id, sizes } = image;
				const size =
					sizes.medium_large ||
					sizes.medium ||
					sizes.large ||
					sizes.thumbnail;

				if (size) {
					setJustSelected(true);
					setImageId(id);
					setImageUrl(size.url);
				}
			}}
		/>
	);
};
