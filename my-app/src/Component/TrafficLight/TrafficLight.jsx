import "./TrafficLight.css"
import {useState,useEffect} from "react"
export const TrafficLight=()=>{
    const traficobj=[{
        signal:"red",
        signalcolor:"traffic-red",
        wait:3000

    },
    {
        signal:"green",
        signalcolor:"traffic-green",
        wait:3000

    },
    {
        signal:"yellow",
        signalcolor:"traffic-yellow",
        wait:3000

    }]
    const [activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
     const timer=setTimeout(()=>{
        setActiveIndex((prev)=>(prev+1)%traficobj.length)
     },traficobj[activeIndex].wait)
     return ()=> clearTimeout(timer)
    },[activeIndex])
    return <div className="trafficlight-container">
        <h1>Traffic Light</h1>
     <div className="traffic-light">
        {traficobj.map((item,indx)=>{
            return <div className={`trafic-circle  ${item.signalcolor} ${indx===activeIndex?"active":""}`} key={indx}></div>
        })}
     </div>
    </div>
}