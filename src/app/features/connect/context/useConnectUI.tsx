"use client";
import { type ReactNode, createContext, useContext, useState } from "react";

export type ConnectUIType = {
	isLoading: boolean;
	UpdateLoading: (bool: boolean) => void;
};

const ConnectUIContext = createContext<ConnectUIType | undefined>(undefined);

export const useConnectUI = () => {
	const context = useContext(ConnectUIContext);
	if (!context) {
		throw new Error("useConnectUI must be used within a GroupProvider");
	}
	return context;
};

export const ConnectUIProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(false);

	function UpdateLoading(bool: boolean) {
		setIsLoading(bool);
	}

	const value = {
		isLoading,
		UpdateLoading,
	};

	return (
		<ConnectUIContext.Provider value={value}>
			{children}
		</ConnectUIContext.Provider>
	);
};
