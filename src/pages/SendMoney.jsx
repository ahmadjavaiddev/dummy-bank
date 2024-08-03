import { useState } from "react";
import TransactionHistory from "../components/RecentTransactions";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import axiosInstance from "../lib/axiosInstance";

const SendMoney = () => {
    const [sendMoney, setSendMoney] = useState({
        name: "",
        receiverEmail: "",
        amount: 0,
        description: "",
    });

    const handleSendMoney = async () => {
        try {
            console.log("SendMoney ::", sendMoney);
            const response = await axiosInstance.post("/transactions/send", {
                name: sendMoney.name,
                receiverEmail: sendMoney.receiverEmail,
                amount: sendMoney.amount,
                description: sendMoney.description,
            });
            console.log("Response ::", response.data);
        } catch (error) {
            console.log("Error while sending Payment ::", error);
        }
    };

    return (
        <main className="p-4 md:p-6">
            <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Send Money</CardTitle>
                            <CardDescription>
                                Enter the recipients details and the amount to send.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="recipient-name">Recipient Name</Label>
                                <Input
                                    id="recipient-name"
                                    placeholder="Enter recipient name"
                                    onChange={(e) =>
                                        setSendMoney({ ...sendMoney, name: e.target.value })
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="recipient-email">Recipient Email</Label>
                                <Input
                                    id="recipient-email"
                                    placeholder="Enter recipient email"
                                    onChange={(e) =>
                                        setSendMoney({
                                            ...sendMoney,
                                            receiverEmail: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="amount">Amount</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    placeholder="Enter amount"
                                    onChange={(e) =>
                                        setSendMoney({ ...sendMoney, amount: e.target.value })
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="note">Note (optional)</Label>
                                <Textarea
                                    id="note"
                                    placeholder="Add a note"
                                    onChange={(e) =>
                                        setSendMoney({
                                            ...sendMoney,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="save-recipient" />
                                <Label htmlFor="save-recipient">
                                    Save recipient as contact
                                </Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto" onClick={handleSendMoney}>
                                Send Money
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <TransactionHistory limit={5} />
                </div>
            </div>
        </main>
    );
};

export default SendMoney;
