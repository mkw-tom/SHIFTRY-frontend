import CallBackModal from "@/app/features/auth/callback/componets/CallBackModal";
import Image from "next/image";

import React from "react";

const Page = () => {
	return (
		<main className="bg-green01 w-full  h-lvh">
			<div className="bg-green01 w-full md:w-[400px] mx-auto">
				<div className="w-full pt-20">
					<Image
						src="/logo-top.png"
						alt="register"
						width={200}
						height={100}
						className="object-cover mx-auto"
					/>
					<p className="ml-3 text-center font-bold text-sm mt-2 text-white">
						シフトのやりとり、もっと気軽に。
					</p>
				</div>
				<CallBackModal />
			</div>
		</main>
	);
};

export default Page;
