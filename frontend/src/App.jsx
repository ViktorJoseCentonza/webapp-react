import { MovieProvider } from "./contexts/MovieContext"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import SingleMovie from "./pages/SingleMovie"
import ServerErrorPage from "./pages/ServerErrorPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <>
      <AuthProvider>
        <MovieProvider>
          <BrowserRouter>
            <Routes>
              <Route Component={DefaultLayout}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/movie/:id" element={<SingleMovie />} />
                <Route path="*" element={<ServerErrorPage error={"The page you are looking for doesn't exist! 404"} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MovieProvider>
      </AuthProvider>
    </>
  )
}

export default App
