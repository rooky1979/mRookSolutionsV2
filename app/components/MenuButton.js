import React from "react";
import buttonStyles from "../styles/Navbar.module.css";
import { motion } from "framer-motion";

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.button
      initial="hide"
      animate={isMenuOpen ? "show" : "hide"}
      onClick={toggleMenu}
      className={buttonStyles.button}
    >
      <motion.span
        variants={{
          hide: {
            rotate: 0,
          },
          show: {
            rotate: 45,
            y: 11,
          },
        }}
        className={buttonStyles.burgerbar}
      ></motion.span>
      <motion.span
        variants={{
          hide: {
            opacity: 1,
          },
          show: {
            opacity: 0,
          },
        }}
        className={buttonStyles.burgerbar}
      ></motion.span>
      <motion.span
        variants={{
          hide: {
            rotate: 0,
          },
          show: {
            rotate: -45,
            y: -5,
          },
        }}
        className={buttonStyles.burgerbar}
      ></motion.span>
    </motion.button>
  );
};

export default MenuButton;
