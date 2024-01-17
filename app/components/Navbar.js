import React, { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import MenuButton from "./MenuButton";

const Navbar = ({ isHomepage }) => {
  const navVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 6,
        duration: 2,
      },
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClass = isHomepage ? "navbarhome" : "navbarother";

  return (
    <nav className={`${navStyles.navbar} ${navbarClass}`}>
      {isHomepage ? (
        <div className={navStyles.navcontainer}>
          <div className={navStyles.logosize}>
            <Link href="/">
            <img
              className={navStyles.logosize}
              src="/mainlogo.png"
              alt="Rook bird on a Rook Chesspiece"
            />
            </Link>
          </div>
          <div className={navStyles.tabs}>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/technologies">Technologies</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/education">Education</Link>
          </div>
          <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className={navStyles.navcontainer}
        >
          <div style={{ height: "30px" }}></div>
          <div className={navStyles.tabs}>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/technologies">Technologies</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/education">Education</Link>
          </div>
          <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </motion.div>
      )}
      {/* The mobile menu */}
      {isMenuOpen ? (
        <MobileMenu isOpen={isMenuOpen} />
      ) : (
        <MobileMenu isOpen={isMenuOpen} />
      )}
    </nav>
  );
};
export default Navbar;
