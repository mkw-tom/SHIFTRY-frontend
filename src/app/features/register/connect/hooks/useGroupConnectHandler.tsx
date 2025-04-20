import { setConnectedGroup, setGroupToken } from "@/app/redux/slices/token";
import type { AppDispatch, RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { postConnectLineGroup } from "../api/connectLineGroup";
import { useConnectSteps } from "../context/useConnectStep";

const useGroupConnectHandler = (
	groupToken: string | null,
	setApiLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const { userToken, storeToken } = useSelector(
		(state: RootState) => state.token,
	);
	const dispatch = useDispatch<AppDispatch>();
	const { changeConnectedStep } = useConnectSteps();

	async function GroupConnectHandler() {
		if (!groupToken) {
			alert(
				"グループIDが取得できませんでした。LINEグループ内からアクセスしてください。",
			);
			return;
		}
		try {
			setApiLoading(true);
			const res = await postConnectLineGroup(userToken, storeToken, groupToken);
			if (!res.ok || !res.group_token) {
				throw new Error("グループ連携に失敗しました");
			}

			dispatch(setGroupToken(res.group_token));
			dispatch(setConnectedGroup(true));
			changeConnectedStep();
		} catch (error) {
			console.error("グループ連携失敗:", error);
			alert("LINEグループとの連携に失敗しました。もう一度お試しください。");
		} finally {
			setApiLoading(false);
		}
	}

	return { GroupConnectHandler };
};

export default useGroupConnectHandler;
