import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AllCard = ({ category }) => {
  const {
    id,
    picture,
    title,
    category: item,
    card_bg,
    category_bg,
    text_color,
  } = category;
  return (
    <div style={{ backgroundColor: card_bg }} className="rounded-xl">
      <Link to={`/donation_details/${id}`}>
        <img src={picture} alt="" className="h-52 w-full rounded-t-xl" />
        <div className="px-4 pt-4 pb-5">
          <button
            style={{ color: text_color, backgroundColor: category_bg }}
            className={`capitalize text-sm font-medium py-1 px-4 rounded-md`}
          >
            {item}
          </button>
          <p
            style={{ color: text_color }}
            className=" mt-2 text-xl font-semibold"
          >
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};
AllCard.propTypes = {
  category: PropTypes.object,
};
export default AllCard;
