import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";

const Slide = () => {
  const sliders = [
    { URL: "./images/001.jpg" },
    { URL: "./images/002.jpg" },
    { URL: "./images/003.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const moveSlider = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-2-[1520px] h-[500px] w-full m-auto py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center duration-300"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"></div>
        <HiChevronLeft onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"></div>
      <HiChevronRight onClick={nextSlider} />
    </div>
  );
};

export default Slide;
