import { useNavigation } from "@/app/lib/navigation";
import { postConnectLineGroup } from "../api/connectLineGroup";

const useGroupConnectHandler = (
	groupId: string | null,
	UpdateLoading: (bool: boolean) => void,
) => {
	const { navigateHome } = useNavigation();
	async function GroupConnectHandler() {
		if (!groupId) {
			alert(
				"グループIDが取得できませんでした。LINEグループ内からアクセスしてください。",
			);
			return;
		}

		try {
			UpdateLoading(true);
			const res = await postConnectLineGroup(groupId);
			if (!res.ok) {
				throw new Error("グループ連携に失敗しました");
			}

			navigateHome();
		} catch (error) {
			console.error("グループ連携失敗:", error);
			alert("LINEグループとの連携に失敗しました。もう一度お試しください。");
		} finally {
			UpdateLoading(false);
		}
	}

	return { GroupConnectHandler };
};

export default useGroupConnectHandler;
