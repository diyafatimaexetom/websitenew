import React, { useState, useEffect } from 'react';
//import 'C:/Projects/website_3/src/scss/TextSlider.scss';
import '../../../scss/TextSlider.scss'

const slides = [
    <div>
      <h2 className='sliderhead'>"Lorem ipsum dolor sit amet"</h2>
      <p className='slidertext'>- lorem</p>
    </div>,
    <div>
      <h2 className='sliderhead'>"Lorem ipsum dolor sit amet"</h2>
      <p className='slidertext'>- lorem 2</p>
    </div>,
    <div>
      <h2 className='sliderhead'>"Lorem ipsum dolor sit amet"</h2>
      <p className='slidertext'>- lorem 3</p>
    </div>
  ];

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
