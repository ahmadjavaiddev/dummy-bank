import { Outlet, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import axiosInstance from "./lib/axiosInstance";
import { useEffect } from "react";

function Layout() {
    const navigate = useNavigate();

    const verifyUser = async () => {
        try {
            const response = await axiosInstance.get(`/users/check-verify-user`);
            const data = response.data;

            if (!data.IP) {
                navigate(`/verify/ip/${data.userId}`);
            }
        } catch (error) {
            toast.error("Error while verifying user!");
            navigate("/");
        }
    };

    useEffect(() => {
        verifyUser();
    }, [navigate]);

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex min-h-screen w-full bg-background">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;
