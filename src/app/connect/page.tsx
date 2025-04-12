import React from "react";
import FirstView from "../features/common/components/FirstView";
import ConnectModalArea from "../features/connect/components/ConnectModalArea";


const Page = () => {
	return (
		<main className="bg-green01 w-full  h-lvh">
			<div className="bg-green01 w-full md:w-[400px] mx-auto">
				<FirstView />
        <ConnectModalArea />
			</div>
		</main>
	);
};

export default Page;
