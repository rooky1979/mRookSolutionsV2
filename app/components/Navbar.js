import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ isHomepage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {isHomepage ? (
        <div className={styles.navcontainer}>
          <div className={styles.logosize}>
            <img
              className={styles.logosize}
              src="/mainlogo.png"
              alt="Rook bird on a Rook Chesspiece"
            />
          </div>
          {isMenuOpen ? (
            <div className={styles.menu}>
              <button onClick={toggleMenu} className={styles.menuButton}>
                Close
              </button>
              <ul className={styles.mobileMenu}>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/technologies">Technologies</Link>
                </li>
                <li>
                  <Link href="/experience">Experience</Link>
                </li>
                <li>
                  <Link href="/education">Education</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className={styles.tabs}>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/technologies">Technologies</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/education">Education</Link>
              <button onClick={toggleMenu} className={styles.menuButton}>
                Menu
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.navcontainer}>
          <div className={styles.logosize}>
          </div>
          <div className={styles.tabs}>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/technologies">Technologies</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/education">Education</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
