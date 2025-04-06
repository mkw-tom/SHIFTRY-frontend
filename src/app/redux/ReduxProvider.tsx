"use client";

import type { ReactNode } from "react";
import { Provider } from "react-redux";
import reduxStore from "./store";

const ReduxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <Provider store={reduxStore}>{children}</Provider>;
};

export default ReduxProvider;
