import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
    baseURL: apiUrl,
    withCredentials: true, // This ensures cookies are sent with requests
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
