import { API_URL } from "@/app/lib/env";
import { getStoreToken, getToken } from "@/app/utils/token";

export const postConnectLineGroup = async (
	groupId: string | null,
): Promise<{ ok: boolean }> => {
	if (groupId === null) {
		throw new Error("groupId is not found");
	}
	const res = await fetch(`${API_URL}/api/store/connect-lineGroup`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${getToken()}`,
			"x-group-id": groupId,
			"x-store-id": getStoreToken(),
		},
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();
	return data;
};
