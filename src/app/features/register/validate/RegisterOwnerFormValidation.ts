import { z } from "zod";

export const registerOwnerFormValidate = z.object({
	agree: z.literal(true, {
		errorMap: () => ({ message: "同意が必要です" }),
	}),
	name: z
		.string()
		.min(1, "必須入力です")
		.max(20, "20文字以内で入力してください"),
});

export type registerOwnerFormType = z.infer<typeof registerOwnerFormValidate>;

export const registerStoreNmaeValidate = z.object({
	name: z
		.string()
		.min(1, "必須入力です")
		.max(20, "20文字以内で入力してください"),
});

export type registerStoreNmaeType = z.infer<typeof registerStoreNmaeValidate>;
