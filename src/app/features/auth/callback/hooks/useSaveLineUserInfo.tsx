"use client";
import { useRegisterSteps } from "@/app/features/register/context/UseRegisterStepContext";
import { setRegisterUserInfo } from "@/app/redux/slices/user";
import type { AppDispatch } from "@/app/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDetectUserRole } from "./useDetectUserRole";
import { useLineAuth } from "./useLineAutth";

export const useSaveLineUserInfo = () => {
	const { userLineInfo, error } = useLineAuth();
	const { changeRegisterStep } = useRegisterSteps();
	const dispatch = useDispatch<AppDispatch>();
	const role = useDetectUserRole();
	const router = useRouter();

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
			if (role === "STAFF") {
				router.push("/");
			} else {
				changeRegisterStep();
			}
		}
	}, [userLineInfo, dispatch, router, role, changeRegisterStep]);

	useEffect(() => {
		if (error) {
			console.error("エラー:", error);
			router.push("/auth/fail");
		}
	}, [error, router]);
};
