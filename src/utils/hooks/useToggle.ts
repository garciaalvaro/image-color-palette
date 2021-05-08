import { useState } from "@wordpress/element";

type UseToggle = (
	initial_is_open?: boolean
) => {
	is_open: boolean;
	close: () => void;
	open: () => void;
	toggle: () => void;
};

export const useToggle: UseToggle = (initial_is_open = false) => {
	const [is_open, setOpen] = useState(initial_is_open);
	const close = () => setOpen(false);
	const open = () => setOpen(true);
	const toggle = () => setOpen(is_open => !is_open);

	return { is_open, close, open, toggle };
};
