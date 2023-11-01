import React from "react";
import styles from "../styles/IntroductionHome.module.css";
import { motion } from "framer-motion";

const Introduction = () => {

  const logoVariants = {
    hidden: {
      opacity: 0,
      x: -1000,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };
  
  const textVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.5, // Adjust the delay as needed
      },
    }),
  };
  

  const textContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 3.5,
      },
    },
  };

  return (
    <div className={styles.introcontainer}>
      <motion.div
        className={styles.logo}
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        <img src="/mainlogo.png" alt="Rook bird on a Rook Chesspiece" />
      </motion.div>
      <div className={styles.paragraph}>
  <motion.p
    className={styles.intro1}
    variants={textVariants}
    custom={0} // Index for the first text element
  >
    A Journey of a thousand miles
  </motion.p>
  <motion.p
    className={styles.intro2}
    variants={textVariants}
    custom={1} // Index for the second text element
  >
    begins with a single step...
  </motion.p>
</div>
    </div>
  );
  
};

export default Introduction;
