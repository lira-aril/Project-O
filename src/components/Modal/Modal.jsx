import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, children, postRequest }) {
  return (
    <div className="modalBackground" onClick={() => { setOpenModal(false) }}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
          <div className="modal__content">
            {children}
          </div>
        <div className="modal__add_post">
          <button onClick={postRequest}>Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
