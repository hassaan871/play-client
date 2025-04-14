import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/components/LoginPage";
import SignupPage from "../pages/components/SignupPage";
import HomePage from "../pages/components/HomePage";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
        // loader: async () => {
        //     return {message: "Welcome to the Login Page"};
        // },
        errorElement: <div>Error loading Login Page</div>
    },
    {
        path: "/signup",
        element: <SignupPage />,
        // action: async ({request}) => {
        //     const fromData = await request.formData();
        //     return { success: true, message:"Signed up successfully!"};
        // },
        errorElement: <div>Error loading Signup Page</div>
    },
        {
            path: "/home",
            element: <HomePage />,
            // loader: async () => {
            //     const data = await fetch("/api/home-data");
            //     return data.json();
            // },
            errorElement: <div> Error loading Home Page </div>
        }
]);

export default router;