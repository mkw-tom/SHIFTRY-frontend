"use client";
import type { RootState } from "@/app/redux/store";
import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useSelector } from "react-redux";

export type connectLoadingUIContextType = {
	pageLoading: boolean;
	apiLoading: boolean;
	setApiLoading: Dispatch<SetStateAction<boolean>>;
};

const connectLoadingUIContext = createContext<
	connectLoadingUIContextType | undefined
>(undefined);

export const UseConnectLoadingUI = () => {
	const context = useContext(connectLoadingUIContext);
	if (context === undefined) {
		throw new Error("useIsconnect must be used within a IsconnectProvider");
	}
	return context;
};

export const ConnectLoadingUIProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const token = useSelector((state: RootState) => state.token);
	const [pageLoading, setPageLoading] = useState<boolean>(true);
	const [apiLoading, setApiLoading] = useState<boolean>(false);

	useEffect(() => {
		if (
			typeof token.userToken !== "undefined" &&
			typeof token.storeToken !== "undefined"
		) {
			setPageLoading(false);
		}
	}, [token.userToken, token.storeToken]);

	const value = {
		pageLoading,
		apiLoading,
		setApiLoading,
	};

	return (
		<connectLoadingUIContext.Provider value={value}>
			{children}
		</connectLoadingUIContext.Provider>
	);
};
