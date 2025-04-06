import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

export type RegisterLoadingUIContextType = {
	pageLoading: boolean;
	apiLoading: boolean;
	setApiLoading: Dispatch<SetStateAction<boolean>>;
};

const RegisterLoadingUIContext = createContext<
	RegisterLoadingUIContextType | undefined
>(undefined);

export const UseRegisterLoadingUI = () => {
	const context = useContext(RegisterLoadingUIContext);
	if (context === undefined) {
		throw new Error("useIsRegister must be used within a IsRegisterProvider");
	}
	return context;
};

export const RegisterLoadingUIProvider = ({
	children,
}: { children: ReactNode }) => {
	const [pageLoading, setPageLoading] = useState<boolean>(true);
	const [apiLoading, setApiLoading] = useState<boolean>(false);

	useEffect(() => {
		const saved = localStorage.getItem("isRegistered");
		if (saved === null || saved === "true") {
			setPageLoading(false);
		}
	}, []);

	const value = {
		pageLoading,
		apiLoading,
		setApiLoading,
	};

	return (
		<RegisterLoadingUIContext.Provider value={value}>
			{children}
		</RegisterLoadingUIContext.Provider>
	);
};
