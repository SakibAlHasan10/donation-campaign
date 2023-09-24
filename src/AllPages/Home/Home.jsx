import { useLoaderData } from "react-router-dom";
import Banner from "../../Headers/Header/Banner/Banner";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className={` `}>
            <Banner></Banner>
        </div>
    );
};

export default Home;