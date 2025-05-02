// features/common/hooks/useLineAuth.ts
"use client";

import { API_URL } from "@/app/lib/env";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { postlineAuth } from "../api/lineAuth";
import { LineAuthResponse } from "../types/api";

export const useLineAuth = () => {
	const searchParams = useSearchParams();
	const [userLineInfo, setUserLineInfo] = useState<{
		userId: string;
		name: string;
		pictureUrl: string;
		line_token: string;
	} | null>(null);
	const [error, setError] = useState<string | null>(null);
	const code = searchParams.get("code");

	useEffect(() => {
		if (!code || code === "undefined") {
			console.warn("LINEのcodeが取得できてません");
			return;
		}

		const fetchLineAuth = async () => {
			try {
				// const res = await fetch(`${API_URL}/api/auth/line-auth`, {
				// 	method: "POST",
				// 	headers: { "Content-Type": "application/json" },
				// 	body: JSON.stringify({ code }),
				// 	credentials: "include",
				// });

				const res = await postlineAuth(code);

				if (!res.ok) {
					if ("errors" in res) {
						console.warn(res.message, res.errors);
						return;
					}
					console.error("エラー:", res.message);
					return;
				}

				const { userId, name, pictureUrl, line_token } = res;

				setUserLineInfo({ userId, name, pictureUrl, line_token });
			} catch (err) {
				console.error("LINEログイン失敗:", err);
				setError("LINEログインに失敗しました");
			}
		};

		fetchLineAuth();
	}, [code]);

	return { userLineInfo, error };
};
