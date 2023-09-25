import { useContext, useState } from "react";
import { getLocalStorageData } from "../../Utility/StorageData";
import { myContext } from "../../RootPages/RootPages";
import GetLocalStore from "../../Components/Donation/GetLocalStore";

const Donation = () => {
    const geiItem = getLocalStorageData()
    const [display, setDisplay] = useState(geiItem.slice(0,4))
    const [open, setOpen] = useState(true)
    const handleDonation = ()=> {
        setDisplay(geiItem)
        setOpen(false)
    }
    const cards = useContext(myContext)
    const filterCategory = cards.filter(card => display.includes(card.id))
    console.log(display)
    return (
        <div className="max-w-screen-xl mx-auto px-8 mt-5 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    filterCategory.map((card, idx) => <GetLocalStore key={idx}
                    card={card}
                    ></GetLocalStore>)
                }
            </div>
            {
                ((display.length >= 4) && open) ? <div className="flex justify-center">
                        <button onClick={()=>handleDonation()} className=" mt-10 bg-green-800 text-white px-7 py-2 rounded-lg text-lg font-medium">See All</button>
                    </div> : ''
            }
        </div>
    );
};

export default Donation;