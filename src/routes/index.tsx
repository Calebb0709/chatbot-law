// Import necessary modules
import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SingnupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/Homepage";
import { DefaultLayout } from "../layouts/DefaultLayout";
import FAQPage from "../pages/Faqs";
import IssuePage from "../pages/IssuePage";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Outlet />,
    children: [
      {
        path: "login", 
        element: <LoginPage />,
      },
      {
        path: "signup", 
        element: <SignupPage />,
      },
      {
        path: "forgot-password", 
        element: <ForgotPasswordPage/>,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout/ >,
    children: [
      {
        path:"",
        element: <HomePage/>
      },
      {
        path:"home",
        element: <HomePage/>
      },
      {
        path:"faqs",
        element: <FAQPage/>
      },
      {
        path:'issue',
        element: <IssuePage/>
      }
    ]

  }
]);
