import { Link, useLocation } from "react-router-dom";
import "./style/Sidebar.css";
import { useEffect, useState } from "react";
import {
    BanknoteIcon,
    CreditCardIcon,
    DollarSignIcon,
    ReplyIcon,
    SendIcon,
    SettingsIcon,
    TicketIcon,
    UserIcon,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { useSelector } from "react-redux";

const navMenu = [
    {
        title: "Overview",
        slug: "/admin",
        iconName: "BanknoteIcon",
    },
    {
        title: "Send Money",
        slug: "/admin/send-money",
        iconName: "SendIcon",
    },
    {
        title: "Request Money",
        slug: "/admin/request-money",
        iconName: "ReplyIcon",
    },
    {
        title: "Transactions",
        slug: "/admin/transactions",
        iconName: "TicketIcon",
    },
    {
        title: "Profile",
        slug: "/admin/profile",
        iconName: "UserIcon",
    },
    {
        title: "Settings",
        slug: "/admin/settings",
        iconName: "SettingsIcon",
    },
    {
        title: "Credit Card",
        slug: "/admin/credit-card",
        iconName: "CreditCardIcon",
    },
];

const icons = {
    BanknoteIcon: BanknoteIcon,
    SendIcon: SendIcon,
    ReplyIcon: ReplyIcon,
    TicketIcon: TicketIcon,
    UserIcon: UserIcon,
    SettingsIcon: SettingsIcon,
    CreditCardIcon: CreditCardIcon,
};
import { useAuth } from "../context/AuthContext.jsx";
import { formatAmount } from "../helpers/index.js";

const Sidebar = () => {
    const { user } = useAuth();
    const location = useLocation();
    const [sidebarUrl, setSidebarUrl] = useState("");
    const sidebarToggle = useSelector((state) => state.general.sidebar);

    useEffect(() => {
        setSidebarUrl(location.pathname);
    }, [location.pathname]);

    return (
        <aside
            className={`${
                !sidebarToggle ? "hidden" : "block"
            } w-64 flex-col border-r bg-background p-6 md:flex`}
        >
            <div className="sticky top-6 z-10">
                <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>
                            {user?.firstName[0].toUpperCase() +
                                user?.lastName[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                        <div className="font-semibold">{user?.userName}</div>
                        <div className="text-sm text-muted-foreground">{user?.email}</div>
                    </div>
                </div>
                <Separator className="my-6" />
                <nav className="grid gap-2">
                    {navMenu.map((item) => {
                        const IconComponent = icons[item.iconName];
                        return (
                            <Link
                                key={item.slug}
                                to={item.slug}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                            >
                                <IconComponent className="h-5 w-5" />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>
                <Separator className="my-6" />
                <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                        <DollarSignIcon className="h-5 w-5 text-primary" />
                        <div>
                            <div className="text-sm font-medium">Account Balance</div>
                            <div className="text-2xl font-semibold">
                                ${formatAmount(user?.balance)}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCardIcon className="h-5 w-5 text-primary" />
                        <div>
                            <div className="text-sm font-medium">Credit Card</div>
                            <div className="text-lg font-semibold">**** **** **** 1234</div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
