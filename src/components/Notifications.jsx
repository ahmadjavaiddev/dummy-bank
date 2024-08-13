import { Check } from "lucide-react";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifications } from "../app/features/generalSlice";
import { getNotifications } from "../api";
import moment from "moment";

const Notifications = () => {
    const notifications = useSelector((state) => state.general.notifications);
    const dispatch = useDispatch((state) => state.general);

    useEffect(() => {
        (async () => {
            try {
                const response = await getNotifications();
                dispatch(setNotifications(response));
            } catch (error) {
                console.log("Error in notifications ::", error);
            }
        })();
    }, [dispatch]);

    return (
        <Card className={""}>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    {notifications.slice(0, 3).map((notification) => (
                        <div
                            key={notification._id}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.message}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {moment(notification.updatedAt)
                                        .add("TIME_ZONE", "hours")
                                        .fromNow(true)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Check className="mr-2 h-4 w-4" /> Mark all as read
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Notifications;
