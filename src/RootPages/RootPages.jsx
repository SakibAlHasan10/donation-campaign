import { Outlet } from "react-router-dom";


const RootPages = () => {
    return (
        <div>
            <h2>root page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default RootPages;