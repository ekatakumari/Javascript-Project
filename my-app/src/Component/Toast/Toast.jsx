import "./Toast.css";
export const Toast = () => {
    const[toastmessage,settoastmessage]=useState("")
    const handlemessage=(item)=>{
  console.log("item",item)
    }
  return (
    <div className="toast-container">
      <div className="toast-message">
        <div className="notification-message">
          {" "}
          <span> hello</span>
          <button className="toast-cross">x</button>
        </div>
      </div>
      <div className="toast-button-container">
        <button className="suucess-button btn-toast" onClick={handlemessage("success")}>Success Toast</button>
        <button className="warning-button btn-toast">Warning Toast</button>
        <button className="info-button btn-toast">Info Toast</button>
        <button className="error-button btn-toast">Error Toast</button>
      </div>
    </div>
  );
};
