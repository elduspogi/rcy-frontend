import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/main/LandingPage"
import Login from "./pages/auth/Login"
import './app.css'
import Title from "./hooks/Title"
import { useContext } from "react"
import { ThemeContext } from "./hooks/Theme"
import OfficersPage from "./pages/main/OfficersPage"
import PrivacyPolicyPage from "./pages/main/PrivacyPolicyPage"
import RegisterPage from "./pages/main/RegisterPage"
import ScrollToTop from "./hooks/ScrollToTop"
import PartnerRegister from "./pages/main/PartnerRegister"
import DonorRegister from "./pages/main/DonorRegister"

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<><LandingPage /><Title /></>} />
        <Route path="/officers" element={<><OfficersPage /><Title /></>} />
        <Route path="/privacy-policy" element={<><PrivacyPolicyPage /><Title /></>} />

        {/* Registration */}
        <Route path="/register/member" element={<><RegisterPage /><Title /></>} />
        <Route path="/register/volunteer" element={<><RegisterPage /><Title /></>} />
        <Route path="/register/partner" element={<><PartnerRegister /><Title /></>} />
        <Route path="/register/donor" element={<><DonorRegister /><Title /></>} />
        
        {/* Auth */}
        <Route path="/login" element={<><Login /><Title /></>} />

        {/* 404 Page */}
        <Route path="/*" element={<><LandingPage /><Title /></>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
