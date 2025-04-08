import React from "react";
import { UseRegisterLoadingUI } from "../../context/UseRegisterLoading";
import { useRegisterSteps } from "../../context/UseRegisterStepContext";
// import { useSelector } from 'react-redux';
// import { UserType } from '@/app/types/User';
// import { RegisterOwnerPayload } from '../types/api';
// import { postRegisterOwner } from '../api/registerOwner';
import type { UserInputType } from "../../validate/userInputValidate";

export const dummyUserInput: UserInputType = {
	name: "aiueo",
	lineId: "aiueo",
	pictureUrl: "https://example.com/image.jpg",
	role: "OWNER",
};

const RegisterButton = ({
	storeName,
	isDisabled,
}: { storeName: string; isDisabled: boolean }) => {
	const { changeInviteBotStep } = useRegisterSteps();
	const { apiLoading, setApiLoading } = UseRegisterLoadingUI();
	// const user = useSelector((state: { user: UserType}) => state.user);
	async function handleRegister() {
		try {
			setApiLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 3000));
			if (storeName) {
				console.log("storename undfined");
			}

			// const payload: RegisterOwnerPayload = {
			//   // userInput: {
			//   //   name: user.name,
			//   //   lineId: user.lineId,
			//   //   pictureUrl: user.pictureUrl || undefined,
			//   //   role: user.role,
			//   // },
			//   userInput: dummyUserInput,
			//   storeInput: {
			//     name: storeName,
			//     groupId: storeName, ///オーナー登録時は仮で店舗名を入れる
			//   }
			// }

			// await postRegisterOwner(payload);

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
