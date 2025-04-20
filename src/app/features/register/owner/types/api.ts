import type { StoreType } from "@/app/types/Store";
import type { UserType } from "@/app/types/User";
import type { StoreInputType } from "../validate/storeInputValidate";
import type { UserInputType } from "../validate/userInputValidate";

export interface RegisterOwnerPayload {
	lineToken: string;
	userInput: UserInputType;
	storeInput: StoreInputType;
}

export interface RegisterStaffPayload {
	userInput: UserInputType;
	groupId: string;
}

export type RegisterOwnerResponse = {
	ok: boolean;
	user: UserType;
	store: StoreType;
	token: string;
	store_token: string;
};

export type RegisterStaffResponse = {
	ok: boolean;
	user: UserType;
	store: StoreType;
	token: string;
	store_token: string;
	group_token: string;
};
