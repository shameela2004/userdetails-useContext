
import DisplayData from './DisplayData'
import { useEffect, useState,createContext } from "react";
export const FetchDataContext=createContext();

function FetchData() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setDatas(data.users)) 
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    
      <>
        <FetchDataContext.Provider value={{datas,setDatas}}>
           <DisplayData/>
       </FetchDataContext.Provider>
      </>
  );
}

export default FetchData;
