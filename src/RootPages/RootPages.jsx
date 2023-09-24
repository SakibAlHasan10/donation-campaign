import { Outlet } from "react-router-dom";
import Header from "../Headers/Header/Header";
import Navbar from "../Headers/Navbar/Navbar";


const RootPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Header></Header> */}
            <Outlet></Outlet>
        </div>
    );
};

export default RootPages;