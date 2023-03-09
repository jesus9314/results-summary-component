import { useEffect, useState } from "react";
import { fetchData, getProm } from "../helpers";

export const useFetchData = () => {
	const [data, setData] = useState([]);
	const [prom, setProm] = useState(0);

	const getData = async () => {
		const data = await fetchData();
		const prom = await getProm(data);
		setData(data);
		setProm(prom);
	};

	useEffect(() => {
		getData();
	}, []);

	return {
		data,
		prom,
	};
};
