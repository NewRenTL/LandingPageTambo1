import React, { useState } from "react";
import CardItems from "./CardItems";

import LayX from "@assets/img/LAYX.png";

const CarouselAntojos = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = data.map((data, index) => (
    <CardItems
      key={index}
      price={data.price}
      name={data.name}
      img={data.srcImage}
      nextSlide={() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }}
      prevSlide={() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      }}
    />
  ));

  return (
    <>
      <div className="carousel flex transition-transform duration-300 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide w-full flex-shrink-0 ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselAntojos;
