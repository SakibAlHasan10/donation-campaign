import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const GetLocalStore = ({card}) => {
    
    console.log(card)
    const {picture,category, id, title, price, category_bg, text_color, card_bg} = card;
    return (
        <div style={{backgroundColor: card_bg}} className="md:flex rounded-xl gap-5 ">
                <img src={picture} alt="" className="w-56 h-52 rounded-l-xl"/>
            <div className="my-5">
                <p style={{backgroundColor: category_bg, color: text_color}} className="text-base rounded-md font-normal capitalize px-4 py-1 ">{category}</p>
                <h2 className='text-2xl font-semibold my-2'>{title}</h2>
                <p style={{color: text_color}} className='mb-5 text-base font-semibold my-2'>${price}.00</p>
                <Link to={`/donation_details/${id}`}>
                    <button style={{backgroundColor: text_color}} className=' text-white px-5 rounded-lg py-2'>View Details</button>
                </Link>
            </div>
        </div>
    );
};
GetLocalStore.propTypes={
    card: PropTypes.object
}
export default GetLocalStore;