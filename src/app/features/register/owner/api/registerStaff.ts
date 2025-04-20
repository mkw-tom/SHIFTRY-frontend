import { API_URL } from "@/app/lib/env";
import type { RegisterStaffPayload, RegisterStaffResponse } from "../types/api";

export const postRegisterStaff = async (
	payload: RegisterStaffPayload,
): Promise<RegisterStaffResponse> => {
	const res = await fetch(`${API_URL}/api/register-staff`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Group-Id": payload.groupId,
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
