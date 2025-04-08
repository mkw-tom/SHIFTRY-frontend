import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

export enum RegisterStep {
	Auth = 0,
	Register = 1,
	InviteBot = 2,
}
export type RegisterUIContextType = {
	step: RegisterStep;
	changeRegisterStep: () => void;
	changeInviteBotStep: () => void;
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

	useEffect(() => {
		const token = localStorage.getItem("token");
		const storeToken = localStorage.getItem("store_token");

		if (token && storeToken) {
			setStep(RegisterStep.InviteBot);
		}
	}, []);

	function changeRegisterStep() {
		setStep(RegisterStep.Register);
	}

	function changeInviteBotStep() {
		setStep(RegisterStep.InviteBot);
	}

	const value = {
		step,
		changeRegisterStep,
		changeInviteBotStep,
	};

	return (
		<registerUIContext.Provider value={value}>
			{children}
		</registerUIContext.Provider>
	);
};
