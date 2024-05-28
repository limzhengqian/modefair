"use client";
import React, { useState, useRef, TouchEvent, useEffect } from "react";

interface Slide {
  content: string;
  title: string;
}

interface SpecStatus {
  specChoice: boolean;
}

const TouchSlider: React.FC<SpecStatus> = ({ specChoice }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideX, setSlideX] = useState(0);
  
    const mac14Items: Slide[] = [
      { content: "/14_laptop.png", title: "14-inch MacBook Pro" },
      { content: "/14_cable.png", title: "USB-C to MagSafe 3 Cable (2m)" },
      { content: "/14_adapter.png", title: "USB-C Power Adapter" },
    ];

    const mac16Items: Slide[] = [
      { content: "/16_laptop.png", title: "16-inch MacBook Pro" },
      { content: "/16_cable.png", title: "USB-C to MagSafe 3 Cable (2m)" },
      { content: "/14_adapter.png", title: "140W USB-C Power Adapter" },
    ];
  
    useEffect(() => {
      const handleResize = () => {
        // Logic to handle resizing, if needed
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartX(e.touches[0].clientX);
      setIsSliding(true);
    };
  
    const handleTouchMove = (e: TouchEvent) => {
      if (isSliding) {
        setTouchEndX(e.touches[0].clientX);
        setSlideX(touchEndX - touchStartX);
      }
    };
  
    const handleTouchEnd = () => {
      if (slideX > 50) {
        prevSlide();
      } else if (slideX < -50) {
        nextSlide();
      }
      setIsSliding(false);
      setSlideX(0);
    };
  
    const nextSlide = () => {
      if (currentIndex < mac14Items.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };

  return (
    <div
      className="relative max-w-lg mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isSliding ? "grabbing" : "grab" }}
    >
      <div
        className={`flex transition-transform duration-150`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${slideX}px))`,
        }}
      >
        {specChoice && mac14Items.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full"
            style={{ touchAction: "pan-y" }}
          >
            <div className="rounded-lg ">
              <img
                className="bg-customStickyGrey m-auto w-[390px] h-[390px]"
                src={slide.content}
              />
            </div>
            <p className="font-sans text-lg mt-3">{slide.title}</p>
          </div>
        ))}
        {!specChoice && mac16Items.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full"
            style={{ touchAction: "pan-y" }}
          >
            <div className="rounded-lg ">
              <img
                className="bg-customStickyGrey m-auto w-[390px] h-[390px]"
                src={slide.content}
              />
            </div>
            <p className="font-sans text-lg mt-3">{slide.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <div
          className={`m-2 w-2 h-2 border rounded-full ${
            currentIndex === 0 ? "bg-customBlackBall" : "bg-customGreyBall"
          }`}
        ></div>
        <div
          className={`m-2 w-2 h-2 border rounded-full ${
            currentIndex === 1 ? "bg-customBlackBall" : "bg-customGreyBall"
          }`}
        ></div>
        <div
          className={`m-2 w-2 h-2 border rounded-full ${
            currentIndex === 2 ? "bg-customBlackBall" : "bg-customGreyBall"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TouchSlider;
