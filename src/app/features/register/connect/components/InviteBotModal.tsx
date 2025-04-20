import Image from "next/image";

const InviteBotModal = () => {
	return (
		<>
			<Image
				src="/invite-bot.jpeg"
				alt="register"
				width={300}
				height={300}
				className="object-cover mx-auto"
			/>
			{/* <a
				href="line://"
				className="btn btn-sm bg-green02 rounded-full border-none w-2/3 mx-auto text-white"
			>
				LINEを開く
			</a> */}
		</>
	);
};

export default InviteBotModal;
