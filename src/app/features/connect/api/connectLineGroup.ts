import { API_URL } from "@/app/lib/env";
import { getStoreToken, getToken } from "@/app/utils/token";

export const postConnectLineGroup = async (
	groupId: string | null,
): Promise<{ ok: boolean }> => {
	if (groupId === null) {
		throw new Error("groupId is not found");
	}
	const res = await fetch(`${API_URL}/api/connect-lineGroup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${getToken()}`,
			"X-Group-Id": groupId,
			"X-Store-Id": getStoreToken(),
		},
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();
	return data;
};
