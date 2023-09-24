
const Banner = () => {
    return (
        <div className="text-center pt-80 -mt-44 h-[690px] bg-blend-overlay bg-[#ffffffd2]  bg-hero-pattern bg-no-repeat bg-cover px-6 bg-top">
            <h1 className="text-4xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="my-10 mx-10 sm:mx-0">
                <input type="text" placeholder="Search here...." className="border border-zinc-300 pl-3 py-2 rounded-md w-full sm:w-2/4 lg:w-2/6"/>
                <button className=" px-5 py-[9px] rounded-r-md absolute -ml-[88px] text-base font-semibold bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;