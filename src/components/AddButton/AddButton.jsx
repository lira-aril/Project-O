import React, { useState } from "react";
import "./AddButton.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function AddButton() {

    const [showText, setShowText] = useState(false)
    const handleMouseOver = () => {
        setShowText(true)
    }
    const handleMouseLeave = e => {
        setShowText(false)
      }
  return (
    <div>
       <button className="add__post__btn" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}><AddCircleOutlineIcon fontSize="large"/></button>
       {showText && <span className="hover__message" style={{ padding:  "20px", textAlign: "center", fontSize: "17px"}}>Добавить</span>}
    </div>
  )
}

export default AddButton
