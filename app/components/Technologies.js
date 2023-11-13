// Technologies.js
import React, { useEffect, useState } from 'react';
import TechCard from './TechCard';
import styles from "../styles/TechnologiesHomepage.module.css"

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Technologies = ({ techList }) => {
  const [displayedTechs, setDisplayedTechs] = useState([]);

  useEffect(() => {
    const shuffledTechs = techList.map((tech) => ({
      name: tech.name,
      logos: shuffleArray(tech.logos),
    }));
    setDisplayedTechs(shuffledTechs.slice(0, 3)); // Display the first three shuffled techs
  }, [techList]);

  return (
    <div className={styles.techContainer}>
      {displayedTechs.map((tech) => (
        <TechCard key={tech.name} techName={tech.name} logos={tech.logos} />
      ))}
    </div>
  );
};

export default Technologies;
