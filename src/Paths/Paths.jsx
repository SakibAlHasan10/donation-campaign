import { createBrowserRouter } from "react-router-dom";
import RootPages from "../RootPages/RootPages";
import Home from "../AllPages/Home/Home";

const allPath = createBrowserRouter([
    {
        path: '/',
        element: <RootPages></RootPages>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])

export default allPath;