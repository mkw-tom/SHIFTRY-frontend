import { API_URL } from "@/app/lib/env";
import type { createPaymentType } from "../validation/api";

export const postCreatePayment = async (
	userToken: string | null,
	storeToken: string | null,
	payload: createPaymentType,
) => {
	if (userToken === null) {
		throw new Error("userToken is not found");
	}
	if (storeToken === null) {
		throw new Error("storeToken is not found");
	}

	const res = await fetch(`${API_URL}/api/payment`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userToken}`,
			"x-store-id": storeToken,
			credentials: "include",
			body: JSON.stringify(payload),
		},
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();
	return data;
};
