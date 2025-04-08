import type { UserType } from "@/app/types/User";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserState = {
	user: UserType | null;
};

const initialState: UserState = {
	user: {
		id: "",
		lineId: "",
		name: "",
		pictureUrl: "",
		role: "OWNER",
		createdAt: "",
		updatedAt: "",
	},
};

export const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType>) => {
			state.user = action.payload;
		},
		setRegisterUserInfo: (
			state,
			action: PayloadAction<
				Pick<UserType, "name" | "pictureUrl" | "lineId" | "role">
			>,
		) => {
			if (state.user) {
				state.user.name = action.payload.name;
				state.user.pictureUrl = action.payload.pictureUrl;
				state.user.lineId = action.payload.lineId;
				state.user.role = action.payload.role;
			}
		},

		updateUserProfile: (
			state,
			action: PayloadAction<Pick<UserType, "name" | "pictureUrl">>,
		) => {
			if (state.user) {
				state.user.name = action.payload.name;
				state.user.pictureUrl = action.payload.pictureUrl;
			}
		},

		changeUserRole: (state, action: PayloadAction<Pick<UserType, "role">>) => {
			if (state.user) {
				state.user.role = action.payload.role;
			}
		},

		clearUser: (state) => {
			state.user = null;
		},
	},
});

export const {
	setUser,
	setRegisterUserInfo,
	updateUserProfile,
	changeUserRole,
	clearUser,
} = UserSlice.actions;
export default UserSlice.reducer;
