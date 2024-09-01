import { useParams } from "react-router-dom";
import PublicRoute from "../layouts/PublicRoute";
import Verify from "../pages/Verify";

const PublicRouteVerify = () => {
    const { type, userToken } = useParams();

    if (type === "transactions") {
        console.log("Before :: Type Of Page in Transactions ::", type);
        return <Verify type={"transactions"} userToken={userToken} />;
    }
    console.log("Before :: Type Of Page in Login ::", type);
    return (
        <PublicRoute>
            <Verify type={"login"} userToken={userToken} />;
        </PublicRoute>
    );
};

export default PublicRouteVerify;
