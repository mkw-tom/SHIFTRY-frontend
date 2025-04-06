import Image from "next/image";

const InviteBotForm = () => {
	return (
		<>
			<Image
				src="/invite.jpeg"
				alt="register"
				width={300}
				height={300}
				className="object-cover mx-auto"
			/>
			<a
				href="line://"
				className="btn btn-sm bg-green02 rounded-full border-none w-2/3 mx-auto"
			>
				LINEを開く
			</a>
		</>
	);
};

export default InviteBotForm;
