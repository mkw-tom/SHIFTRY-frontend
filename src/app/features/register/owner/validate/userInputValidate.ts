import { z } from "zod";

export const UserRole = z.enum(["OWNER", "MANAGER", "STAFF"]);

export const userInputValidate = z.object({
	// lineId: z.string().min(1, { message: "lineId is required" }).max(250),
	name: z.string().min(1, { message: "name is required" }).max(20),
	pictureUrl: z.string().url().optional(),
	role: UserRole,
});

export type UserInputType = z.infer<typeof userInputValidate>;
