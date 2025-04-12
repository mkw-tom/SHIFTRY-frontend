"use client";
import { setRegisterUserInfo } from "@/app/redux/slices/user";
import type { AppDispatch } from "@/app/redux/store";

import { useNavigation } from "@/app/lib/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDetectUserRole } from "./useDetectUserRole";
import { useLineAuth } from "./useLineAutth";

export const useSaveLineUserInfo = () => {
	const { userLineInfo, error } = useLineAuth();
	const dispatch = useDispatch<AppDispatch>();
	const role = useDetectUserRole();
	const { navigateAfterLineAuth, navigateToFail } = useNavigation();

	useEffect(() => {
		if (userLineInfo) {
			const { userId, name, pictureUrl } = userLineInfo;
			dispatch(
				setRegisterUserInfo({
					name,
					pictureUrl,
					lineId: userId,
					role,
				}),
			);
			navigateAfterLineAuth(role);
		}
	}, [userLineInfo, dispatch, role, navigateAfterLineAuth]);

	useEffect(() => {
		if (error) {
			console.error("エラー:", error);
			navigateToFail();
		}
	}, [error, navigateToFail]);
};
