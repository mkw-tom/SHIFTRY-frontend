// utils/token.ts
export const setTokenAndStoreToken = (userId: string, storeId: string) => {
	localStorage.setItem("token", userId);
	localStorage.setItem("store_token", storeId);
};

/// tokenからuserIdを取得
export const getToken = () => localStorage.getItem("token");

export const getStoreToken = () => localStorage.getItem("store_token");

export const clearTokens = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("store_token");
};

/// store_tokenだけとりの像く
export const clearStoreToken = () => localStorage.removeItem("store_token");
