import { API_URL } from "@/app/lib/env";
import type { lineAuthResponse } from "../types/api";

export const postlineAuth = async (): Promise<lineAuthResponse> => {
	const res = await fetch(`${API_URL}/api/auth/line-auth`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		const errorBody = await res.json();
		throw new Error(errorBody.message || "登録に失敗しました");
	}

	const data = await res.json();

	// const data = {
	//   ok: true,
	//   userId: "test1",
	//   name: "test",
	//   pictureUrl: "https://example.com/image.jpg"
	// }

	return data;
};
