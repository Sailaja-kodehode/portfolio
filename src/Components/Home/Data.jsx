import React from "react";
import "./home.css";
// import About from "../about/About";
// import CV from"../../assets/CV";
import CV from "../Assets/CV/Sailaja_CV_03.2023.docx";
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
            Hei!!
          </a>
        </button>
        <button
          className="button"
          // onClick={
          //   () =>
          //     alert(
          //       "if you need CV,Please send me message to sailaja.kodehode@gmail.com"
          //     )
          //   // download="..\Assets\CV\Sailaja CV Feb_2023.pdf"
          // }
        >
          <a className="link" download={CV} href={CV} target="_blanc">
            Min CV{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Data;
