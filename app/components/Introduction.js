import React from "react";
import styles from "../styles/IntroductionHome.module.css";

const Introduction = () => {

/*   const logoVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  }; */

  return (
    <div className={styles.introcontainer}>
      <div className={styles.logo}>
        <img src="/mainlogo.png" alt="Rook bird on a Rook Chesspiece"/>
      </div>
      <div className={styles.paragraph}>
        <p className={styles.intro1}>
          A Journey of a thousand miles
        </p>
        <p className={styles.intro2}>begins with a single step...</p>
      </div>
    </div>
  );
};

export default Introduction;
