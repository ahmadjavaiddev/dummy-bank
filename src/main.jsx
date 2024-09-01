import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import SendMoney from "./pages/SendMoney.jsx";
import RequestMoney from "./pages/RequestMoney.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./layouts/ProtectedRoute.jsx";
import PublicRoute from "./layouts/PublicRoute.jsx";
import { LoadingProvider } from "./context/LoadingContext.jsx";
import CardPage from "./pages/Card.jsx";
import TransactionsPage from "./pages/Transactions.jsx";
import PublicRouteVerify from "./components/RouteWithParams .jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route path="/verify/:type/:userToken" element={<PublicRouteVerify />} />
            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <App />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/send-money"
                element={
                    <ProtectedRoute>
                        <SendMoney />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/request-money"
                element={
                    <ProtectedRoute>
                        <RequestMoney />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/transactions"
                element={
                    <ProtectedRoute>
                        <TransactionsPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/credit-card"
                element={
                    <ProtectedRoute>
                        <CardPage />
                    </ProtectedRoute>
                }
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <LoadingProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </LoadingProvider>
    </Provider>
);
