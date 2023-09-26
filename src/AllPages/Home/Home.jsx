import Banner from "../../Headers/Header/Banner/Banner";
import Category from "../../Components/Home/Category";
import { useContext, useState } from "react";
import { myContext } from "../../RootPages/RootPages";

const Home = () => {
    const donationCategories = useContext(myContext)
    const [search, setSearch] = useState(donationCategories)
    const handleSearchCategory = (e) =>{
        e.preventDefault()
        const searchText = (e.target.name.value)
        const searchFilter = donationCategories.filter(card => card.category.toLowerCase() === searchText.toLowerCase());
        setSearch(searchFilter);
        e.target.name.value = '';
    }
    return (
        <div >
            <Banner handleSearchCategory={handleSearchCategory}></Banner>
            <div className="max-w-screen-xl mx-auto px-8 my-20">
                <Category
                search={search}
                ></Category>
            </div>
        </div>
    );
};

export default Home;