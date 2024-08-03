import RecentTransactions from "../components/RecentTransactions";
import RequestedTransactions from "../components/RequestedTransactions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const TransactionsPage = () => {
    return (
        <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="requested">Requested</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
                <RecentTransactions />
            </TabsContent>
            <TabsContent value="requested">
                <RequestedTransactions />
            </TabsContent>
        </Tabs>
    );
};

export default TransactionsPage;
