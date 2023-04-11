import React from "react";
import "./header.css";
import { FaHome } from "react-icons/fa";
// import { FaRegSmile } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdOutlineBrightness7 } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import Image from "../Assets/Profile/logo2.png";
const Header = () => {
  return (
    // <div className="nav">
    <div className="nav_container">
      <a href="index.html" className="nav_logo">
        {/* <FaRegSmile /> */}
        <img className="nav_logo" src={Image} alt="pic" />
      </a>
      <div className="nav_menu">
        <ul className="nav_list">
          <a href="#home" className="nav_link">
            <FaHome /> Hjem
          </a>
          <a href="#about" className="nav_link">
            <BsPerson /> Om meg
          </a>

          <a href="#skills" className="nav_link">
            <MdOutlineBrightness7 />
            Ferdigheter
          </a>
          <a href="#projects" className="nav_link">
            <BsBriefcaseFill />
            Prosjekt
          </a>

          <a href="#contact" className="nav_link">
            <BsTelephoneInbound />
            Kontakt
          </a>
        </ul>
      </div>
    </div>
    // </div>
  );
};
export default Header;
