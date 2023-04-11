import React from "react";
import "./skills.css";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
const Backend = () => {
  return (
    <section className="skills_group">
      <ul className="skills_group_backend">
        <h3 className="skills_title">Backend</h3>
        <li className="skills_name_backend">
          <AiOutlineConsoleSql /> SQL
        </li>
        <li className="skills_name_backend">
          <FaNodeJs /> Node JS express
        </li>
      </ul>
    </section>
  );
};
export default Backend;
