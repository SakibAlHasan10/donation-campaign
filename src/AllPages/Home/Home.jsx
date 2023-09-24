import { useLoaderData } from "react-router-dom";
import Banner from "../../Headers/Header/Banner/Banner";
import Category from "../../Components/Home/Category";

const Home = () => {
    const donationCategories = useLoaderData()
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