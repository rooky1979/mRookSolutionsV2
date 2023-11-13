import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/ProjectCarousel.module.css";
import RecursiveTimeout from "./recursiveTimeout";
import Link from "next/link";

const AUTOPLAY_INTERVAL = 4000;

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, delay: 2.5 } }, // Adjust the duration as needed
};

const ProjectCarousel = ({ text, images }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage("");
    setLightboxOpen(false);
  };

  const autoplay = useCallback(() => {
    if (!embla) return;

    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = RecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    play();
  }, [play]);

  const scrollPrev = () => {
    if (embla) {
      embla.scrollPrev();
      stop();
    }
  };

  const scrollNext = () => {
    if (embla) {
      embla.scrollNext();
      stop();
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      className={styles.mainpage}
    >
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.bodycontainer}>
        <div className={styles.carousel}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {images.map((image) => (
                <motion.div
                  key={image.id}
                  className={styles.slide}
                  onClick={() => openLightbox(image)}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariant}
                >
                  <div className={styles.slideContent}>
                    <motion.img
                      className={styles.image}
                      src={image}
                      initial="hidden"
                      animate="visible"
                      variants={fadeInVariant}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.dotcontainer}>
              <button className={styles.arrowLeft} onClick={scrollPrev}>
                &lt;
              </button>
              <button className={styles.arrowRight} onClick={scrollNext}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={styles.closeButton} onClick={closeLightbox}>
              &times;
            </button>
            <motion.img
              className={styles.lightboxImage}
              src={selectedImage}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.link}>
      <Link href="/projects">Click here to read about projects...</Link>
      </div>
    </motion.div>
  );
};

export default ProjectCarousel;
