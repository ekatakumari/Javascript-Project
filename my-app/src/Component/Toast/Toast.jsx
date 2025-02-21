import "./Toast.css";
import { useState } from "react";

export const Toast = () => {
  const [toastlist, setToastList] = useState([]);

  const handleCloseToast = (id) => {
    setToastList((prevList) => prevList.filter((toast) => toast.id !== id));
  };

  const handlemessage = (item, type) => {
    const id = new Date();
    const newToast = [...toastlist, { id, item, type }];
    setToastList(newToast);
    setTimeout(()=>{
      handleCloseToast(id)
    },5000)
  };

  return (
    <div className="toast-container">
      <div className={`toast-message `}>
        {toastlist.map(({ id, item, type }) => (
          <div className={`notification-message ${type}` } key={id}>
            <span>{item}</span>
            <button
              className="toast-cross"
              onClick={() => handleCloseToast(id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      {/* Toast buttons */}
      <div className="toast-button-container">
        <button
          className="success btn-toast"
          onClick={() => handlemessage("Success", "success")}
        >
          Success Toast
        </button>
        <button
          className="warning btn-toast"
          onClick={() => handlemessage("Warning", "warning")}
        >
          Warning Toast
        </button>
        <button
          className="info btn-toast"
          onClick={() => handlemessage("Info", "info")}
        >
          Info Toast
        </button>
        <button
          className="error btn-toast"
          onClick={() => handlemessage("Error", "error")}
        >
          Error Toast
        </button>
      </div>
    </div>
  );
};
