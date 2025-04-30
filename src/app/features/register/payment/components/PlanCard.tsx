import React from "react";
import { FaCheck } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import type { Plan } from "./SelectPlanModal";

const PlanCard = ({ plan }: { plan: Plan }) => {
	const { name, price, f1, f2, f3, members } = plan;
	return (
		<div className="flex w-full">
			<div className="flex flex-col gap-2 border-gray01 w-full ">
				<div className="badge bg-green01 text-white rounded-full badge-sm w-20 font-bold tracking-wide">
					{name}
				</div>
				<div className="pt-2 pb-2">
					<h3 className="text-center ">
						<span className="text-2xl font-bold text-black">¥ {price}</span>
						<span className="text-sm font-bold text-gray02"> / 月</span>
					</h3>
					<p className="flex items-center gap-2 text-xs justify-center mt-2">
						<PiUsersFill className="text-green01 text-[15px]" />
						<span className="font-semibold text-gray02">
							メンバー：{members}人まで
						</span>
					</p>
				</div>

				<ul className="flex flex-wrap gap-3 w-full justify-center">
					<li className="flex items-center gap-1 text-[10px]">
						<FaCheck className="text-green01" />
						<span className="font-semibold text-gray02">{f1}</span>
					</li>
					<li className="flex items-center gap-1 text-[10px]">
						<FaCheck className="text-green01" />
						<span className="font-semibold text-gray02">{f2}</span>
					</li>
					<li className="flex items-center gap-1 text-[10px]">
						<FaCheck className="text-green01" />
						<span className="font-semibold text-gray02">{f3}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PlanCard;
