import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
const Frontend = () => {
  return (
    <section className="skills_container">
      <ul className="skills_group_Frontend">
        <h3 className="skills_title">Frontend </h3>
        <li className="skills_name">
          <FaHtml5 /> HTML5
        </li>
        <li className="skills_name">
          <FaCss3 /> CSS
        </li>
        <li className="skills_name">
          <SiJavascript /> Java Script
        </li>
        <li className="skills_name">
          <FaFigma /> Figma
        </li>
        <li className="skills_name">
          <FaReact /> React
        </li>
      </ul>
    </section>
  );
};
export default Frontend;
