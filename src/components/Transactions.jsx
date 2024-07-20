import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { getTransactions } from "../api";
import { setTransactions } from "../app/features/transactionSlice";
import { formatAmount } from "../helpers";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { FilterIcon } from "lucide-react";
import moment from "moment";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// eslint-disable-next-line react/prop-types
const Transactions = () => {
    const transactions = useSelector((state) => state.transaction.transactions);
    const dispatch = useDispatch();
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await getTransactions();
                dispatch(setTransactions(response.data.data.transactions));
            } catch (error) {
                console.error("Error fetching transactions", error);
            }
        })();
    }, [dispatch]);

    return (
        <div className="mt-6 w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <div className="flex items-center gap-2">
                        <Input
                            type="search"
                            placeholder="Search transactions"
                            className="max-w-xs"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <FilterIcon className="h-4 w-4 mr-2" />
                                    Filter
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    All
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.length > 0 ? (
                                transactions.map((transaction) => {
                                    const isFromUser = transaction.from.email === user.email;
                                    const displayUser = isFromUser
                                        ? transaction.to
                                        : transaction.from;
                                    return (
                                        <TableRow key={transaction._id}>
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
                                                    .fromNow(true)}
                                            </TableCell>
                                            <TableCell>{transaction.description}</TableCell>

                                            <TableCell>
                                                <span
                                                    className={`font-medium ${
                                                        isFromUser
                                                            ? "text-red-500"
                                                            : "text-green-500"
                                                    }`}
                                                >
                                                    {isFromUser ? "-" : "+"}$
                                                    {formatAmount(transaction.amount)}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="secondary">
                                                    {transaction.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="secondary">VIEW</Badge>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <div className="grid gap-4">Transactions Not Found!</div>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default Transactions;
