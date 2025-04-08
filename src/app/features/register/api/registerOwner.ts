import type { RegisterOwnerPayload, RegisterOwnerResponse } from "../types/api";

export const postRegisterOwner = async (
	payload: RegisterOwnerPayload,
): Promise<RegisterOwnerResponse> => {
	const res = await fetch("http://localhost:3000/api/auth/register-owner", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(payload),
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();
	return data;
};
