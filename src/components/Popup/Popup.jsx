import React from "react";
import "./Popup.css";

export default function Popup({ active, setActive}) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>

        </div>
      
    </div>
  )
}
