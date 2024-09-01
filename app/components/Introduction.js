import React from "react";
import introStyles from "../styles/IntroductionHome.module.css";
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
      <div className={introStyles.introcontainer}>
        <motion.div
          className={introStyles.logo}
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <img src="/mainlogo.png" alt="Rook bird on a Rook Chesspiece" />
        </motion.div>
        <motion.div
          className={introStyles.paragraph}
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <motion.p className={introStyles.heading1} variants={textVariant1}>
            Quiet in its corner on the board,
          </motion.p>
          <motion.p className={introStyles.heading2} variants={textVariant2}>
            the Rook emerges, adapts, conquers...
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className={introStyles.intro}
        initial="hidden"
        animate="visible"
        variants={introContainerVariants}
      >
        <div className={introStyles.introtext}>
          <p>
            Welcome to{" "}
            <span className={introStyles.boldspan}>M.Rook Solutions</span>
            . This isn&apos;t just a website; think of it as an interactive CV. A
            journey through my experiences and abilities. Get to know who I am
            while exploring my skills, projects, and more.{" "}
          </p>
          <br />
          <p>
            If you need help with a technical project, feel free to reach out at{" "}
            <span className={introStyles.email}>mrook1979@hotmail.com</span>.
          </p>
        </div>
        <div className={introStyles.officepic}>
          <img src="/computer.jpeg" alt="Office setup" />
        </div>
      </motion.div>
    </>
  );
};

export default Introduction;
