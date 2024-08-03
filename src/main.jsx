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
import Verify from "./pages/Verify.jsx";
import RequestMoney from "./pages/RequestMoney.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./layouts/ProtectedRoute.jsx";
import PublicRoute from "./layouts/PublicRoute.jsx";
import { LoadingProvider } from "./context/LoadingContext.jsx";
import CardPage from "./pages/Card.jsx";
import Transactions from "./components/Transactions.jsx";

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
            <Route
                path="/verify/:userToken"
                element={
                    <PublicRoute>
                        <Verify />
                    </PublicRoute>
                }
            />
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
                        <Transactions />
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
