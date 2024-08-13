import { useDispatch } from "react-redux";
import RecentTransactions from "../components/RecentTransactions";
import RequestedTransactions from "../components/RequestedTransactions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useEffect, useState } from "react";
import { getRequestedTransactions, getTransactions } from "../api";
import { setRequestedTransactions, setTransactions } from "../app/features/transactionSlice";

const TransactionsPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const reloadRecentTransactions = async () => {
        setLoading(true);
        try {
            const response = await getTransactions();
            dispatch(setTransactions(response));
        } catch (error) {
            console.error("Error fetching transactions", error);
        } finally {
            setLoading(false);
        }
    };

    const reloadRequestedTransactions = async () => {
        setLoading(true);
        try {
            const response = await getRequestedTransactions();
            dispatch(setRequestedTransactions(response));
        } catch (error) {
            console.error("Error fetching transactions", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        reloadRecentTransactions();
        reloadRequestedTransactions();
    }, [dispatch]);

    return (
        <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="requested">Requested</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
                <RecentTransactions reload={reloadRecentTransactions} loading={loading} />
            </TabsContent>
            <TabsContent value="requested">
                <RequestedTransactions
                    reload={reloadRequestedTransactions}
                    loading={loading}
                    setLoading={setLoading}
                />
            </TabsContent>
        </Tabs>
    );
};

export default TransactionsPage;
