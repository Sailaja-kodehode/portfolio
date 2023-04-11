import { useState, useEffect } from "react";
import "./navBar.css";
import Theme from "./Theme";
// import LightDarkMode from "./LightDarkMode";
import { FaHome } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdOutlineBrightness7 } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import Image from "../Assets/Profile/logo2.png";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    window.innerWidth <= 600 && setShowNavbar(false);
    window.addEventListener("", () => {
      window.innerWidth <= 600 && setShowNavbar(false);
    });
    return () =>
      window.removeEventListener("", () => {
        window.innerWidth <= 600 && setShowNavbar(false);
      });
  }, []);
  return (
    <div className="nav">
      <div className="nav_container">
        <a href="index.html" className="nav_logo">
          <img className="nav_logo" src={Image} alt="pic" />
        </a>
        <Theme />

        {/* <LightDarkMode /> */}
        <div className="nav_menu">
          <ul className="nav_ul">
            {showNavbar && (
              <li className="nav_ul_li">
                <a href="#home" className="nav_link">
                  <FaHome /> Hjem
                </a>
              </li>
            )}
            {showNavbar && (
              <li className="nav_ul_li">
                <a href="#about" className="nav_link">
                  <BsPerson /> Om meg
                </a>
              </li>
            )}
            {showNavbar && (
              <li className="nav_ul_li">
                <a href="#skills" className="nav_link">
                  <MdOutlineBrightness7 />
                  Ferdigheter
                </a>
              </li>
            )}

            {showNavbar && (
              <li className="nav_ul_li">
                <a href="#projects" className="nav_link">
                  <BsBriefcaseFill />
                  Prosjekt
                </a>
              </li>
            )}
            {showNavbar && (
              <li className="nav_ul_li">
                <a href="#contact" className="nav_link">
                  <BsTelephoneInbound />
                  Kontakt
                </a>
              </li>
            )}
            <div className={"toggleButton"}>
              <button
                className="nav_ul_li--menuBackground"
                onClick={() => setShowNavbar((prevState) => !prevState)}
              >
                <FaHamburger />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
