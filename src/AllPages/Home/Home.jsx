import Banner from "../../Headers/Header/Banner/Banner";
import Category from "../../Components/Home/Category";
import { useContext, useState } from "react";
import { myContext } from "../../RootPages/RootPages";

const Home = () => {
    const donationCategories = useContext(myContext)
    const [search, setSearch] = useState('')
    const handleSearchCategory = (e) =>{
        e.preventDefault()
        setSearch(e.target.name.value)
    }
    console.log(search)
    return (
        <div >
            <Banner handleSearchCategory={handleSearchCategory}></Banner>
            <div className="max-w-screen-xl mx-auto px-8 my-20">
                <Category donationCategories={donationCategories}
                ></Category>
            </div>
        </div>
    );
};

export default Home;