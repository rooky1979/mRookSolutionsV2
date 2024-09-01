import { useState } from "react";
import educationStyles from "../styles/Education.module.css";
import { motion } from "framer-motion";

import React from "react";

const Papers = ({ year, averageGrade, papers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={educationStyles.papercontainer}>
      <div onClick={toggleDropdown} className={educationStyles.paper}>
        <h3>
          Year {year}. Average Grade: {averageGrade}
          <span
            className={educationStyles.arrow}
            style={{ transform: isOpen ? "rotate(270deg)" : "rotate(0deg)" }}
          >
            ◀
          </span>
        </h3>
      </div>
      <motion.ul
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={educationStyles.paperList}
        style={{ overflow: "hidden" }}
      >
        {papers.map((paper) => (
          <li key={paper.id}>
            <span>{paper.paper}</span>
            <span>Level: {paper.level}</span>
            <span>Grade: {paper.grade}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Papers;
