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
const apiUrl = import.meta.env.VITE_API_URL;

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
        if (otp.length === 6 && id) {
            const typeOfVerification =
                type === "login" ? "LOGIN" : type === "register" ? "REGISTER" : "IP";
            handleVerification(typeOfVerification);
        }
    }, [type, otp, id]);

    return (
        <div className="flex justify-center items-center h-[100vh]">
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
        </div>
    );
};

export default Verify;
