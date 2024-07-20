import axios from "axios";
import { LocalStorage } from "./localStorage";

const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
    console.warn("API URL is not available in environment variables");
}
const token = LocalStorage.get("accessToken");
if (!token) {
    console.warn("Token is not available in local storage");
}

const api = axios.create({
    baseURL: apiUrl,
    // withCredentials: true, // This ensures cookies are sent with requests
    headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
    },
});

export default api;
