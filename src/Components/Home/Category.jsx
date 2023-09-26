
import AllCard from "./AllCard";
import PropTypes from 'prop-types'
const Category = ({search}) => {


    return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                search.map((category, i) => <AllCard 
                key={i}
                category={category}
                ></AllCard>)
            }
        </div>
    );
};
Category.propTypes ={
    search: PropTypes.array
}
export default Category;