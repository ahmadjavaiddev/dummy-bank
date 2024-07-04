import { Link } from "react-router-dom";
import "./style/Header.css";
import { Button } from "./ui/button";
import { LogOutIcon, MenuIcon, SettingsIcon, SignalIcon, UserIcon } from "../lib/icons.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";

const Header = () => {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")
    );

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
                <Button variant="outline" size="icon" className="md:hidden">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle Sidebar</span>
                </Button>
                <h1 className="text-xl font-semibold">Dummy Bank</h1>
                <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <SignalIcon className="h-6 w-6" />
                    <span className="sr-only">Notifications</span>
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
