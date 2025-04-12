import { useNavigation } from "@/app/lib/navigation";
import type { UserType } from "@/app/types/User";
import { setTokenAndStoreToken } from "@/app/utils/token";
import { postRegisterOwner } from "../api/registerOwner";
// import { useRegisterSteps } from "../context/UseRegisterStepContext";
import { UseRegisterLoadingUI } from "../context/UseRegisterLoading";
import { useRegisterOwnerPayload } from "./useRegisterOwnerPayload";

export const useRegisterOwnerHandler = ({
	user,
	storeName,
}: {
	user: UserType | null;
	storeName: string;
}) => {
	const { createPayload } = useRegisterOwnerPayload();
	// const { changeInviteBotStep } = useRegisterSteps();
	const { setApiLoading } = UseRegisterLoadingUI();
	const { navigateToInvite } = useNavigation();

	const handleRegister = async () => {
		try {
			setApiLoading(true);
			const payload = createPayload({ user, storeName });
			const res = await postRegisterOwner(payload);

			if (!res.ok) throw new Error("登録失敗");

			setTokenAndStoreToken(res.token, res.store.id);
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
