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

const RequestMoney = () => {
    return (
        <main className="p-4 md:p-6">
            <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Request Money</CardTitle>
                            <CardDescription>
                                Enter the recipients details and the amount to request.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="recipient-name">Recipient Name</Label>
                                <Input
                                    id="recipient-name"
                                    placeholder="Enter recipient name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="recipient-email">Recipient Email</Label>
                                <Input
                                    id="recipient-email"
                                    placeholder="Enter recipient email"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="amount">Amount</Label>
                                <Input id="amount" type="number" placeholder="Enter amount" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="note">Note (optional)</Label>
                                <Textarea id="note" placeholder="Add a note" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="save-recipient" />
                                <Label htmlFor="save-recipient">
                                    Save recipient as contact
                                </Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto">Request Money</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    );
};

export default RequestMoney;
