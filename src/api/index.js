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
const registerUser = (user) => {
    const { firstName, lastName, userName, email, password } = user;
    return apiClient.post("/users/login", { firstName, lastName, userName, email, password });
};

const validateUser = () => {
    return apiClient.get("/users/user");
};

const getNotifications = () => {
    return apiClient.get("/notifications/get");
};

const getTransactions = () => {
    return apiClient.get("/transactions");
};

const requestCard = (pinCode) => {
    return apiClient.post("/card/create", { pinCode: pinCode });
};

const getCardDetails = async () => {
    const response = await apiClient.get("/card/get");
    return response.data.data.card;
};

export {
    loginUser,
    registerUser,
    validateUser,
    getNotifications,
    getTransactions,
    requestCard,
    getCardDetails,
};
