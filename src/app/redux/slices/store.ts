// store/userSlice.ts
import type { StoreType } from "@/app/types/Store";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserState = {
	store: StoreType | null;
};

const initialState: UserState = {
	store: null,
};

export const userSlice = createSlice({
	name: "store",
	initialState,
	reducers: {
		// 全体セット
		setStore: (state, action: PayloadAction<StoreType>) => {
			state.store = action.payload;
		},

		// 一部更新（プロフィール）
		updateStoreName: (
			state,
			action: PayloadAction<Pick<StoreType, "name">>,
		) => {
			if (state.store) {
				state.store.name = action.payload.name;
			}
		},

		// ログアウトなどでリセット
		clearStore: (state) => {
			state.store = null;
		},
	},
});

export const { setStore, updateStoreName, clearStore } = userSlice.actions;
export default userSlice.reducer;
