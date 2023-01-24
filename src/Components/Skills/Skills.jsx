import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
const Skills = () => {
  return (
    <section className="skills_section" id="skills">
      <h2 className="section_title">Ferdigheter</h2>
      <div className="skills_container">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
export default Skills;
