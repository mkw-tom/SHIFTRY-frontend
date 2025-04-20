import type { UserRole } from "@/app/types/User";
import { useRouter } from "next/navigation";

export const useNavigation = () => {
	const router = useRouter();

	const navigateAfterLineAuth = (role: UserRole) => {
		if (role === "STAFF") {
			router.push("/register/owner");
		} else {
			router.push("/register/owner");
		}
	};

	const navigateToFail = () => router.push("/auth/fail");

	const navigateToInvite = () => router.push("/register/connect");
	const navigateHome = () => router.push("/");

	return {
		navigateAfterLineAuth,
		navigateToFail,
		navigateToInvite,
		navigateHome,
	};
};
