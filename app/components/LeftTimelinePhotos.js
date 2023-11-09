import React, {useRef, useEffect} from 'react'
import styles from "../styles/LeftTimelinePhotos.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftTimelinePhotos = () => {

    const photosRef = useRef(null);

  useEffect(() => {
    if (photosRef.current) {
      gsap.to(photosRef.current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: photosRef.current,
          start: "top 30%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [photosRef]);

  return (
    <div ref={photosRef} style={{ opacity: 0 }} className={styles.timelinePhotos}>
      <div className={styles.photoContainer}>
        {/*left */}
        <img src="me.jpg" alt="Me" />
      </div>
      <div className={styles.photoContainer}>
        {/*right */}
        <img src="costa.jpg" alt="Costa Rica" />
      </div>
      <div className={styles.photoContainer}>
        {/*left */}
        <img src="lab.jpg" alt="Laboratory" />
      </div>
      <div className={styles.photoContainer}>
        {/*right */}
        <img src="indosurf.jpg" alt="Lakey Peak Sumbawa" />
      </div>
      <div className={styles.photoContainer}>
        {/*left */}
        <img src="newzealand.jpg" alt="New Zealand" />
      </div>
      <div className={styles.photoContainer}>
        {/*right */}
        <img src="douglas.jpg" alt="Douglas Pharmaceuticals" />
      </div>
      <div className={styles.photoContainer}>
        {/*left */}
        <img src="aut.png" alt="AUT" />
      </div>
      <div className={styles.photoContainer}>
        {/*right */}
        <img src="graduation.jpeg" alt="Graduation" />
      </div>
      <div className={styles.photoContainer}>
        {/*left */}
        <img src="code.jpg" alt="Computer Code" />
      </div>
    </div>
  )
}

export default LeftTimelinePhotos
