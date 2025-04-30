import React from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

const InputEmail = ({
	register,
	errors,
}: {
	register: UseFormRegister<{
		email: string;
	}>;
	errors: FieldErrors<{
		email: string;
	}>;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor="email" className="text-sm font-semibold text-gray02">
				メールアドレス
			</label>
			<input
				{...register("email")}
				type="email"
				id="email"
				placeholder="expample@email.com"
				className="rounded-sm border border-gray-300 px-3 py-1 outline-none text-sm"
			/>
			{errors.email && (
				<p className="fieldset-label text-error text-xs">
					{errors.email.message}
				</p>
			)}
		</div>
	);
};

export default InputEmail;
