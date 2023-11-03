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
        duration: 1.5,
      },
    },
  };
  const textVariant1 = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.0,
        delay: 1.5,
      },
    },
  };
  const textVariant2 = {
    hidden: {
      opacity: 0,
      x: +1000,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 3.5,
      },
    },
  };
  const textContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const introContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 4.5,
      },
    },
  };

  return (
    <>
      <div className={styles.introcontainer}>
        <motion.div
          className={styles.logo}
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <img src="/mainlogo.png" alt="Rook bird on a Rook Chesspiece" />
        </motion.div>
        <motion.div
          className={styles.paragraph}
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <motion.p className={styles.heading1} variants={textVariant1}>
            A Journey of a thousand miles
          </motion.p>
          <motion.p className={styles.heading2} variants={textVariant2}>
            begins with a single step...
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className={styles.intro}
        initial="hidden"
        animate="visible"
        variants={introContainerVariants}
      >
        <div className={styles.introtext}>
          <p>
            Welcome to <span className={styles.boldspan}>M.Rook Solutions</span>
            . This isn't just a website; it's an interactive journey through my
            experiences and abilities. Get to know who I am while exploring my
            skills, projects, and more.{" "}
          </p>
          <br />
          <p>
            If you need help with a technical project or seek advice on web
            development, feel free to reach out at{" "}
            <span className={styles.email}>mrook1979@hotmail.com</span>. Let's
            embark on this adventure together!
          </p>
        </div>
        <div className={styles.officepic}>
          <img src="/homepage.png" alt="Office setup" />
        </div>
      </motion.div>
    </>
  );
};

export default Introduction;
