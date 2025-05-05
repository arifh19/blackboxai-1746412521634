import React, { useState, useEffect } from 'react';

const images = [
  '/foto/header skk.jpg',
  '/foto/foto 1.jpg',
  '/foto/foto 2.jpg',
  '/foto/foto 3.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <div
          className={`slide fade ${index === currentIndex ? 'active' : ''}`}
          key={index}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        >
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slideshow;
