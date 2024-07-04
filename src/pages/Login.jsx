import { useState } from "react";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../lib/axiosInstance";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();

    const [activeLogin, setActiveLogin] = useState(true);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleFormSwitch = () => {
        setActiveLogin(!activeLogin);
    };

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post(`/users/login`, {
                email: user.email,
                password: user.password,
            });
            navigate(`/verify/login/${response.data.data?.user?._id}`);
            toast.success("Login SuccessFull!");
        } catch (error) {
            toast.error("Error logging in user!");
        }
    };

    const handleRegister = async () => {
        try {
            if (user.confirmPassword !== user.password) {
                return;
            }
            const response = await axiosInstance.post(`/users/register`, {
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                email: user.email,
                password: user.password,
            });
            navigate(`/verify/register/${response.data.data?.user?._id}`);
            toast.success("Registration SuccessFull!");
        } catch (error) {
            toast.error("Error Registering user!");
        }
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            {activeLogin ? (
                <Card className="w-[430px]">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Login to your account to send and receive money efficiently.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        placeholder="johndoe@mail.com"
                                        type="email"
                                        onChange={(e) =>
                                            setUser({ ...user, email: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        placeholder="Your Password"
                                        type="password"
                                        onChange={(e) =>
                                            setUser({ ...user, password: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center">
                        <Button size="full" onClick={handleLogin}>
                            Login
                        </Button>
                        <p className="mt-3">
                            Dont have an account?
                            <span
                                onClick={handleFormSwitch}
                                className="text-blue-500 cursor-pointer ml-2"
                            >
                                Register
                            </span>
                        </p>
                    </CardFooter>
                </Card>
            ) : (
                <Card className="w-[430px]">
                    <CardHeader>
                        <CardTitle>Create an account</CardTitle>
                        <CardDescription>
                            Create an account to send and receive money efficiently.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                            id="firstName"
                                            placeholder="John"
                                            type="text"
                                            onChange={(e) =>
                                                setUser({ ...user, firstName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Doe"
                                            type="text"
                                            onChange={(e) =>
                                                setUser({ ...user, lastName: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            id="username"
                                            placeholder="johndoe"
                                            type="text"
                                            onChange={(e) =>
                                                setUser({ ...user, userName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            placeholder="johndoe@mail.com"
                                            type="email"
                                            onChange={(e) =>
                                                setUser({ ...user, email: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            placeholder="Your Password"
                                            type="password"
                                            onChange={(e) =>
                                                setUser({ ...user, password: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="confirmPassword">
                                            Confirm Password
                                        </Label>
                                        <Input
                                            id="confirmPassword"
                                            placeholder="Confirm Password"
                                            type="password"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    confirmPassword: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center">
                        <Button size="full" onClick={handleRegister}>
                            Create an account
                        </Button>
                        <p className="mt-3">
                            Already have an account?
                            <span
                                onClick={handleFormSwitch}
                                className="text-blue-500 cursor-pointer ml-2"
                            >
                                Login
                            </span>
                        </p>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default Login;
