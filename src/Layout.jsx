import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import useSystemTheme from "./lib/useSystemTheme";
// import { useEffect } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "./components/ui/resizable";

function Layout() {
    // const navigate = useNavigate();

    // const API = "https://personal-blog-backend-rosy.vercel.app";
    // // const API = "http://localhost:5000";

    // const verifyUser = async () => {
    //     try {
    //         const response = await axios.get(`${API}/api/v1/users/verifyUser`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //             },
    //         });

    //         // console.log("Response ::", response.data.data);
    //         const localToken = localStorage.getItem("accessToken");

    //         if (localToken !== response.data.data.user.accessToken) {
    //             navigate("/");
    //         }
    //     } catch (error) {
    //         // console.log("Error while verifying user ::", error);
    //         toast.error("Error while verifying user!");
    //         navigate("/");
    //     }
    // };

    // useEffect(() => {
    //     const checkAccessToken = async () => {
    //         await verifyUser();

    //         const accessToken = localStorage.getItem("accessToken");
    //         if (!accessToken || accessToken === "" || accessToken === null) {
    //             navigate("/");
    //         }
    //     };

    //     checkAccessToken();
    // }, [navigate]);

    // useEffect(()=>{
    //    (async ()=>{
    //     const theme = await useSystemTheme()
    //     // console.log("Theme ::" theme)
    //    })()
    // },[])

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />

            <ResizablePanelGroup
                direction="horizontal"
                className="max-w-full rounded-lg border h-[100vh]"
            >
                <ResizablePanel defaultSize={15} className="h-[100vh]">
                    {/* <div className="flex items-center justify-center p-6"> */}
                        {/* <span className="font-semibold"> */}
                            <Sidebar />
                        {/* </span> */}
                    {/* </div> */}
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={85}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={7}>
                            {/* <div className="flex items-center justify-between p-6"> */}
                                {/* <span className="font-semibold"> */}
                                    <Header />
                                {/* </span> */}
                            {/* </div> */}
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={93}>
                            {/* <div className="flex items-center justify-center p-6"> */}
                                {/* <span className="font-semibold"> */}
                                    <Outlet />
                                {/* </span> */}
                            {/* </div> */}
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>

            {/* <div className="app-container">
                <Header />
                <div className="main-content">
                    <Sidebar />
                    <div className="posts-container">
                        <Outlet />
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Layout;
