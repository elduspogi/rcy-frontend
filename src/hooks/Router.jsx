import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/main/LandingPage";
import Title from "./Title";
import OfficersPage from "../pages/main/OfficersPage";
import PrivacyPolicyPage from "../pages/main/PrivacyPolicyPage";
import RegisterPage from "../pages/main/RegisterPage";
import PartnerRegister from "../pages/main/PartnerRegister";
import DonorRegister from "../pages/main/DonorRegister";
import RequestForDonorPage from "../pages/main/RequestForDonorPage";
import Login from "../pages/auth/Login";
import Error404 from "../pages/error/Error404";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <><LandingPage /><Title /></> },
      { path: "officers", element: <><OfficersPage /><Title /></> },
      { path: "/privacy-policy", element: <><PrivacyPolicyPage /><Title /></> },
      { path: "/register/member", element: <><RegisterPage /><Title /></> },
      { path: "/register/volunteer", element: <><RegisterPage /><Title /></> },
      { path: "/register/partner", element: <><PartnerRegister /><Title /></> },
      { path: "/register/donor", element: <><DonorRegister /><Title /></> },
      { path: "/request/donor", element: <><RequestForDonorPage /><Title /></> },  
      { path: "/*", element: <><Error404 /><Title /></> },
    ]
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <><Dashboard /><Title /></>},
    ]
  },
  { path: "/login", element: <><Login /><Title /></> },
])

export default router;