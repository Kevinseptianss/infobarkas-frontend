/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/ImageSlideshow.css"; // Import CSS for styling

const ImageSlideshow = ({ images }) => {
  // Removed interval prop
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container-wrapper">
      <div className="slideshow-container">
        <div className="slideshow">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-image"
          />
        </div>
        <button className="prev card-button" onClick={handlePrev}>
          ❮
        </button>
        <button className="next card-button" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;
