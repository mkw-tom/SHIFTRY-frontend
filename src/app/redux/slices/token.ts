// src/features/auth/tokenSlice.ts
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
	lineToken: string | null;
	userToken: string | null;
	storeToken: string | null;
	groupToken: string | null;
};

const initialState: AuthState = {
	lineToken: null,
	userToken: null,
	storeToken: null,
	groupToken: null,
};

export const tokenSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLineToken: (state, action: PayloadAction<string>) => {
			state.lineToken = action.payload;
		},
		clearLineToken: (state) => {
			state.lineToken = null;
		},
		setUserToken: (state, action: PayloadAction<string>) => {
			state.userToken = action.payload;
		},
		setStoreToken: (state, action: PayloadAction<string>) => {
			state.storeToken = action.payload;
		},
		setGroupToken: (state, action: PayloadAction<string>) => {
			state.groupToken = action.payload;
		},
		clearAllTokens: (state) => {
			state.lineToken = null;
			state.userToken = null;
			state.storeToken = null;
		},
	},
});

export const {
	setLineToken,
	clearLineToken,
	setUserToken,
	setStoreToken,
	setGroupToken,
	clearAllTokens,
} = tokenSlice.actions;

export default tokenSlice.reducer;
