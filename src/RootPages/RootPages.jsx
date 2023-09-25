import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Headers/Navbar/Navbar";
import { createContext } from "react";
export const myContext = createContext()

const RootPages = () => {
    const donationCategories = useLoaderData()
    
    return (
        <div>
            <Navbar></Navbar>
            <myContext.Provider value={donationCategories}>
                <Outlet></Outlet>
            </myContext.Provider>
        </div>
    );
};

export default RootPages;