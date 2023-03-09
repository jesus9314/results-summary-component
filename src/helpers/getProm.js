export const getProm = (data) => {
	const prom = Math.round(data.reduce((a, b) => a + b.score, 0) / data.length);
	return prom;
};
