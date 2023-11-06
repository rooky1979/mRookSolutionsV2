import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AboutHomepage.module.css';
import Timeline from './Timeline';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animationControls = {
    initial: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.aboutsection}>
      <motion.h2
      className={styles.aboutTitle}
        initial={animationControls.initial}
        animate={scrollY > 100 ? 'visible' : 'initial'}
        variants={animationControls}
        transition={{ type: 'spring', damping: 25 }}
      >
        About...
      </motion.h2>
      <Timeline scrollY={scrollY}>
        {/* Your timeline elements */}
      </Timeline>
    </section>
  );
};

export default About;
