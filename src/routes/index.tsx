// Import necessary modules
import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SingnupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/Homepage";
import { DefaultLayout } from "../layouts/DefaultLayout";
import FAQPage from "../pages/Faqs";
import IssuePage from "../pages/IssuePage";
import ContactUs from "../pages/Contactus";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Pricing from "../pages/Pricing";
import Checkout from "../pages/Checkout";
import Chatpage from "../pages/Chatpage";

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
      },
      {
        path:'contact',
        element: <ContactUs/>
      },
      {
        path:'privacy',
        element: <PrivacyPolicy/>
      },
      {
        path:'pricing',
        element: <Pricing/>
      },
      {
        path:'checkout',
        element: <Checkout/>
      },
      {
        path:'chat',
        element: <Chatpage/>
      }
    ]
  }
]);
