import type { UserType } from "@/app/types/User";
import type { RegisterOwnerPayload } from "../types/api";

export const useRegisterOwnerPayload = () => {
	const createPayload = ({
		user,
		storeName,
	}: {
		user: UserType | null;
		storeName: string;
	}): RegisterOwnerPayload => {
		if (!user) {
			throw new Error("user infomations are not found");
		}
		return {
			userInput: {
				name: user.name,
				lineId: user.lineId,
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
