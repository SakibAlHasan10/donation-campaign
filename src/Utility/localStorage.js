const getLocalStorageData = () =>{
    const getData = localStorage.getItem('donation');
    // const parseGetData = JSON.parse(getData)
    if(getData){
        return JSON.parse(getData)
    }return []
} 

const setLocalStorageData = ({id}) =>{
    const getData = getLocalStorageData()
    getData.push(id)
    // const stringifyData = JSON.stringify(getData)
    localStorage.setItem('donation', JSON.stringify(getData))
}

export default {getLocalStorageData, setLocalStorageData}