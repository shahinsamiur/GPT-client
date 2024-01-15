import Header from "./components/header/header"
import HomePage from "./pages/home/homePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fixed w-[100%] h-auto z-50">
          <Header />
        </div>



        <Routes>
          <Route path="/" element={<HomePage />} />


        </Routes>

      </BrowserRouter>

    </>
  )
}