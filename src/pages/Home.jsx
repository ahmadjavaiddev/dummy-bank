import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, CreditCardIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import Transactions from "../components/Transactions";

const Home = () => {
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
                    <div className="flex gap-5">
                        <Transactions limit={5} showDescription={false} showIndex={false} />

                        <div className="mt-6 w-full">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pending Requests</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Description</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
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
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            color="red"
                                                        >
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
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            color="red"
                                                        >
                                                            Reject
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
