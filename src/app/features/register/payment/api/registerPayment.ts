import type {
	ErrorResponse,
	ValidationErrorResponse,
} from "@/app/features/common/types/errors";
import { API_URL } from "@/app/lib/env";
import type { CreatePaymentResponse } from "../types/api";
import type { createPaymentType } from "../validation/api";

export const postCreatePayment = async (
	userToken: string | null,
	storeToken: string | null,
	payload: createPaymentType,
): Promise<CreatePaymentResponse | ErrorResponse | ValidationErrorResponse> => {
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

	const data = await res.json();
	return data;
};
