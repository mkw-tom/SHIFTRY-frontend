"use client";
import { useSearchParams } from "next/navigation";

export const useDetectUserRole = (): "OWNER" | "STAFF" => {
	const searchParams = useSearchParams();
	const role = searchParams.get("state");
	return role === "STAFF" ? "STAFF" : "OWNER";
};
