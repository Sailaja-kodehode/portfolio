import React from "react";
import "./home.css";
// import About from "../about/About";
// import CV from"../../assets/CV";
const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Sailaja</h1>
      <h3 className="home_subtitle">A Creative Fronted Developer</h3>
      <p className="home_description">
        Jeg er en kreativ Frontend Developer, og jeg er veldig lidenskapelig og
        dedikert i arbeidet.
        {/* <About /> */}
        {/* I'm creative fronted Developer,and i'm very passionate and dedicated to
        work. */}
      </p>
      <div className="button-link">
        <button className="button">
          <a href="#contact" className="link">
            {" "}
            Hei!!{" "}
          </a>
        </button>
        <button className="button">
          {/* Min CV */}
          <a
            download="..\Assets\CV\Sailaja CV Feb_2023.pdf"
            href=""
            className="link"
          >
            Min CV{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Data;
