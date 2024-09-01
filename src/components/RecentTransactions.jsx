/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { formatAmount } from "../helpers";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { FilterIcon, RefreshCwIcon } from "lucide-react";
import moment from "moment";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Spinner from "./Spinner";

const RecentTransactions = ({
    reload,
    loading,
    limit = 20,
    showDescription = true,
    showIndex = true,
}) => {
    const transactions = useSelector((state) => state.transaction.transactions);
    const { user } = useAuth();

    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between items-center flex-wrap gap-4">
                        <span>Recent Transactions</span>
                        <Button variant="outline" size="sm" onClick={reload}>
                            <RefreshCwIcon className="h-5 w-5" />
                        </Button>
                    </CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                        <Input
                            type="search"
                            placeholder="Search transactions"
                            className="max-w-xs w-full sm:w-auto"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full sm:w-auto"
                                >
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
                    <div>
                        <Table
                            className="min-w-[800px] text-lg"
                            style={{
                                overflowX: "scroll",
                            }}
                        >
                            <TableHeader>
                                <TableRow>
                                    {showIndex && <TableHead>Index</TableHead>}
                                    <TableHead>User</TableHead>
                                    <TableHead>Date</TableHead>
                                    {showDescription && <TableHead>Description</TableHead>}
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Action</TableHead>
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
                                    transactions
                                        ?.slice(0, limit)
                                        ?.map((transaction, index) => {
                                            const isFromUser =
                                                transaction.from?.email === user?.email;
                                            const displayUser = isFromUser
                                                ? transaction.to
                                                : transaction.from;
                                            return (
                                                <TableRow key={transaction._id}>
                                                    {showIndex && (
                                                        <TableCell className="w-5">
                                                            {++index}
                                                        </TableCell>
                                                    )}
                                                    <TableCell>
                                                        <span className="flex gap-3 items-center">
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
                                    <TableRow>
                                        <TableCell colSpan={6}>
                                            <span className="grid gap-4">
                                                Transactions Not Found!
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default RecentTransactions;
