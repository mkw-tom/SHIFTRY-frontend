import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useRegisterPaymentSteps } from "../context/useRegisterPaymentStepContext";
import usePaymentMethodId from "../hooks/usePaymentMethodId";

const RegisterPaymentForm = () => {
	const [email, setEmail] = useState("");
	const { paymentMethodId, handleCardAuth } = usePaymentMethodId({ email });
	const { changeRegistedStep } = useRegisterPaymentSteps();

	function handleRegister() {
		console.log("Registering with payment method ID:", paymentMethodId);
		changeRegistedStep();
	}

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-5 mb-3">
				<div className="flex flex-col gap-2">
					<label htmlFor="cvv" className="text-sm font-semibold text-gray02">
						メールアドレス
					</label>
					<input
						type="text"
						id="cvv"
						placeholder="expample@email.com"
						className="rounded-sm border border-gray-300 px-3 py-1 outline-none text-sm"
					/>
				</div>
				<div className="w-full flex flex-col gap-3 border-b-1 border-gray01 pb-1">
					<label htmlFor="cvv" className="text-sm font-semibold text-gray02">
						カード情報
					</label>
					<CardElement
						options={{
							style: {
								base: {
									fontSize: "12px",
									color: "#333",
									"::placeholder": { color: "#a0a0a0" },
								},
								invalid: {
									color: "#ff4d4f",
								},
							},
						}}
					/>
				</div>
			</div>

			<button
				type="button"
				className="btn btn-sm sm:btn-md bg-green02 rounded-full border-none w-2/3 mx-auto text-white"
				onClick={!paymentMethodId ? handleRegister : handleCardAuth}
			>
				{!paymentMethodId ? "購入を確定" : "決済情報を認証"}
			</button>
		</div>
	);
};

export default RegisterPaymentForm;
