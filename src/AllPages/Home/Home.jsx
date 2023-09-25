import Banner from "../../Headers/Header/Banner/Banner";
import Category from "../../Components/Home/Category";
import { useContext } from "react";
import { myContext } from "../../RootPages/RootPages";

const Home = () => {
    const donationCategories = useContext(myContext)
    return (
        <div className={` `}>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto px-8 my-20">
                <Category donationCategories={donationCategories}
                ></Category>
            </div>
        </div>
    );
};

export default Home;