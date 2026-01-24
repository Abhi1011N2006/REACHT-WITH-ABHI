import {useEffect,useState} from "react";

function UseCurrencyInfo(currency){
    const [data,setdata] = useState({});
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/efd3940210dcf7616ac41b88/latest/${currency}`)
        .then((res)=>res.json())
        .then((data)=>{
            setdata(data.conversion_rates);
        })
    },[currency])
    console.log(data)
    return data;
}

export default UseCurrencyInfo;