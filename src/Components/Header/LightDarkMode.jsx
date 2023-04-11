// Libraries
import React, { useState, useEffect } from "react";
// import { BsSun } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

// Styles
import "./lightDarkMode.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle event that changes between light and dark mode
  const toggleTheme = () => {
    if (theme === "lightMode") {
      setTheme("darkMode");
    } else {
      setTheme("lightMode");
    }
  };

  // Local storage to save what color mode is selected
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={"toggleButton"}>
      {/* <button className="icons_light" onClick={toggleTheme}>
        <BsSun />
      </button> */}
      <button className="icons_dark" onClick={toggleTheme}>
        <BsMoonFill />
      </button>
    </div>
  );
};

export default LightDarkMode;
