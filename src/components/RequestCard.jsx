import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { requestCard } from "../api";

const RequestCard = () => {
    const { user } = useAuth();
    const [pinCode, setPinCode] = useState("");
    const [error, setError] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handlePinChange = (e) => {
        const value = e.target.value;
        const numericValue = Number(value);

        if (isNaN(numericValue)) {
            setError("Code should be digits");
        } else if (value.length !== 6) {
            setError("Code must be 6 digits");
        } else {
            setError(null); // Clear error if validation passes
        }

        setPinCode(value);
        console.log("pinCode value ::", value);
    };

    useEffect(() => {
        if (pinCode.length === 6 && !error) {
            setButtonDisabled(false);
        }
        if (pinCode.length !== 6 && error) {
            setButtonDisabled(true);
        }
    }, [error, pinCode.length]);

    const handleRequestCard = async () => {
        try {
            const response = await requestCard(pinCode);
            console.log("Response ::", response.data);
        } catch (error) {
            console.log("Error while Requesting Card");
        }
    };

    return (
        <Card className="mx-auto max-w-md mt-5">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Request Credit Card</CardTitle>
                <CardDescription>
                    Enter your details below to request a new credit card.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Enter your full name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        defaultValue={user.email}
                        readOnly
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pin-code">
                        PIN Code
                        {error && (
                            <span className="ml-2 text-red-500 font-semibold">{error}</span>
                        )}
                    </Label>
                    <Input
                        id="pin-code"
                        type="text"
                        placeholder="Enter your PIN Code"
                        onChange={handlePinChange}
                        value={pinCode}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    className={`w-full`}
                    disabled={buttonDisabled}
                    onClick={handleRequestCard}
                >
                    Request Card
                </Button>
            </CardFooter>
        </Card>
    );
};

export default RequestCard;
