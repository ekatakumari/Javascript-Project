import "./AutoComplete.css"
import { useEffect, useRef, useState } from "react"
export const AutoComplete=()=>{
    let cache=useRef({})
    const[query,setQuery]=useState("")
    const [result,setResult]=useState([])
    const handleInput=(e)=>{
            setQuery(e.target.value)
    }
    useEffect(()=>{
      try{
        if(cache.current[query]){
            setResult(cache.current[query])
            return 
        }
        const fetchData= async()=>{
        const data=await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const jsonData=await data.json()
        setResult(jsonData.products)
        }
       let setCompleteId=setTimeout(fetchData,1000)
       return ()=>{
            clearInterval(setCompleteId)
       }
      }catch(err){
        console.log(err)
      }
    },[query])
    return <div className="autocomplete-container">
        <h1>Autocomplete Search</h1>
    <div>
        <input className="autocomplete-input" type="text" value={query} onChange={handleInput}/>
        {result.map((data)=>{
            return <li className="autocomplete-list">{data.title}</li>
        })}

    </div>
    </div>
}