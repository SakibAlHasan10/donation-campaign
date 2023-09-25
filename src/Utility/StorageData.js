const getLocalStorageData = () =>{
    const getData = localStorage.getItem('donation');
    if(getData){
        return JSON.parse(getData)
    }return []
} 

const setLocalStorageData = (id) =>{
    const getData = getLocalStorageData()
    const findId = getData.find(num => num === id);
    console.log(findId, typeof(id), getData)
    if(!findId){
        getData.push(id)
        localStorage.setItem('donation', JSON.stringify(getData))
    }
}

export {getLocalStorageData, setLocalStorageData}