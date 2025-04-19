"use client";
import React from "react";
import { useGroupConnect } from "../context/useGroupConnect";
import ConnectModal from "./ConnectModal";
import InviteBotModal from "./InviteBotModal";

const ConnectModalContent = () => {
	const { groupId, pageLoading } = useGroupConnect();
	// const groupId = "test"
	if (pageLoading) {
		return (
			<div className="w-full ">
				<div className=" w-full h-32 flex flex-col justify-center items-center gap-2">
					<span className="loading loading-spinner text-success" />
					<span className="text-xs text-success font-bold">読み込み中…</span>
				</div>
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-5 mt-5">
			{groupId ? <ConnectModal /> : <InviteBotModal />}
		</div>
	);
};

export default ConnectModalContent;
