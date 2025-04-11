export const generateLineLoginUrl = (role: "OWNER" | "STAFF") => {
	const base = "https://access.line.me/oauth2/v2.1/authorize";
	const params = new URLSearchParams({
		response_type: "code",
		client_id: process.env.NEXT_PUBLIC_LINE_AUTH_CHANNEL_ID as string,
		redirect_uri: process.env.NEXT_PUBLIC_LINE_AUTH_REDIRECT_URI as string,
		state: role, // ← ここに role を埋め込む！
		scope: "profile openid",
		nonce: crypto.randomUUID(),
	});
	return `${base}?${params.toString()}`;
};
