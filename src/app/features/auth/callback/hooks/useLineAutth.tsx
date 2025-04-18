// features/common/hooks/useLineAuth.ts
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useLineAuth = () => {
	const searchParams = useSearchParams();
	const [userLineInfo, setUserLineInfo] = useState<{
		userId: string;
		name: string;
		pictureUrl: string;
	} | null>(null);
	const [error, setError] = useState<string | null>(null);
	const code = searchParams.get("code");

	useEffect(() => {
		if (!code || code === "undefined") {
			console.warn("LINEのcodeが取得できてません");
			return;
		}

		console.log("LINEのcode:", code);
		console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
		const fetchLineAuth = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/auth/line-auth`,
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ code }),
						credentials: "include",
					},
				);

				const data = await res.json();
				if (!res.ok) throw new Error(data.message || "LINEログイン失敗");
				setUserLineInfo(data);
			} catch (err) {
				console.error("LINEログイン失敗:", err);
				setError("LINEログインに失敗しました");
			}
		};

		fetchLineAuth();
	}, [code]);

	return { userLineInfo, error };
};
