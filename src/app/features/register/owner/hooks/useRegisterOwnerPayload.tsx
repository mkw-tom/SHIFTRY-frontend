import type { UserType } from "@/app/types/User";
import type { RegisterOwnerPayload } from "../types/api";

export const useRegisterOwnerPayload = () => {
	const createPayload = ({
		lineToken,
		user,
		name,
		storeName,
	}: {
		lineToken: string;
		user: UserType | null;
		name: string;
		storeName: string;
	}): RegisterOwnerPayload => {
		if (!user) {
			throw new Error("user infomations are not found");
		}
		return {
			lineToken: lineToken,
			userInput: {
				name: name,
				// lineId: user.lineId,
				pictureUrl: user.pictureUrl as string,
				role: user.role,
			},
			storeInput: {
				name: storeName,
				groupId: storeName,
			},
		};
	};

	return {
		createPayload,
	};
};
