import React from "react";
import "./skills.css";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
const Backend = () => {
  return (
    <section className="skills_container">
      <ul className="skills_group">
        <h3 className="skills_title">Backend</h3>
        <li className="skills_name">
          <AiOutlineConsoleSql /> SQL
        </li>
        <li className="skills_name">
          <FaNodeJs /> Node JS express
        </li>
      </ul>
    </section>
  );
};
export default Backend;
