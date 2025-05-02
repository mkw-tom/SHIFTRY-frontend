import { API_URL } from "@/app/lib/env";

import type {
	ErrorResponse,
	ValidationErrorResponse,
} from "@/app/features/common/types/errors";
import type { StoreConnectLineGroupResponse } from "../types/api";

export const postConnectLineGroup = async (
	userToken: string | null,
	storeToken: string | null,
	groupToken: string | null,
): Promise<
	StoreConnectLineGroupResponse | ErrorResponse | ValidationErrorResponse
> => {
	if (groupToken === null) {
		throw new Error("groupToken is not found");
	}
	if (userToken === null) {
		throw new Error("userToken is not found");
	}
	if (storeToken === null) {
		throw new Error("storeToken is not found");
	}

	const res = await fetch(`${API_URL}/api/store/connect-lineGroup`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userToken}`,
			"x-store-id": storeToken,
			"x-group-id": groupToken,
		},
	});

	const data = await res.json();
	return data;
};
