"use client";
import { NEXT_PUBLIC_LIFF_ID_CONNECT_GROUP } from "@/app/lib/env";
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
	pageLoading: boolean;
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
	const [pageLoading, setpageLoading] = useState<boolean>(true);

	useEffect(() => {
		const initLiff = async () => {
			try {
				if (typeof window === "undefined") return;

				await liff.init({ liffId: NEXT_PUBLIC_LIFF_ID_CONNECT_GROUP });

				if (!liff.isInClient()) {
					console.warn("LIFFクライアントではありません。");
					setGroupId(null);
					setpageLoading(false);
					return;
				}

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
				setpageLoading(false);
			}
		};

		initLiff();
	}, []);

	return (
		<GroupConnect.Provider value={{ groupId, pageLoading }}>
			{children}
		</GroupConnect.Provider>
	);
};
