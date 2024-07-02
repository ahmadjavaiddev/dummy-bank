import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import SendMoney from "./pages/SendMoney.jsx";
import Verify from "./pages/Verify.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login />} />
            <Route path="/verify/:type/:id" element={<Verify />} />
            <Route path="/admin" element={<Layout />}>
                <Route path="" element={<App />} />
                <Route path="send-money" element={<SendMoney />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
