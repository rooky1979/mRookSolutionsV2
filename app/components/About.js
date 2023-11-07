import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/AboutHomepage.module.css';
import Timeline from './Timeline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutTitleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (aboutTitleRef.current) {
      gsap.to(aboutTitleRef.current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: aboutTitleRef.current,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, [aboutTitleRef]);

  return (
    <section className={styles.aboutsection}>
      <h2
        ref={aboutTitleRef}
        className={styles.aboutTitle}
        style={{ opacity: 0 }}
      >
        About...
      </h2>
      <Timeline scrollY={scrollY}>
        {/* Your timeline elements */}
      </Timeline>
    </section>
  );
};

export default About;
