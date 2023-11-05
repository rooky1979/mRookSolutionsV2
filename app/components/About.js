import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import styles from "../styles/AboutHomepage.module.css"

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //scroll event listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    //component cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={StyleSheet.aboutsection}>
      <h2>About.</h2>
      <Timeline scrollY={scrollY} />
    </section>
  );
};

export default About;
