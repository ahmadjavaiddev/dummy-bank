import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLoading } from "../context/LoadingContext";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
    const { user, token } = useAuth();
    const { loading } = useLoading();

    if (user?._id && token) {
        return <Navigate to="/admin" />;
    }

    return loading ? <LoadingSpinner /> : children;
};

export default PublicRoute;
