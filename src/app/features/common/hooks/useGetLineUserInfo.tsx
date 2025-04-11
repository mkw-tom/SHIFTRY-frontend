import { setRegisterUserInfo } from "@/app/redux/slices/user";
import type { AppDispatch } from "@/app/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDetectUserRole } from "./useDetectUserRole";
import { useLineAuth } from "./useLineAutth";

export const useGetLineUserInfo = () => {
	const { userLineInfo, error } = useLineAuth();
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

			router.push(role === "STAFF" ? "/" : "/register");
		}

		if (error) {
			console.error("エラー:", error);
			router.push("/register/fail");
		}
	}, [userLineInfo, error, dispatch, router, role]);
};
