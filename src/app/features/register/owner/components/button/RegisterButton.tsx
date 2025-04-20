import type { RootState } from "@/app/redux/store";
import type { FieldError } from "react-hook-form";
import { useSelector } from "react-redux";
import { UseRegisterLoadingUI } from "../../context/UseRegisterLoading";
import { useRegisterOwnerHandler } from "../../hooks/useRegisterOwnerHandler";

const RegisterButton = ({
	name,
	storeName,
	isDisabled,
}: {
	name: string;
	storeName: string;
	isDisabled: true | FieldError | undefined;
}) => {
	const { apiLoading } = UseRegisterLoadingUI();
	const { user } = useSelector((state: RootState) => state.user);
	const { handleRegister } = useRegisterOwnerHandler({ user, name, storeName });

	return (
		<button
			type="button"
			className="btn btn-sm sm:btn-md  bg-green02  rounded-full border-none w-2/3  mx-auto text-white"
			onClick={handleRegister}
			disabled={!!isDisabled}
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
