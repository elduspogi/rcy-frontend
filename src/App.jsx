import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/main/LandingPage"
import Login from "./pages/auth/Login"
import './app.css'
import Title from "./hooks/Title"
import { useContext } from "react"
import { ThemeContext } from "./hooks/Theme"

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<><LandingPage /><Title /></>} />

        {/* Auth */}
        <Route path="/login" element={<><Login /><Title /></>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
