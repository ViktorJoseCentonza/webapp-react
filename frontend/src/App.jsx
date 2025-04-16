import { MovieProvider } from "./contexts/MovieContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import SingleMovie from "./pages/SingleMovie"



function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:id" element={<SingleMovie />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  )
}

export default App
