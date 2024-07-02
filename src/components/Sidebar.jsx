import { Link, useLocation } from "react-router-dom";
import "./style/Sidebar.css";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const location = useLocation();
    const [sidebarUrl, setSidebarUrl] = useState("");

    useEffect(() => {
        setSidebarUrl(location.pathname);
        console.log("URL ::", location.pathname);
    }, [location.pathname]);

    return (
        <nav className="sidebar flex flex-col gap-3">
            <Link to="/admin">
                <Button
                    variant={sidebarUrl === "/admin" ? "active" : "outline"}
                    size="full"
                    className="flex justify-start items-center pl-4 py-5"
                >
                    Dashboard
                </Button>
            </Link>
            <Link to="send-money">
                <Button
                    variant={sidebarUrl === "/admin/send-money" ? "active" : "outline"}
                    size="full"
                    className="flex justify-start items-center pl-4 py-5"
                >
                    Send Money
                </Button>
            </Link>
            <Link to="#">
                <Button
                    variant={sidebarUrl === "/admin/settings" ? "active" : "outline"}
                    size="full"
                    className="flex justify-start items-center pl-4 py-5"
                >
                    Settings
                </Button>
            </Link>
        </nav>
    );
};

export default Sidebar;
