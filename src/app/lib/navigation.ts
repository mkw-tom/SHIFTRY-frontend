import type { UserRole } from "@/app/types/User";
import { useRouter } from "next/navigation";

export const useNavigation = () => {
	const router = useRouter();

	const navigateAfterLineAuth = (role: UserRole) => {
		if (role === "STAFF") {
			router.push("/");
		} else {
			router.push("/register");
		}
	};

	const navigateToFail = () => router.push("/auth/fail");

	const navigateToInvite = () => router.push("/connect");
	const navigateHome = () => router.push("/");

	return {
		navigateAfterLineAuth,
		navigateToFail,
		navigateToInvite,
		navigateHome,
	};
};
