import { getLocalStorageData } from "../../Utility/StorageData";

const Donation = () => {
    const geiItem = getLocalStorageData()
    return (
        <div className="max-w-screen-xl mx-auto px-8">
            donation : {geiItem.length}
        </div>
    );
};

export default Donation;