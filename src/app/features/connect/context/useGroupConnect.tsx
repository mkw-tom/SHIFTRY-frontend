"use client";

import liff from "@line/liff";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

// LIFFのグループID管理Contextの定義
export type GroupConnectType = {
	groupId: string | null;
	loading: boolean;
};

const GroupConnect = createContext<GroupConnectType | undefined>(undefined);

export const useGroupConnect = () => {
	const context = useContext(GroupConnect);
	if (!context) {
		throw new Error("useGroupConnect must be used within a GroupProvider");
	}
	return context;
};

export const GroupConnectProvider = ({ children }: { children: ReactNode }) => {
	const [groupId, setGroupId] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const initLiff = async () => {
			try {
				// LIFFで開かれてない場合はスキップ
				if (typeof window === "undefined" || !liff.isInClient()) {
					console.warn("LIFFクライアントではありません。");
					setGroupId(null);
					setLoading(false);
					return;
				}

				await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string });

				if (!liff.isLoggedIn()) {
					liff.login();
					return;
				}

				const context = liff.getContext();

				if (context?.type === "group") {
					setGroupId(context.groupId ?? null);
				} else {
					setGroupId(null);
				}
			} catch (e) {
				console.error("LIFF初期化エラー:", e);
				setGroupId(null);
			} finally {
				setLoading(false);
			}
		};

		initLiff();
	}, []);

	return (
		<GroupConnect.Provider value={{ groupId, loading }}>
			{children}
		</GroupConnect.Provider>
	);
};
