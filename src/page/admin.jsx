import { Link, Route, Routes } from "react-router";


export default function AdminPage (){
    return(
        <div className="w-full h-full bg-blue-600 flex ">
            <div className="w-75 h-full bg-red-900 flex flex-col">
                <Link to={"/admin/"}>Orders</Link>
                <Link to={"/admin/products"}>products</Link>
                <Link to={"/admin/user"}>user</Link>
            </div>

            <div className="w-[calc(100%-300px)] h-full bg-yellow-600 ">
                <Routes>
                    <Route path="/" element={<h1>orders page</h1>}/>
                    <Route path="/products" element={<h1>product page</h1>}/>
                    <Route path="/user" element ={<h1>user page</h1>}/>
                </Routes>
                
            </div>
        </div>
    )
}