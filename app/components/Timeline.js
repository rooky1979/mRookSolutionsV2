import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/Timeline.module.css";
import TimelineElement from "./TimelineElement";
import LeftTimelinePhotos from "./LeftTimelinePhotos";
import RightTimelinePhotos from "./RightTimelinePhotos";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ scrollY }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.to(timelineRef.current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 30%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [timelineRef]);

  return (
    <div className={styles.centerTimeline}>
      <LeftTimelinePhotos />
      <div ref={timelineRef} style={{ opacity: 0 }} className={styles.timeline}>
        <div className={styles.outer}>
          <TimelineElement
            title="Born: June 1979"
            description="7lb 6oz. Reading, England"
          />
          <TimelineElement
            title="1999/2001"
            description="Travel: Costa Rica, Indonesia, Australia"
          />
          <TimelineElement
            title="2001"
            description="Began a 17 year career as an Analytical Chemist for a range of pharmaceutical companies"
          />
          <TimelineElement
            title="2001-2005"
            description="Travel while working: Indonesia, Costa Rica, Europe"
          />
          <TimelineElement
            title="2005"
            description="Relocate to New Zealand via Indonesia"
          />
          <TimelineElement
            title="2012"
            description="Moved to being a Validation Officer in pharmaceuticals"
          />
          <TimelineElement
            title="2018"
            description="Enrolled to AUT. BSc Computer and Information Sciences. Major: Software Development"
          />
          <TimelineElement
            title="2021"
            description="Graduated from AUT with a GPA: 7.2 (A-)"
          />
          <TimelineElement
            title="2021"
            description="Begun new career as Software Developer/Consultant"
          />
        </div>
      </div>
      <RightTimelinePhotos />
    </div>
  );
};

export default Timeline;
