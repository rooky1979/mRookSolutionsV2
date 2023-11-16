import React, { useEffect, useRef } from "react";
import Link from "next/link";
import TechCard from "./TechCard";
import { techList1 } from "@/techList";
import styles from "../styles/TechnologiesHomepage.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const carousel1Interval = 2000;
  const techRef = useRef(null);

  useEffect(() => {
    if (techRef.current) {
      gsap.to(techRef.current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 40%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [techRef]);

  return (
    <div
      className={styles.technologies}
      ref={techRef}
      style={{ opacity: 0 }}
    >
      <div className={styles.quotecontainer}>
        <h2 className={styles.techTitle}>Technologies</h2>
        <p className={styles.quote}>
          "I believe it's important to have exposure to a wide range of technologies and frameworks; but double down on a select few. Fundamentals are key."
        </p>
        <div className={styles.link}>
          <Link href="/projects">Read about technologies here...</Link>
        </div>
      </div>
      <TechCard images={techList1} interval={carousel1Interval} />
    </div>
  );
};

export default Technologies;
