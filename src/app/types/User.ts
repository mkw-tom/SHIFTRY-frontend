export type UserRole = "OWNER" | "MANAGER" | "STAFF";

export type UserType = {
	id: string;
	lineId: string;
	name: string;
	pictureUrl: string | null;
	role: UserRole;
	createdAt: string;
	updatedAt: string;
};
