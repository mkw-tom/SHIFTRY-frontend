import { API_URL } from "@/app/lib/env";

export const getPayment = async (
	userToken: string | null,
	storeToken: string | null,
) => {
	if (userToken === null) {
		throw new Error("userToken is not found");
	}
	if (storeToken === null) {
		throw new Error("groupToken is not found");
	}
	const res = await fetch(`${API_URL}/api/payment`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userToken}`,
			"x-store-id": storeToken,
		},
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();
	return data;
};
