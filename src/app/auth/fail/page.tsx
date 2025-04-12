import FaildAuthModal from "@/app/features/auth/fail/components/FaildAuthModal";
import FirstView from "@/app/features/common/components/FirstView";
import React from "react";

const Page = () => {
	return (
		<main className="bg-green01 w-full  h-lvh">
			<div className="bg-green01 w-full md:w-[400px] mx-auto">
				<FirstView />
				<FaildAuthModal />
			</div>
		</main>
	);
};

export default Page;
