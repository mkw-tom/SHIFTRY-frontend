import { API_URL } from "@/app/lib/env";

export const postConnectLineGroup = async (
	userToken: string | null,
	storeToken: string | null,
	groupToken: string | null,
): Promise<{ ok: boolean; group_token: string }> => {
	if (groupToken === null) {
		throw new Error("groupToken is not found");
	}
	if (userToken === null) {
		throw new Error("userToken is not found");
	}
	if (storeToken === null) {
		throw new Error("storeToken is not found");
	}

	const res = await fetch(`${API_URL}/api/store/connect-lineGroup`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userToken}`,
			"x-store-id": storeToken,
			"x-group-id": groupToken,
		},
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();
	return data;
};
