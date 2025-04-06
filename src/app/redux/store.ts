"use client";
import { configureStore } from "@reduxjs/toolkit";
import store from "./slices/store";
import user from "./slices/user";

const reduxStore = configureStore({
	reducer: {
		user: user,
		store: store,
	},
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;
