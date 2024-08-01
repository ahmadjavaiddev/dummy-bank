import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useEffect } from "react";
import io from "socket.io-client";
import { LocalStorage } from "./lib/localStorage";
import { useDispatch } from "react-redux";
import { setNewNotification } from "./app/features/generalSlice";
import { setNewTransaction } from "./app/features/transactionSlice";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    const dispatch = useDispatch((state) => state.general);
    // const { loading } = useLoading();

    useEffect(() => {
        const token = LocalStorage.get("accessToken");
        const socket = io(import.meta.env.VITE_SOCKET_URL, {
            extraHeaders: {
                authorization: token,
            },
        });

        socket.on("connect", () => {
            console.log("Connected To Socket");
        });
        socket.on("notifications", (data) => {
            console.log("Received notification:", data);
            dispatch(setNewNotification(data));
        });
        socket.on("transactions", (data) => {
            console.log("Received transaction:", data);
            dispatch(setNewTransaction(data));
        });

        return () => {
            socket.disconnect();
        };
    }, [dispatch]);

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex min-h-screen w-full bg-background">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;
