import { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../../RootPages/RootPages";

const Details = () => {
    const categories = useContext(myContext)
    const {id} = useParams()
    const findCategory = categories.find(category => category.id === (+id) )
    console.log(findCategory)
    const {picture, title, description, price,text_color} = findCategory
    return (
        <div className="max-w-screen-xl mx-auto px-8 my-12">
            <div className="relative">
                <img src={picture} alt="" className="w-full h-[700px] rounded-3xl"/>
                <div  className="flex w-full rounded-b-3xl absolute -mt-32 h-32 bg-[#00000047]">
                    <button style={{backgroundColor: text_color}} className={`m-10  px-5 py-2 text-xl font-semibold rounded-md text-white`}>Donate ${price}</button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-12 mb-6">{title}</h2>
            <p className="text-base font-normal ">{description}</p>
        </div>
    );
};

export default Details;