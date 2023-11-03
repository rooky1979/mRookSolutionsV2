import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";

const MobileMenu = ({ isOpen }) => {
  const variants = {
    open: { x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };
  console.log("isOpen MobileMenu:", isOpen);
  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      className={styles.mobilemenu}
    >
      <img
        className={styles.logo}
        src="/flippedlogo3.png"
        alt="rook bird on a rook chesspiece"
      />
      <Link className={styles.links} href="/about">
        About
      </Link>
      <Link className={styles.links} href="/projects">
        Projects
      </Link>
      <Link className={styles.links} href="/technologies">
        Technologies
      </Link>
      <Link className={styles.links} href="/experience">
        Experience
      </Link>
      <Link className={styles.links} href="/education">
        Education
      </Link>
    </motion.div>
  );
};

export default MobileMenu;
