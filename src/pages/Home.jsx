import { useEffect, useState } from "react";
import RecentTransactions from "../components/RecentTransactions";
import RequestedTransactions from "../components/RequestedTransactions";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, CreditCardIcon } from "lucide-react";
import { getRequestedTransactions, getTransactions } from "../api";
import { setRequestedTransactions, setTransactions } from "../app/features/transactionSlice";
import { useDispatch } from "react-redux";

const Home = () => {
    const [recentLoading, setRecentLoading] = useState(true);
    const [requestLoading, setRequestLoading] = useState(true);
    const dispatch = useDispatch();

    const recentTransactions = async () => {
        setRecentLoading(true);
        try {
            const response = await getTransactions();
            dispatch(setTransactions(response));
        } catch (error) {
            console.error("Error fetching transactions", error);
        } finally {
            setRecentLoading(false);
        }
    };

    const requestedTransactions = async () => {
        setRequestLoading(true);
        try {
            const response = await getRequestedTransactions();
            dispatch(setRequestedTransactions(response));
        } catch (error) {
            console.error("Error fetching transactions", error);
        } finally {
            setRequestLoading(false);
        }
    };
    useEffect(() => {
        recentTransactions();
        requestedTransactions();
    }, []);

    return (
        <>
            <main className="flex-1 p-4 sm:px-6 sm:py-0 mt-5">
                <div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Balance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-4xl font-bold">$12,345.67</div>
                                    <ArrowUpIcon className="h-6 w-6 text-green-500" />
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    +5.2% from last month
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Sent Money</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-4xl font-bold">$8,765.43</div>
                                    <ArrowDownIcon className="h-6 w-6 text-red-500" />
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    -3.1% from last month
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Received Money</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-4xl font-bold">$2,345.67</div>
                                    <CreditCardIcon className="h-6 w-6" />
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Balance: $2,345.67 / Limit: $5,000
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex mt-5 gap-5">
                        <RecentTransactions
                            loading={recentLoading}
                            setLoading={setRecentLoading}
                            reload={recentTransactions}
                            limit={5}
                            showDescription={false}
                            showIndex={false}
                        />

                        <RequestedTransactions
                            loading={requestLoading}
                            setLoading={setRequestLoading}
                            reload={requestedTransactions}
                            limit={5}
                            showDescription={false}
                            showIndex={false}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
