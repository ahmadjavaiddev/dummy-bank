import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Layout from "../Layout";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLoading } from "../context/LoadingContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { user, token } = useAuth();
    const { loading } = useLoading();

    if (!user?._id || !token) {
        return <Navigate to="/" />;
    }

    return loading ? <LoadingSpinner /> : <Layout>{children}</Layout>;
};

export default ProtectedRoute;
