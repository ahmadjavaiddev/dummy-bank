import axios from "axios";
import { LocalStorage } from "../lib/localStorage";

const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
    console.warn("API URL is not available in environment variables");
}
const token = LocalStorage.get("accessToken");
if (!token) {
    console.warn("Token is not available in local storage");
}

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    timeout: 120000,
    headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
    },
});

apiClient.interceptors.request.use(
    function (config) {
        // Retrieve user accessToken from local storage
        const token = LocalStorage.get("accessToken");
        // Set authorization header with bearer accessToken
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const loginUser = async ({ email, password }) => {
    const response = await apiClient.post("/users/login", { email, password });
    LocalStorage.set("accessToken", response.data.data.accessToken);
    LocalStorage.set("refreshToken", response.data.data.refreshToken);
    return response.data.data;
};

const registerUser = async (user) => {
    const { firstName, lastName, userName, email, password } = user;
    const response = await apiClient.post("/users/login", {
        firstName,
        lastName,
        userName,
        email,
        password,
    });
    LocalStorage.set("accessToken", response.data.data.accessToken);
    LocalStorage.set("refreshToken", response.data.data.refreshToken);
    return response.data.data;
};

const refreshTokens = async (token) => {
    const response = await apiClient.post("/users/refresh-token", { refreshToken: token });
    return response.data.data;
};

const validateUser = async () => {
    const response = await apiClient.get("/users/user");
    return response.data.data;
};

const getNotifications = async () => {
    const response = await apiClient.get("/notifications/get");
    return response.data.data;
};

const getTransactions = async () => {
    const response = await apiClient.get("/transactions");
    return response.data.data.transactions;
};

const getRequestedTransactions = async () => {
    const response = await apiClient.get("/transactions/requested");
    return response.data.data.transactions;
};

const approveTransaction = async (transactionId) => {
    const response = await apiClient.get(`/transactions/requested/approve/${transactionId}`);
    return response.data.data;
};

const rejectRequest = async (transactionId) => {
    const response = await apiClient.get(`/transactions/requested/reject/${transactionId}`);
    return response.data.data;
};

const requestCard = async (pinCode) => {
    const response = await apiClient.post("/card/create", { pinCode: pinCode });
    return response.data.data;
};

const getCardDetails = async () => {
    const response = await apiClient.get("/card/get");
    return response.data.data.card;
};

const verifyUserLogin = async (token) => {
    const response = await apiClient.get(`/users/verify/${token}`);
    return response.data.data;
};

export {
    loginUser,
    registerUser,
    refreshTokens,
    validateUser,
    getNotifications,
    getTransactions,
    getRequestedTransactions,
    approveTransaction,
    rejectRequest,
    requestCard,
    getCardDetails,
    verifyUserLogin,
};
