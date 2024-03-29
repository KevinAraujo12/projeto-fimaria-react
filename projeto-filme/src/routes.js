import { BrowserRouter, Routes, Route } from "react-router-dom";

import Filme from "./pages/Filme";
import Home from "./pages/Home";
import Header from "./components/Header";

function RouteApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={  <Home/> }></Route>
                <Route path="/filme:id" element={  <Filme/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;