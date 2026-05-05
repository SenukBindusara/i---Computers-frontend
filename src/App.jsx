import { Routes } from "react-router"
import ProductCart from "./components/productCart"
import AdminPage from "./page/admin"
import HomePage from "./page/home"
import LoginPage from "./page/login"
import { Route } from "react-router"

function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin/*" element ={<AdminPage/>}/>
        <Route path="/login" element = {<LoginPage/>}/>
      </Routes>

    </div>
  )
}

export default App
