import type { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { useRegisterLoadingUI } from "../../common/context/useRegisterLoadingUI";
import { postCreatePayment } from "../api/registerPayment";
import { useRegisterPaymentSteps } from "../context/useRegisterPaymentStepContext";
import type { createPaymentType } from "../validation/api";

export const useRegisterPaymentHandler = ({
	payload,
}: { payload: createPaymentType }) => {
	const { setApiLoading } = useRegisterLoadingUI();
	const { changeRegistedStep } = useRegisterPaymentSteps();
	const { userToken, storeToken } = useSelector(
		(state: RootState) => state.token,
	);

	const handleRegisterPayment = async () => {
		try {
			setApiLoading(true);
			await postCreatePayment(userToken, storeToken, payload);
			changeRegistedStep();
		} catch (e) {
			console.error("登録エラー:", e);
		} finally {
			setApiLoading(false);
		}
	};

	return { handleRegisterPayment };
};
