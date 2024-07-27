import CreditCard from "../components/CreditCard";
import RequestCard from "../components/RequestCard";
import { useAuth } from "../context/AuthContext";

const CardPage = () => {
    const { user } = useAuth();

    return (
        <div>
            {user.haveCard ? (
                <div>
                    <CreditCard />
                </div>
            ) : (
                <RequestCard />
            )}
        </div>
    );
};

export default CardPage;
