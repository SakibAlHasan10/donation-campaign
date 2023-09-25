import { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../../RootPages/RootPages";

const Details = () => {
    const categories = useContext(myContext)
    const {id} = useParams()
    const findCategory = categories.find(category => console.log(typeof(category.id)) )
    console.log(typeof(+id))
    return (
        <div>
            {
                
            }
            /donation/details
        </div>
    );
};

export default Details;