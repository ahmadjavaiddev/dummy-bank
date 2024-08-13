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
import toast from "react-hot-toast";
import { loginUser, registerUser } from "../api/index";

const Login = () => {
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);
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
            setProcessing(true);
            await loginUser({ email: user.email, password: user.password });
            // navigate(`/admin`);
            toast.success("Login Successful!");
        } catch (error) {
            toast.error("Error logging in user!");
        } finally {
            setProcessing(false);
        }
    };

    const handleRegister = async () => {
        if (user.confirmPassword !== user.password) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            setProcessing(true);
            await registerUser(user);
            navigate(`/admin`);
            toast.success("Registration Successful!");
        } catch (error) {
            toast.error("Error registering user!");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            {activeLogin ? (
                <Card className="w-[430px]">
                    <CardHeader>
                        <CardTitle>{processing ? "Processing" : "Login"}</CardTitle>
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
                                        value={user.email}
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
                                        value={user.password}
                                        onChange={(e) =>
                                            setUser({ ...user, password: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center">
                        <Button size="full" onClick={handleLogin} disabled={processing}>
                            {processing ? "Processing..." : "Login"}
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
                                            value={user.firstName}
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
                                            value={user.lastName}
                                            onChange={(e) =>
                                                setUser({ ...user, lastName: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        placeholder="johndoe"
                                        type="text"
                                        value={user.userName}
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
                                        value={user.email}
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
                                        value={user.password}
                                        onChange={(e) =>
                                            setUser({ ...user, password: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        type="password"
                                        value={user.confirmPassword}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center">
                        <Button size="full" onClick={handleRegister} disabled={processing}>
                            {processing ? "Processing..." : "Create an account"}
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
