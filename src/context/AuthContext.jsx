import { createContext, useState, useLayoutEffect, useContext } from "react";
import { refreshTokens, validateUser } from "../api";
import { LocalStorage } from "../lib/localStorage";
import { useLoading } from "./LoadingContext";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

const refreshTokenAgain = async (token) => {
    try {
        const response = await refreshTokens(token);
        LocalStorage.set("accessToken", response.accessToken);
        LocalStorage.set("refreshToken", response.refreshToken);
        return true;
    } catch (error) {
        LocalStorage.remove("accessToken");
        LocalStorage.remove("refreshToken");
        console.log("Error Refreshing the Tokens");
        return false;
    }
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(LocalStorage.get("accessToken"));
    const { setLoading } = useLoading();

    useLayoutEffect(() => {
        (async () => {
            setLoading(true);
            try {
                let response = await validateUser();
                if (response.isLoggedIn && token) {
                    setUser(response);
                } else {
                    const refreshToken = LocalStorage.get("refreshToken");
                    if (refreshToken) {
                        const success = await refreshTokenAgain(refreshToken);
                        if (success) {
                            response = await validateUser(); // Re-validate user with new access token
                            if (response.isLoggedIn) {
                                setUser(response);
                                window.location.href = "/admin"; // Redirect after successful refresh
                            } else {
                                setUser(null);
                            }
                        } else {
                            setUser(null);
                        }
                    } else {
                        setUser(null);
                    }
                }
            } catch (error) {
                LocalStorage.remove("accessToken");
                console.log("Error while verifying user!");
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();
    }, [setLoading, token]);

    const values = { user, setUser, token, setToken };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
