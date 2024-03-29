import React, { useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
// import "./abc.css";
const ThemeToggle = () => {
  const icon_size = 30;
  const [icon, setIcon] = useState("FaRegSun");
  const changeTheme = (iconName) => {
    const item = localStorage.getItem("theme");
    let theme;
    if (item === "dark") {
      theme = "";
      localStorage.setItem("theme", "");
    } else {
      theme = "dark";
      localStorage.setItem("theme", "dark");
    }
    localStorage.setItem("theme", theme);
    document.body.className = localStorage.getItem("theme");
    setIcon(iconName);
  };
  const themeIsLight = icon === "FaRegMoon";
  const Icon = themeIsLight ? (
    <FaRegSun size={icon_size} onClick={() => changeTheme("FaRegSun")} />
  ) : (
    <FaRegMoon size={icon_size} onClick={() => changeTheme("FaRegMoon")} />
  );
  return <div className="icon">{Icon}</div>;
};

export default ThemeToggle;
