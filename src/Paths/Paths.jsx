import { createBrowserRouter } from "react-router-dom";
import RootPages from "../RootPages/RootPages";
import Home from "../AllPages/Home/Home";
import Details from "../AllPages/Details/Details";
import Donation from "../AllPages/Donation/Donation";
import Statistics from "../AllPages/Statistics/Statistics";

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
                element: <Statistics></Statistics>
            },
            {
                path: '/donation_details/:id',
                element: <Details></Details>
            }
        ]
    }
])

export default allPath;