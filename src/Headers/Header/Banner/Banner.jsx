
const Banner = () => {
    return (
        <div className="text-center pt-80 -mt-40 h-[690px] bg-blend-overlay bg-[#ffffffd2]  bg-hero-pattern bg-no-repeat bg-cover bg-top">
            <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="my-10">
                <input type="text" placeholder="Search here...." className="border border-zinc-300 pl-3 py-2 rounded-md w-1/3"/>
                <button className=" px-5 py-[9px] rounded-r-md absolute -ml-[88px] text-base font-semibold bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;