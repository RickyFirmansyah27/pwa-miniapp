import React, { useState } from "react";
import "bulma/css/bulma.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <p>This is a modal</p>
            <br></br>
            <button className="button is-danger" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleCloseModal}></button>
      </div>
    </>
  );
};

export default Modal;
