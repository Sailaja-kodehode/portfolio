import React from "react";
import "./home.css";
// import CV from"../../assets/CV";
const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Sailaja</h1>
      <h3 className="home_subtitle">A Creative Fronted Developer</h3>
      <p className="home_description">
        Jeg er en kreativ Frontend Developer, og jeg er veldig lidenskapelig og
        dedikert til arbeid.
        {/* I'm creative fronted Developer,and i'm very passionate and dedicated to
        work. */}
      </p>
      <button>
        <a href="#contact" className="button">
          {" "}
          Hei!!
        </a>
      </button>

      {/* <a download="" href={CV} className="button button--flex">
            {" "}
            Download CV
          </a> */}
      <button className="button" a href="/">
        Min Cv
      </button>
    </div>
  );
};

export default Data;
