import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage} from "@/src/pages/Homepage/Homepage.jsx";
import Products from "@/src/pages/Products/Products.jsx";
import Login from "@/src/pages/Auth/Login.jsx";
import Register from "@/src/pages/Auth/Register.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
