import { Outlet } from "react-router-dom";
import Header from "../Headers/Header/Header";


const RootPages = () => {
    return (
        <div>
            <Header></Header>
            <h2>root page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default RootPages;