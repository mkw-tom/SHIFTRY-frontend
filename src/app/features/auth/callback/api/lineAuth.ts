import type {
	ErrorResponse,
	ValidationErrorResponse,
} from "@/app/features/common/types/errors";
import { API_URL } from "@/app/lib/env";
import type { LineAuthResponse } from "../types/api";

export const postlineAuth = async (
	code: string,
): Promise<LineAuthResponse | ErrorResponse | ValidationErrorResponse> => {
	if (!code) {
		throw new Error("code is not found");
	}
	const res = await fetch(`${API_URL}/api/auth/line-auth`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ code }),
		credentials: "include",
	});

	const data = await res.json();

	return data;
};
