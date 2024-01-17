import React, { useRef, useEffect } from "react";
import leftTimeStyles from "../styles/LeftTimelinePhotos.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftTimelinePhotos = ({openModel}) => {
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
    <div
      ref={photosRef}
      style={{ opacity: 0 }}
      className={leftTimeStyles.timelinePhotos}
    >
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("me.jpg")}
      >
        {/*left */}
        <img src="me.jpg" alt="Me" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("costa.jpg")}
      >
        {/*right */}
        <img src="costa.jpg" alt="Costa Rica" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("lab.jpg")}
      >
        {/*left */}
        <img src="lab.jpg" alt="Laboratory" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("indosurf.jpg")}
      >
        {/*right */}
        <img src="indosurf.jpg" alt="Lakey Peak Sumbawa" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("newzealand.jpg")}
      >
        {/*left */}
        <img src="newzealand.jpg" alt="New Zealand" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("douglas.jpg")}
      >
        {/*right */}
        <img src="douglas.jpg" alt="Douglas Pharmaceuticals" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("aut.png")}
      >
        {/*left */}
        <img src="aut.png" alt="AUT" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("graduation.jpeg")}
      >
        {/*right */}
        <img src="graduation.jpeg" alt="Graduation" />
      </div>
      <div
        className={leftTimeStyles.photoContainer}
        onClick={() => openModel("code.jpg")}
      >
        {/*left */}
        <img src="code.jpg" alt="Computer Code" />
      </div>
    </div>
  );
};

export default LeftTimelinePhotos;
