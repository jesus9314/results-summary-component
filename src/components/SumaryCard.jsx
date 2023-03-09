import { useState } from "react";
import { colorVariants, textVariants } from "../data/variants";

export const SumaryCard = ({ category, score, icon, color }) => {
 
	return (
		<div className={`${colorVariants[color]} flex justify-between my-4 p-4 bg-opacity-25 rounded-lg`}>
			<div className={`${textVariants[color]} flex gap-2`}>
        <img src={icon} alt={category} />
				<span>{color}</span>
			</div>
			<div>
        <span>
          {score}
        </span>
        <span className="text-gray-400">
            /100
        </span>
      </div>
		</div>
	);
};
