import React, { useState, useEffect } from "react";

const images = [
  "/assets/images/people3.png",
  "/assets/images/people4.png",
  "/assets/images/people2.png",
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel relative max-w-xl space-x-4 overflow-hidden bg-primary p-4">
      {" "}
      {/* Increased max-width here */}
      <div
        className="carousel-track flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item w-full">
            <img src={image} className="h-200 w-200 object-cover" alt="" />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
