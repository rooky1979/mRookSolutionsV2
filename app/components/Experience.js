import React, { useEffect, useRef } from "react";
import Link from "next/link";
import experiencehomeStyles from "../styles/ExperienceHomepage.module.css";
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
      className={experiencehomeStyles.experiencecontainer}
    >
      <div className={experiencehomeStyles.image}>
        <img src="/falcon.jpeg" alt="Millennium Falcon" />
      </div>
      <div className={experiencehomeStyles.quotecontainer}>
        <h2 className={experiencehomeStyles.title}>Experience</h2>
        <p className={experiencehomeStyles.quote}>
          &quot;It was a scary thing to make the jump from 17 years in
          Analytical Chemistry/Validation to Software Development at 39; but
          it&apos;s the best thing I&apos;ve ever done going at it warp speed.
          I&apos;ve learned that I have more transferable skills/assets than I
          realised and a lot to offer as a mature graduate whilst gaining new
          ones.&quot;
        </p>
        <div className={experiencehomeStyles.link}>
          <Link href="/experience">Read about experience here...</Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
