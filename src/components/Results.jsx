import { useFetchData } from "../hooks/useFetchData";
import { FinalResult } from "./FinalResult";
import { Sumary } from "./Sumary";

export const Results = () => {
	const { data, prom } = useFetchData();
	return (
		<div className="max-h-screen flex flex-col justify-center md:flex-row md:rounded-3xl md:shadow-2xl">
			<FinalResult prom={prom} />
			<Sumary data={data} />
		</div>
	);
};
