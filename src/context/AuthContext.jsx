import { createContext, useState, useLayoutEffect, useContext } from "react";
import { validateUser } from "../api";
import { LocalStorage } from "../lib/localStorage";
import { useLoading } from "./LoadingContext";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(LocalStorage.get("accessToken"));
    const { setLoading } = useLoading();

    useLayoutEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const response = await validateUser();
                if (!response.data.data.isLoggedIn) {
                    setUser(null);
                } else {
                    setUser(response.data.data);
                }
            } catch (error) {
                console.log("Error while verifying user!");
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const values = { user, setUser, token, setToken };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
