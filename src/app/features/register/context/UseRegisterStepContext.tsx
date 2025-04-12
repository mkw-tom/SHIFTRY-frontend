import { useNavigation } from "@/app/lib/navigation";
import type { RootState } from "@/app/redux/store";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useSelector } from "react-redux";

export enum RegisterStep {
	Auth = 0,
	Register = 1,
	InviteBot = 2,
}
export type RegisterUIContextType = {
	step: RegisterStep;
};

const registerUIContext = createContext<RegisterUIContextType | undefined>(
	undefined,
);

export const useRegisterSteps = () => {
	const context = useContext(registerUIContext);
	if (context === undefined) {
		throw new Error("useIsRegister must be used within a IsRegisterProvider");
	}
	return context;
};

export const RegisterStepsProvider = ({
	children,
}: { children: ReactNode }) => {
	const [step, setStep] = useState<RegisterStep>(RegisterStep.Auth);
	const { navigateToInvite } = useNavigation();
	const { user } = useSelector((state: RootState) => state.user);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const storeToken = localStorage.getItem("store_token");

		if (token && storeToken) {
			navigateToInvite();
		}
		if (user?.lineId) {
			setStep(RegisterStep.Register);
		}
	}, [navigateToInvite, user?.lineId]);

	return (
		<registerUIContext.Provider value={{ step }}>
			{children}
		</registerUIContext.Provider>
	);
};
