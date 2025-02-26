import { useState } from "react"
import { Tictactoe } from "./Tictactoe"

export const TicTactoenput=()=>{
    const [inputVal,setInputVal]=useState("")
    const handleChangeValue=(e)=>{
     setInputVal(e.target.value)
    }
    return <div>
        <input type="text" value={inputVal} onChange={handleChangeValue}/>
        <Tictactoe size={inputVal}/>
    </div>
}