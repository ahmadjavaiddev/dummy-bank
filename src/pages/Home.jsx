import { useEffect } from "react";
import axiosInstance from "../lib/axiosInstance";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("/users/user");
                console.log("User ::", response.data);
            } catch (error) {
                toast.error("Error fetching user!");
            }
        })();
    }, []);

    return (
        <>
            <main className="flex-1 p-4 sm:px-6 sm:py-0 mt-5">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Balance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">$12,345.67</div>
                            <div className="text-muted-foreground">
                                Last updated: 2023-06-01
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Transactions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Rent Payment</div>
                                        <div className="text-muted-foreground">2023-06-01</div>
                                    </div>
                                    <div className="text-red-500">-$1,000.00</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Paycheck</div>
                                        <div className="text-muted-foreground">2023-05-30</div>
                                    </div>
                                    <div className="text-green-500">+$3,000.00</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Utility Bill</div>
                                        <div className="text-muted-foreground">2023-05-15</div>
                                    </div>
                                    <div className="text-red-500">-$200.00</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Reimbursement</div>
                                        <div className="text-muted-foreground">2023-05-10</div>
                                    </div>
                                    <div className="text-green-500">+$75.00</div>
                                </div>
                            </div>
                            <Link href="#" className="mt-4 inline-block text-primary">
                                View all transactions
                            </Link>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Requested Money</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Dinner with friends</div>
                                        <div className="text-muted-foreground">2023-05-28</div>
                                    </div>
                                    <div className="text-primary">$25.00</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Reimbursement</div>
                                        <div className="text-muted-foreground">2023-05-10</div>
                                    </div>
                                    <div className="text-primary">$75.00</div>
                                </div>
                            </div>
                            <Link href="#" className="mt-4 inline-block text-primary">
                                View all requested money
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
};

export default Home;
