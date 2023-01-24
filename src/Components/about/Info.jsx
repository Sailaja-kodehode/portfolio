import React from "react";
import "./about.css";
const Info = () => {
  return (
    <div className="about_info">
      <div className="about_box">
        <h3 className="about_title">Utdanning</h3>
        <span className="about_subtitle">
          {" "}
          Mastergrad I Administrasjon (M.B.A),(Hr,Marketing), Bachelorgrad i
          Computer applikasjoner (B.C.A) (Dataapplikasjoner)
        </span>
      </div>
      <div className="about_box">
        <h3 className="about_title">Erfaring</h3>
        <span className="about_subtitle">
          {" "}
          1.5 års erfaring som admin trainee.
          {/* 1.5year of experience as admin trainee */}
        </span>
      </div>
    </div>
  );
};

export default Info;
