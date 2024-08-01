import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLoading } from "../context/LoadingContext";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
    const { user, token } = useAuth();
    const { loading } = useLoading();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user?._id && token) {
        return <Navigate to="/admin" state={{ from: location }} />;
    }

    return children;
};

export default PublicRoute;
