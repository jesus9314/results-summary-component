
export const FinalResult = ({ prom }) => {
	return (
		<div className="grow-1 bg-gradient-to-t from-LightRoyalBlue to-LightSlateBlue text-white flex justify-center items-center  rounded-b-3xl p-6 md:rounded-3xl md:max-w-xs">
			<div className="flex flex-col items-center gap-2">
				<p className="text-gray-400 font-semibold text-center">Your Result</p>
				<div className="h-44 w-44 rounded-full flex flex-col justify-center items-center aspect-square py-10 px-12 m-6 bg-gradient-to-b from-LightRoyalBlue opacity-75">
					<span className="text-5xl font-bold">{prom}</span>
					<span className="opacity-50">of 100</span>
				</div>
				<div>
					<h3 className="text-2xl text-center font-semibold">Great</h3>
					<p className="opacity-50 text-center px-10">Your scored higher than 65% of the people have taken these tests.</p>
				</div>
			</div>
		</div>
	);
};
