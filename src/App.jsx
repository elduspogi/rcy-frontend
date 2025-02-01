import { RouterProvider } from "react-router-dom"
import './app.css'
import { useContext } from "react"
import { ThemeContext } from "./hooks/Theme"
import router from "./hooks/Router"
import { ContextProvider } from "./contexts/ContextProvider"

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  )
}

export default App;
