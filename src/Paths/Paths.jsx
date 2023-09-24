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
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/donation',
                element: <div>donation</div>
            },
            {
                path: '/statistics',
                element: <div>statistics</div>
            }
        ]
    }
])

export default allPath;