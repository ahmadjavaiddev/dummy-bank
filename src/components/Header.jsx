import { Link } from "react-router-dom";
import "./style/Header.css";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../app/features/generalSlice.js";
import { BellIcon, LogOutIcon, MenuIcon, SettingsIcon, SunMoonIcon, UserIcon } from "lucide-react";
import Notifications from "./Notifications.jsx";

const Header = () => {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")
    );
    const dispatch = useDispatch((state) => state.general);

    const toggleSideBar = () => {
        dispatch(toggleSidebar());
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 shadow-sm md:px-6">
            <div className="flex items-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden"
                    onClick={toggleSideBar}
                >
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle Sidebar</span>
                </Button>
                <h1 className="text-xl font-semibold">Dummy Bank</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <BellIcon className="w-5 h-5" />
                                <span className="sr-only">Notifications</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-80 p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium">Notifications</h3>
                                <Button variant="ghost" size="sm">
                                    Mark all as read
                                </Button>
                            </div>
                            <Notifications />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Button
                    variant="outline"
                    className="px-2 py-1"
                    onClick={() => setIsDark(!isDark)}
                >
                    <SunMoonIcon className="w-5 h-5" />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link href="#" className="flex items-center gap-2">
                                <UserIcon className="h-4 w-4" />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="#" className="flex items-center gap-2">
                                <SettingsIcon className="h-4 w-4" />
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="#" className="flex items-center gap-2">
                                <LogOutIcon className="h-4 w-4" />
                                Sign Out
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Header;
