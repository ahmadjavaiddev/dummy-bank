import { Link } from "react-router-dom";
import "./style/Sidebar.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <Link to="/admin">Dashboard</Link>
                <Link to="send-money">Send Money</Link>
                <Link to="#">Settings</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
