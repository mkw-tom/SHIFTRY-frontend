import React from "react";
import { ConnectLoadingUIProvider } from "../context/useConnectLoadingUI";
import { ConnectStepsProvider } from "../context/useConnectStep";
import ConnectModalContent from "./ConnectModalContent";

const ConnectModalArea = () => {
	return (
		<div className="flex justify-center mt-10 w-full">
			<div className="w-10/12 h-auto bg-white rounded-xl shadow-lg px-5 py-5">
				<h2 className="text-center font-bold text-sm text-black border-b-1 border-b-gray01 pb-1">
					LINEグループ連携
				</h2>
				<ConnectStepsProvider>
					<ConnectLoadingUIProvider>
						<ConnectModalContent />
					</ConnectLoadingUIProvider>
				</ConnectStepsProvider>
			</div>
		</div>
	);
};

export default ConnectModalArea;
