import { createBrowserRouter } from "react-router-dom";
import RootPages from "../RootPages/RootPages";
import Home from "../AllPages/Home/Home";
import Details from "../AllPages/Details/Details";
import Donation from "../AllPages/Donation/Donation";

const allPath = createBrowserRouter([
    {
        path: '/',
        element: <RootPages></RootPages>,
        loader: ()=> fetch('/data.json'),
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <div>statistics</div>
            },
            {
                path: '/donation_details/:id',
                element: <Details></Details>
            }
        ]
    }
])

export default allPath;