import "./Toast.css";
import { useState } from "react";

export const Toast = () => {
  const [toastlist, setToastList] = useState([]);

  // Function to remove a specific toast
  const handleCloseToast = (id) => {
    setToastList((prevList) => prevList.filter((toast) => toast.id !== id));
  };

  // Function to add a toast message
  const handlemessage = (item, type) => {
    const id = new Date()
    const newToast = [...toastlist, { id, item, type }];
    console.log(newToast)
    setToastList(newToast);
  };

  return (
    <div className="toast-container">
      {/* Render toast messages */}
      {toastlist.map(({ id, item, type }) => (
        <div className={`toast-message ${type}`} key={id}>
          <div className="notification-message">
            <span>{item}</span>
            <button className="toast-cross" onClick={() => handleCloseToast(id)}>
              x
            </button>
          </div>
        </div>
      ))}

      {/* Toast buttons */}
      <div className="toast-button-container">
        <button
          className="suucess-button btn-toast"
          onClick={() => handlemessage("Success", "success")}
        >
          Success Toast
        </button>
        <button
          className="warning-button btn-toast"
          onClick={() => handlemessage("Warning", "warning")}
        >
          Warning Toast
        </button>
        <button
          className="info-button btn-toast"
          onClick={() => handlemessage("Info", "info")}
        >
          Info Toast
        </button>
        <button
          className="error-button btn-toast"
          onClick={() => handlemessage("Error", "error")}
        >
          Error Toast
        </button>
      </div>
    </div>
  );
};
