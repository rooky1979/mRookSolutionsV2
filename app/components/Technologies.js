import React from "react";
import Link from "next/link";
import TechCard from "./TechCard";
import { techList1 } from "@/techList";
import styles from "../styles/TechnologiesHomepage.module.css";

const Technologies = () => {
  const carousel1Interval = 1500;

  return (
    <div className={styles.technologies}>
      <h2 className={styles.techTitle}>
        Technologies
      </h2>
      <div className={styles.link}>
      <Link href="/technologies">Click here to see technologies proficiency...</Link>
      </div>
      <TechCard images={techList1} interval={carousel1Interval} />
    </div>
  );
};

export default Technologies;
