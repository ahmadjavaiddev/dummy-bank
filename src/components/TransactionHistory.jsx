import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

const TransactionHistory = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View your recent money transfers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">John Doe</div>
                                <div className="text-sm text-muted-foreground">
                                    johndoe@example.com
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-medium">-$250.00</div>
                            <div className="text-sm text-muted-foreground">May 15, 2023</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">Jane Smith</div>
                                <div className="text-sm text-muted-foreground">
                                    janesmith@example.com
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-medium">-$100.00</div>
                            <div className="text-sm text-muted-foreground">May 10, 2023</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">Bob Johnson</div>
                                <div className="text-sm text-muted-foreground">
                                    bobjohnson@example.com
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-medium">-$75.00</div>
                            <div className="text-sm text-muted-foreground">May 5, 2023</div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="ml-auto">
                    View All Transactions
                </Button>
            </CardFooter>
        </Card>
    );
};

export default TransactionHistory;
