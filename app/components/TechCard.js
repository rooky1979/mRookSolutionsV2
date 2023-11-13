import React, { useState, useEffect } from "react";
import styles from "../styles/TechCard.module.css";

const TechCard = ({ techName, logos }) => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    // Update the logo index every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      setCurrentLogoIndex(
        (prevIndex) =>
          // Ensure the next index is within the array bounds
          (prevIndex + 1) % logos.length
      );
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [logos]);

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <img
            src={logos[currentLogoIndex]}
            alt={techName}
            className={styles.logoImage}
          />
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          {/* Display a different logo on the back */}
          <img
            src={logos[(currentLogoIndex + 1) % logos.length]}
            alt={techName}
            className={styles.logoImage}
          />
        </div>
      </div>
    </div>
  );
};

export default TechCard;
