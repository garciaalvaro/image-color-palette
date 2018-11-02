import l from "../utils/#";

const initial_state = {
	image_data: {
		id: false,
		url: false,
		alt: false
	},
	tooltips_active: true,
	palette_length: 10,
	scheme: "saturated",
	colors: [],
	last_copied_color: false
};

export default initial_state;
