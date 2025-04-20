import { useNavigation } from "@/app/lib/navigation";
import { setStoreToken, setUserToken } from "@/app/redux/slices/token";
import type { AppDispatch, RootState } from "@/app/redux/store";
import type { UserType } from "@/app/types/User";
import { setTokenAndStoreToken } from "@/app/utils/token";
import { useDispatch, useSelector } from "react-redux";
import { postRegisterOwner } from "../api/registerOwner";
// import { useRegisterSteps } from "../context/UseRegisterStepContext";
import { UseRegisterLoadingUI } from "../context/UseRegisterLoading";
import { useRegisterOwnerPayload } from "./useRegisterOwnerPayload";

export const useRegisterOwnerHandler = ({
	user,
	name,
	storeName,
}: {
	user: UserType | null;
	name: string;
	storeName: string;
}) => {
	const { createPayload } = useRegisterOwnerPayload();
	const { setApiLoading } = UseRegisterLoadingUI();
	const { navigateToInvite } = useNavigation();
	const lineToken = useSelector(
		(state: RootState) => state.token.lineToken,
	) as string;
	const dispatch = useDispatch<AppDispatch>();

	const handleRegister = async () => {
		try {
			setApiLoading(true);
			const payload = createPayload({ lineToken, user, name, storeName });
			const res = await postRegisterOwner(payload);

			if (!res.ok) throw new Error("登録失敗");

			// setTokenAndStoreToken(res.token, res.store.id);
			dispatch(setUserToken(res.token));
			dispatch(setStoreToken(res.store_token));

			// changeInviteBotStep();
			navigateToInvite();
		} catch (e) {
			console.error("登録エラー:", e);
		} finally {
			setApiLoading(false);
		}
	};

	return { handleRegister };
};
