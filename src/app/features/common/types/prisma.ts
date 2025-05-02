import type {
	AssignShift,
	Payment,
	ShiftRequest,
	ShiftStatus,
	ShiftType,
	Store,
	SubmittedShift,
	User,
	UserRole,
	UserStore,
} from "../../../../../../backend/shared/types/prisma";

type RegisterUserRole = Extract<UserRole, "OWNER" | "STAFF">;

export type {
	User,
	UserRole,
	Store,
	UserStore,
	ShiftRequest,
	ShiftType,
	ShiftStatus,
	SubmittedShift,
	AssignShift,
	Payment,
	RegisterUserRole,
};
