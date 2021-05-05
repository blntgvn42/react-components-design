import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Modal.scoped.scss";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`modal ${isOpen ? "opened" : "closed"}`}>
      <div className="modal__body">
        {isOpen && (
          <div
            className="modal__body--close"
            onClick={() => setIsOpen(!isOpen)}
          >
            ×
          </div>
        )}
      </div>
      {!isOpen && (
        <div className="modal__toggle">
          <Link to="/modal" onClick={() => setIsOpen(!isOpen)}>
            Open Modal
          </Link>
        </div>
      )}
    </div>
  );
}

export default Modal;
