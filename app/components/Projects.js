import React, { useEffect, useRef } from "react";
import ProjectCarousel from "./ProjectCarousel";
import styles from "../styles/ProjectsHomepage.module.css";
import Link from "next/link";
import { projects } from "@/techList";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      gsap.to(projectsRef.current, {
        opacity: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [projectsRef]);

  return (
    <div className={styles.projectcontainer}
    ref={projectsRef}
        style={{ opacity: 0 }}>
      <ProjectCarousel images={projects} />
      <div className={styles.quotecontainer}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.quote}>
          "With technology and frameworks constantly changing, it's important
          for me to stay active, contemporary and not stagnate. Keep the code
          rust off and not get left behind."
        </p>
        <div className={styles.link}>
          <Link href="/projects">Read about projects here...</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
