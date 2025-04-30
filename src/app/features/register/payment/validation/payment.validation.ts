import { z } from "zod";

export const emailValidate = z.object({
	email: z.string().email("正しいメールアドレスを入力してください").max(100),
});
export type emailType = z.infer<typeof emailValidate>;
