import type { RootState } from "@/app/redux/store";
import type { UserRole } from "@/app/types/User";
import { setTokenAndStoreToken } from "@/app/utils/token";
import React from "react";
import { useSelector } from "react-redux";
import { postRegisterOwner } from "../../api/registerOwner";
import { UseRegisterLoadingUI } from "../../context/UseRegisterLoading";
import { useRegisterSteps } from "../../context/UseRegisterStepContext";
// import type { UserInputType } from "../../validate/userInputValidate";
import type { RegisterOwnerPayload } from "../../types/api";

const RegisterButton = ({
	storeName,
	isDisabled,
}: { storeName: string; isDisabled: boolean }) => {
	const { changeInviteBotStep } = useRegisterSteps();
	const { apiLoading, setApiLoading } = UseRegisterLoadingUI();
	const { user } = useSelector((state: RootState) => state.user);
	async function handleRegister() {
		try {
			setApiLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 2000));
			if (!storeName) {
				console.log("storename undfined");
			}

			console.log("ユーザー", user);

			const payload: RegisterOwnerPayload = {
				userInput: {
					name: user?.name as string,
					lineId: user?.lineId as string,
					pictureUrl: user?.pictureUrl || undefined,
					role: user?.role as UserRole,
				},
				storeInput: {
					name: storeName,
					groupId: storeName,
				},
			};
			console.log(payload);

			const res = await postRegisterOwner(payload);
			if (!res.ok) {
				return console.log("failed register owner and store");
			}

			setTokenAndStoreToken(res.token, res.store.id);

			changeInviteBotStep();
		} catch (error) {
			console.error("Error during registration:", error);
		} finally {
			setApiLoading(false);
		}
	}

	return (
		<button
			type="button"
			className="btn btn-sm sm:btn-md  bg-green02  rounded-full border-none w-2/3  mx-auto text-white"
			onClick={handleRegister}
			disabled={isDisabled}
		>
			{!apiLoading ? (
				<div className="flex items-center gap-2">登録</div>
			) : (
				<span className="loading loading-dots" />
			)}
		</button>
	);
};

export default RegisterButton;
