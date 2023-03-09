export const fetchData = async () => {
	const resp = await fetch("./src/data/data.json");
	const data = await resp.json();
	const newData = data.map((d) => {
		let color = "";
		switch (d.category) {
			case "Reaction":
				color = "LightRed";
				break;
			case "Memory":
				color = "OrangeYellow";
				break;
			case "Verbal":
				color = "GreenTeal";
				break;
			case "Visual":
				color = "CobaltBlue";
				break;

			default:
				break;
		}
		return {
			category: d.category,
			score: d.score,
			icon: d.icon,
			color,
		};
	});

	return newData;
};
