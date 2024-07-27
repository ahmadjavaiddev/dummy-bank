import { useAuth } from "../context/AuthContext";
import { PencilIcon, TrashIcon } from "../lib/icons";
import { Button } from "./ui/button";

const CreditCard = () => {
    const { user } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background">
            <div className="w-full max-w-4xl px-4 py-8 md:px-6 border rounded-lg">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-center bg-background">
                        <div className="max-w-md w-full space-y-6">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-bold">Credit Card Details</h1>
                                {/* <div className="text-muted-foreground">John Doe</div> */}
                            </div>
                            <div className="bg-card rounded-2xl shadow-lg overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10" />
                                <div className="relative z-10 p-6 text-card-foreground">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-lg font-medium">Credit Card</div>
                                        <div className="text-sm">Visa</div>
                                    </div>
                                    <div className="text-3xl font-bold tracking-wider mb-4">
                                        4111 1111 1111 1111
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                Expires
                                            </div>
                                            <div className="text-lg font-medium">08/25</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                CVV
                                            </div>
                                            <div className="text-lg font-medium">123</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <div className="text-sm font-medium text-muted-foreground">
                                Card Number
                            </div>
                            <div className="text-2xl font-bold">1234 5678 9012 3456</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <div className="text-sm font-medium text-muted-foreground">
                                    Expires
                                </div>
                                <div className="text-xl font-bold">12/24</div>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-muted-foreground">
                                    CVV
                                </div>
                                <div className="text-xl font-bold">123</div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="text-sm font-medium text-muted-foreground">
                                Cardholder Name
                            </div>
                            <div className="text-xl font-bold">
                                {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="sm">
                                <PencilIcon className="w-4 h-4" />
                                Edit
                            </Button>
                            <Button variant="outline" size="sm">
                                <TrashIcon className="w-4 h-4" />
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
