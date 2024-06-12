import React, { useState, useEffect } from 'react';
import cardStyles from '../styles/TechCard.module.css';

const Carousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFlipped(false);
      }, 250); // Adjust this timeout to half of the flip duration
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval, images.length]);

  const inlineStyle = {
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
    
  };

  return (
    <div className={cardStyles.carouselContainer}>
      <div className={cardStyles.carousel} style={inlineStyle}>
        <img
          src={images[currentIndex]}
          alt={`carousel-item-${currentIndex}`}
          className={cardStyles.image}
        />
      </div>
    </div>
  );
};

export default Carousel;
