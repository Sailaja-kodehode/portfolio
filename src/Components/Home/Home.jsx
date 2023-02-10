import React from "react";
import "./home.css";
import "../../index.css";
import Data from "./Data";
import Image from "../Assets/Profile/img1.jpg";
function Home() {
  return (
    <div className="home_section" id="home">
      <img className="home_image" src={Image} alt="pic" />
      <div>
        <Data />
      </div>
    </div>
  );
}
export default Home;
