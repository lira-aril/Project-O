import React, { useState } from "react";
import Logo from "../../assets/neue.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Header.css";

function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"><img src={Logo} /></Link>
        <div className="hiddenLinks">
          <Link to="/"> Главная </Link>
          <Link to="/menu"> Галерея </Link>
          <Link to="/about"> Обо мне </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Главная </Link>
        <Link to="/gallery"> Галерея </Link>
        <Link to="/about-me"> Обо мне </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;
