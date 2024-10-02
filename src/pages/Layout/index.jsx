import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function index() {
    return (
       <div className="w-full bg-black"> 
         <Navbar/>
         <Outlet/>
       </div>
    )
}