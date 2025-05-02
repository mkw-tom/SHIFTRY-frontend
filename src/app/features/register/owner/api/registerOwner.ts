import type {
	ErrorResponse,
	ValidationErrorResponse,
} from "@/app/features/common/types/errors";
import { API_URL } from "@/app/lib/env";
import type { RegisterOwnerResponse } from "../types/api";
import type { StoreNameType, userInputType } from "../validation/api";

export const postRegisterOwner = async (
	lineToken: string,
	userInput: userInputType,
	storeName: StoreNameType,
): Promise<RegisterOwnerResponse | ErrorResponse | ValidationErrorResponse> => {
	const payload = {
		userInput,
		storeName,
	};
	const res = await fetch(`${API_URL}/api/auth/register-owner`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-line-id": lineToken,
		},
		credentials: "include",
		body: JSON.stringify(payload),
	});

	const data = await res.json();

	return data;
};
