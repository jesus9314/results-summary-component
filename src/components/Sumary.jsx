import { ContinueButton } from "./ContinueButton";
import { SumaryCard } from "./SumaryCard";

export const Sumary = ({data}) => {
	return (
		<div className="grow-[2] md:w-96 p-10 flex flex-col gap-2">
			<p className="font-extrabold text-gray-600">Summary</p>
			<ul>
				{data.map((d, i) => (
					<SumaryCard key={i} {...d} />
				))}
			</ul>
			<ContinueButton/>
		</div>
	);
};
