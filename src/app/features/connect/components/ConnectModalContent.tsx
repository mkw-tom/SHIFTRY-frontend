"use client";
import React from "react";
import { useGroupConnect } from "../context/useGroupConnect";
import ConnectModal from "./ConnectModal";
import InviteBotModal from "./InviteBotModal";

const ConnectModalContent = () => {
	const { groupId } = useGroupConnect();
	return (
		<div className="flex flex-col gap-5 mt-5">
			{groupId ? <ConnectModal /> : <InviteBotModal />}
		</div>
	);
};

export default ConnectModalContent;
