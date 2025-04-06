import { z } from "zod";

export const connectGoupIdValidate = z.object({
	groupId: z.string({ message: "Invalid groupId format" }).max(250),
});
export type groupIdType = z.infer<typeof connectGoupIdValidate>;

export const storeInputValidate = z.object({
	name: z
		.string()
		.min(1, "必須入力です")
		.max(20, "20文字以内で入力してください"),
	groupId: z.string({ message: "Invalid groupId format" }).max(250),
});
export type StoreInputType = z.infer<typeof storeInputValidate>;
