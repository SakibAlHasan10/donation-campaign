import PropTypes from 'prop-types'
const Banner = ({handleSearchCategory}) => {
    
    return (
        <div className="text-center pt-80 -mt-40 h-[700px] bg-blend-overlay bg-[#ffffffd2]  bg-hero-pattern bg-no-repeat bg-cover px-8 bg-top">
            <h1 className="text-4xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
            <form onSubmit={handleSearchCategory} className="my-10 mx-10 sm:mx-0">
                <input type="text" name="name" placeholder="Search here...." className="border border-zinc-300 pl-3 py-2 rounded-md w-full sm:w-2/4 lg:w-2/6"/>
                <button  className=" px-5 py-[9px] rounded-r-md absolute -ml-[88px] text-base font-semibold bg-[#FF444A] text-white">Search</button>
            </form>
        </div>
    );
};
Banner.propTypes ={
    handleSearchCategory: PropTypes.func
}
export default Banner;