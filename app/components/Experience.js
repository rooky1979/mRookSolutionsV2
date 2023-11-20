import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/ExperienceHomepage.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    if (experienceRef.current) {
      gsap.to(experienceRef.current, {
        opacity: 1,
        x: 0,
        ease: "elastic.inOut",
        duration: 1.5,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 50%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [experienceRef]);

  return (
    <div
      ref={experienceRef}
      style={{ opacity: 0, transform: "translateX(-100%)" }}
      className={styles.experiencecontainer}
    >
      <div className={styles.image}>
        <img src="/falcon.jpeg" alt="Millennium Falcon" />
      </div>
      <div className={styles.quotecontainer}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.quote}>
          "It was scary thing to make the jump from 17 years in Analytical
          Chemistry/Validation to Software Development at 39; but it's the best
          thing I ever done going at it warp speed. I've learned that I have
          more transferable skills/assets than I realised and a lot to offer as
          a mature graduate whilst gaining new ones."
        </p>
        <div className={styles.link}>
          <Link href="/projects">Read about experience here...</Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
