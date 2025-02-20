import "./Toast.css";
import { useState } from "react"; 
export const Toast = () => {
    const[toastmessage,settoastmessage]=useState("")
    const[isToastDiv,setToastDiv]=useState(false)
    const handlemessage=(item)=>{
    setToastDiv(true)
      settoastmessage(item)
    }
  return (
    <div className="toast-container">
      {isToastDiv && <div className="toast-message">
        <div className="notification-message">
          {" "}
          <span> {toastmessage}</span>
          <button className="toast-cross">x</button>
        </div>
      </div>}
      <div className="toast-button-container">
        <button className="suucess-button btn-toast" onClick={()=>handlemessage("success")}>Success Toast</button>
        <button className="warning-button btn-toast" onClick={()=>handlemessage("Warning")}>Warning Toast</button>
        <button className="info-button btn-toast" onClick={()=>handlemessage("Info")}>Info Toast</button>
        <button className="error-button btn-toast" onClick={()=>handlemessage("Error")}>Error Toast</button>
      </div>
    </div>
  );
};
