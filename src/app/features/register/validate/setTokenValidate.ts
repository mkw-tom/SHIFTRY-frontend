import { z } from "zod";

export const setTokenVlidate = z.object({
	userId: z.string().min(1, "必須入力です"),
	storeId: z.string({ message: "Invalid groupId format" }).uuid(),
});

export type SetTokenType = z.infer<typeof setTokenVlidate>;
