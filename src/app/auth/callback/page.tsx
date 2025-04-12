import CallBackModal from "@/app/features/auth/callback/componets/CallBackModal";
import { useSaveLineUserInfo } from "@/app/features/auth/callback/hooks/useSaveLineUserInfo";
import FirstView from "@/app/features/common/components/FirstView";

import React from "react";

export const dynamic = "force-dynamic";
const Page = () => {
	useSaveLineUserInfo();
	return (
		<main className="bg-green01 w-full  h-lvh">
			<div className="bg-green01 w-full md:w-[400px] mx-auto">
				<FirstView />
				<CallBackModal />
			</div>
		</main>
	);
};

export default Page;
