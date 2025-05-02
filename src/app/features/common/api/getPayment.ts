import { API_URL } from "@/app/lib/env";
import type { GetPaymentResponse } from "../types/api";
import type { ErrorResponse, ValidationErrorResponse } from "../types/errors";

export const getPayment = async (
	userToken: string | null,
	storeToken: string | null,
): Promise<GetPaymentResponse | ErrorResponse | ValidationErrorResponse> => {
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

	const data = await res.json();
	return data;
};
