import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { verifyUserLogin, verifyUserTransaction } from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "../components/ui/button";

// eslint-disable-next-line react/prop-types
const Verify = ({ type, userToken }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleUserVerification = async () => {
        try {
            if (type === "login") {
                await verifyUserLogin(userToken);
                toast.success("User verified successfully");
                navigate("/?refresh=true");
                console.log("Type Of Page in login ::", type);
                return;
            }
            if (type === "transactions") {
                console.log("Type Of Page in Transactions ::", type);
                await verifyUserTransaction(userToken);
                toast.success("User verified successfully");
                navigate("/admin/transactions");
                return;
            }
        } catch (error) {
            console.log("Error verifying user ::", error);
            toast.error("Invalid Verification Link");
            setError("Invalid Verification Link");
        }
    };

    useEffect(() => {
        console.log("Type ::", type);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[400px] mx-auto">
            <Card className="flex flex-col justify-center items-center">
                <CardHeader className="pb-2">
                    {error && (
                        <span className="w-full text-red-500 text-lg text-center mt-3 mb-5">
                            {error}
                        </span>
                    )}

                    <CardTitle className="text-2xl">Verify Your Action</CardTitle>
                </CardHeader>
                <CardContent className={"text-center"}>
                    <p className="text-lg text-center mt-3 mb-5">
                        Please check Your email inbox to verify your login.
                    </p>
                    <Button onClick={handleUserVerification} size="full">
                        Verify
                    </Button>
                </CardContent>
                <CardFooter>
                    <p className="text-sm w-full flex justify-center items-center">
                        Didnt receive OTP? <span className="text-blue-500">Resend</span>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Verify;
