import type { RegisterStaffPayload, RegisterUserResponse } from "../types/api";

export const postRegisterStaff = async (
	payload: RegisterStaffPayload,
): Promise<RegisterUserResponse> => {
	const res = await fetch("/api/register-staff", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();
	return data;
};
