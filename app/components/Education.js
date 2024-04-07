import React, { useEffect, useRef } from "react";
import Link from "next/link";
import educationhomeStyles from "../styles/EducationHomepage.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const educationRef = useRef(null);

    useEffect(() => {
      if (educationRef.current) {
        gsap.to(educationRef.current, {
          opacity: 1,
          x: 0,
          ease: "elastic.inOut",
          duration: 1.5,
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, [educationRef]);
  
    return (
      <div
        ref={educationRef}
        style={{ opacity: 0, transform: "translateX(100%)" }}
        className={educationhomeStyles.educationcontainer}
      >
        <div className={educationhomeStyles.quotecontainer}>
          <h2 className={educationhomeStyles.title}>Education</h2>
          <p className={educationhomeStyles.quote}>
            "I love learning and it will be a neverending quest. I believe the key is to remain humble and without ego. That keeps me open minded to new ideas and remain teachable. I try to surround myself with smarter people, I listen and soak it in. Success always leaves clues to follow."
          </p>
          <div className={educationhomeStyles.link}>
            <Link href="/education">Read about education here...</Link>
          </div>
        </div>
        <div className={educationhomeStyles.image}>
          <img src="/library.jpg" alt="Library" />
        </div>
      </div>
    );
}

export default Education
