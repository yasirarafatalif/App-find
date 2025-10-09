import { useEffect, useState } from "react";
// import { axios } from './../../node_modules/axios/dist/esm/axios';
import axios from './../../node_modules/axios/lib/axios';


const useCardData = () => {
    const [data , setData]=useState([]);
    const [loadding , setLoadding]=useState(true)
     useEffect(()=>{
        axios('../myData.json')
        .then(data=>setData(data.data))
        // .finally((()=>setLoadding(false)))
        // .setTimeout(() => setLoadding(false), 3000);
         const timer = setTimeout(() => {
      setLoadding(false);
      return () => clearTimeout(timer);
    }, 2000); 
     },[])
//      useEffect(() => {
   
//   }, []);


    return { data, loadding}
};

export default useCardData;