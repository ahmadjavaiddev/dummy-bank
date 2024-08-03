import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { approveTransaction, getRequestedTransactions } from "../api";
import { setRequestedTransactions } from "../app/features/transactionSlice";
import { formatAmount } from "../helpers";
import moment from "moment";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Spinner from "./Spinner";
import { RefreshCwIcon } from "lucide-react";

// eslint-disable-next-line react/prop-types
const RequestedTransactions = ({ limit = 10, showDescription = true, showIndex = true }) => {
    const transactions = useSelector((state) => state.transaction.requestedTransactions);
    const dispatch = useDispatch();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const handleApproveTransaction = async (transactionId) => {
        setLoading(true);
        try {
            const response = await approveTransaction(transactionId);
            if (response.success) {
                const removeApprovedTransaction = transactions.filter(
                    (transaction) => transaction._id !== transactionId
                );
                dispatch(setRequestedTransactions(removeApprovedTransaction));
            }
        } catch (error) {
            console.error("Error fetching transactions", error);
        } finally {
            setLoading(false);
        }
    };

    const handleReloadTransactions = async () => {
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
        handleReloadTransactions();
    }, [dispatch]);

    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle className={"flex justify-between"}>
                        <span>Pending Requests</span>
                        <Button variant="outline" size="sm" onClick={handleReloadTransactions}>
                            <RefreshCwIcon className="h-5 w-5" />
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Date</TableHead>
                                {showDescription && <TableHead>Description</TableHead>}
                                <TableHead>Amount</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <Spinner />
                                    </TableCell>
                                </TableRow>
                            ) : transactions.length > 0 ? (
                                transactions?.slice(0, limit)?.map((transaction, index) => {
                                    const isFromUser =
                                        transaction?.from?.email === user?.email;
                                    const displayUser = isFromUser
                                        ? transaction?.to
                                        : transaction?.from;
                                    return (
                                        <TableRow key={transaction._id}>
                                            {showIndex && (
                                                <TableCell className={"w-5"}>
                                                    {++index}
                                                </TableCell>
                                            )}
                                            <TableCell>
                                                <span className="flex gap-3">
                                                    <Avatar className="h-8 w-8 border">
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback>
                                                            {displayUser?.userName[0]?.toUpperCase()}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span className="flex flex-col">
                                                        <span className="font-medium">
                                                            {displayUser?.userName[0]?.toUpperCase() +
                                                                displayUser?.userName?.slice(
                                                                    1
                                                                )}
                                                        </span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {displayUser?.email}
                                                        </span>
                                                    </span>
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                {moment(transaction.updatedAt)
                                                    .add("TIME_ZONE", "hours")
                                                    .fromNow(true)}{" "}
                                                ago
                                            </TableCell>
                                            {showDescription && (
                                                <TableCell>
                                                    {transaction.description}
                                                </TableCell>
                                            )}
                                            <TableCell>
                                                ${formatAmount(transaction.amount)}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className={"text-green-500 font-bold"}
                                                        onClick={() =>
                                                            handleApproveTransaction(
                                                                transaction._id
                                                            )
                                                        }
                                                    >
                                                        Approve
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className={"text-red-500 font-bold"}
                                                    >
                                                        Reject
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6}>
                                        <span className="grid gap-4">
                                            Transactions Not Found!
                                        </span>
                                    </TableCell>
                                </TableRow>
                            )}
                            {/* <TableRow>
                                <TableCell>2023-04-18</TableCell>
                                <TableCell>Bill Payment</TableCell>
                                <TableCell>$125.00</TableCell>
                                <TableCell>
                                    <Badge variant="outline">Pending</Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="sm">
                                            Approve
                                        </Button>
                                        <Button variant="outline" size="sm" color="red">
                                            Reject
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2023-04-16</TableCell>
                                <TableCell>Fund Transfer</TableCell>
                                <TableCell>$500.00</TableCell>
                                <TableCell>
                                    <Badge variant="outline">Pending</Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="sm">
                                            Approve
                                        </Button>
                                        <Button variant="outline" size="sm" color="red">
                                            Reject
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default RequestedTransactions;
