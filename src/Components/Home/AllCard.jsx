import PropTypes from 'prop-types'
const AllCard = ({category}) => {
    const {picture,title,category:item,card_bg,category_bg,text_color} = category
    const cardBg = parseInt(card_bg)
    console.log(category, cardBg, text_color)
    return (
        <div style={{backgroundColor: card_bg}} className='rounded-xl'>
            <img src={picture} alt="" className='h-52 w-full rounded-t-xl'/>
            <div className='px-5 pt-4 pb-5'>
                <h2>{item}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
};
AllCard.propTypes ={
    category: PropTypes.object
}
export default AllCard;