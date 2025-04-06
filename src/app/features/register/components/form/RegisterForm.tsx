import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid } from "zod";
import { UseRegisterLoadingUI } from "../../context/UseRegisterLoading";
import {
	type registerStoreNmaeType,
	registerStoreNmaeValidate,
} from "../../validate/RegisterOwnerFormValidation";
import RegisterButton from "../button/RegisterButton";

// import { useEffect, useState } from "react";

const RegisterForm = () => {
	const {
		register,
		formState: { errors },
		watch,
	} = useForm<registerStoreNmaeType>({
		resolver: zodResolver(registerStoreNmaeValidate),
		mode: "onChange",
	});
	const storeName = watch("name") ?? "";
	const { apiLoading } = UseRegisterLoadingUI();
	const isDisabled = !isValid || storeName === "";

	return (
		<>
			<fieldset className="fieldset w-11/12 mx-auto flex flex-col items-center">
				<legend className="fieldset-legend text-black text-center">
					店舗名
				</legend>
				<input
					{...register("name")}
					type="text"
					className="input input-xs sm:input-sm input-success bg-gray01 text-black"
					placeholder="例：株式会社〇〇"
					maxLength={20}
					disabled={apiLoading}
				/>
				{errors.name && (
					<p className="fieldset-label text-error">{errors.name.message}</p>
				)}
			</fieldset>

			<RegisterButton storeName={storeName} isDisabled={isDisabled} />
		</>
	);
};

export default RegisterForm;
