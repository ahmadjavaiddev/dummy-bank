import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "../components/ui/input-otp";
import axios from "axios";
import toast from "react-hot-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
const apiUrl = import.meta.env.VITE_API_URL;
import axiosInstance from "../lib/axiosInstance";

const Verify = () => {
    const { type, id } = useParams();
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const handleOtpChange = (newOtp) => {
        setOtp(newOtp);
    };

    const handleVerification = async (typeOfVerification) => {
        try {
            const response = await axios.post(`${apiUrl}/users/verify-user`, {
                userId: id,
                verificationCode: otp,
                type: typeOfVerification,
            });

            navigate("/admin");
            toast.success("Verification SuccessFull!");
        } catch (error) {
            toast.error("Invalid Verification Code!");
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(`/users/have-otp/${id}`);

                if (!response.data.exists) {
                    navigate("/admin");
                }
            } catch (error) {
                console.log("Error user doesn't have any OTP request");
            }
        })();

        if (otp.length === 6 && id) {
            const typeOfVerification =
                type === "login" ? "LOGIN" : type === "register" ? "REGISTER" : "IP";
            handleVerification(typeOfVerification);
        }
    }, [type, otp, id]);

    const instructionsTitle = () => {
        if (type === "register") {
            const text = "Verify Your Email";
            return text;
        }
        if (type === "login") {
            const text = "Verify Your Login";
            return text;
        }
        if (type === "ip") {
            const text = "Verify Your IP Address";
            return text;
        }
    };
    const instructionsDescription = () => {
        if (type === "register") {
            const text =
                "Before continue please verify your email by using OTP sent to your email. Please check your inbox.";
            return text;
        }
        if (type === "login") {
            const text =
                "Before continue please verify your Login by using OTP sent to your email. Please check your inbox.";
            return text;
        }
        if (type === "ip") {
            const text =
                "Before continue please verify your IP Address by using OTP sent to your email. Please check your inbox.";
            return text;
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-72 mx-auto">
            <Card className="flex flex-col justify-center items-center">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{instructionsTitle()}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-center mb-5">{instructionsDescription()}</p>
                    <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={handleOtpChange}
                        className="otp-container"
                        containerClassName="otp-inner-container"
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </CardContent>
                <CardFooter>
                    <p className="text-sm w-full flex justify-center items-center">
                        Didn't receive OTP? <span className="text-blue-500">Resend</span>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Verify;
