import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar/Navbar";


const RootPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootPages;