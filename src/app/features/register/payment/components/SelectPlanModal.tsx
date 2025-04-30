import React, { useState } from "react";
import { set } from "zod";
import { useRegisterPaymentSteps } from "../context/useRegisterPaymentStepContext";
import PlanCard from "./PlanCard";

export const plans = [
	{
		name: "Basic",
		price: "1,580",
		f1: "LINE通知",
		f2: "AI調整",
		f3: "店舗管理",
		members: "30",
	},
];
export type Plan = {
	name: string;
	price: string;
	members: string;
	f1: string;
	f2: string;
	f3: string;
};
const SelectPlanModal = () => {
	const [select, setSelect] = useState<string>("");
	const { changeRegistStep } = useRegisterPaymentSteps();

	return (
		<div className="flex flex-col gap-5">
			{plans.map((plan) => (
				<button
					type="button"
					key={plan.name}
					className={`bg-white shadow-md p-3 rounded-md ${
						select === plan.name
							? "border-4 border-green01 -translate-y-1 transition ease-in"
							: "border-1 border-gray01 "
					}`}
					onClick={() => setSelect(plan.name)}
				>
					<PlanCard plan={plan} />
				</button>
			))}
			<button
				type="button"
				className="btn btn-sm sm:btn-md bg-green02 rounded-full border-none w-2/3 mx-auto text-white"
				disabled={select === ""}
				onClick={changeRegistStep}
			>
				{select !== "" ? `${select}を選択` : "選択"}
			</button>
		</div>
	);
};

export default SelectPlanModal;
