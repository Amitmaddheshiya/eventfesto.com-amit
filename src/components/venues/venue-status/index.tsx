"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Index: React.FC = () => {
  const images: {
    id: string;
    url: string;
    name: string;
    count: string;
  }[] = [
    {
      id: "1",
      url: "/statush.jpg",
      name: "Below 3 star hotel",
      count: "(123456)",
    },
    {
      id: "2",
      url: "/statush.jpg",
      name: "4 star & above hotels",
      count: "(123456)",
    },
    {
      id: "3",
      url: "/statush.jpg",
      name: "Resort",
      count: "(123456)",
    },
    {
      id: "4",
      url: "/statush.jpg",
      name: "Banquet halls",
      count: "(123456)",
    },
    {
      id: "5",
      url: "/statush.jpg",
      name: "Lawn/Farmhouses",
      count: "(123456)",
    },
    {
      id: "6",
      url: "/statush.jpg",
      name: "Small function/Party halls",
      count: "(123456)",
    },
    {
      id: "7",
      url: "/statush.jpg",
      name: "Destination wedding",
      count: "(123456)",
    },
    {
      id: "8",
      url: "/statush.jpg",
      name: "Kalyana mandapam",
      count: "123456",
    },
    {
      id: "9",
      url: "/statush.jpg",
      name: "5 star luxury hotels",
      count: "(123456)",
    },
    {
      id: "10",
      url: "/statush.jpg",
      name: "Temple wedding venues",
      count: "(123456)",
    },
    {
      id: "11",
      url: "/statush.jpg",
      name: "Country/Golf club",
      count: "(123456)",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isFocused, setIsFocused] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleStart = (event: TouchEvent | MouseEvent) => {
      isDown = true;
      startX =
        event instanceof TouchEvent
          ? event.touches[0].pageX
          : event.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMove = (event: TouchEvent | MouseEvent) => {
      if (!isDown) return;
      event.preventDefault();
      const x =
        event instanceof TouchEvent
          ? event.touches[0].pageX
          : event.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed here
      container.scrollLeft = scrollLeft - walk;
    };

    const handleEnd = () => {
      isDown = false;
    };

    container.addEventListener("touchstart", handleStart);
    container.addEventListener("mousedown", handleStart);
    container.addEventListener("touchmove", handleMove);
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("touchend", handleEnd);
    container.addEventListener("mouseup", handleEnd);
    container.addEventListener("mouseleave", handleEnd);

    return () => {
      container.removeEventListener("touchstart", handleStart);
      container.removeEventListener("mousedown", handleStart);
      container.removeEventListener("touchmove", handleMove);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("touchend", handleEnd);
      container.removeEventListener("mouseup", handleEnd);
      container.removeEventListener("mouseleave", handleEnd);
    };
  }, [containerRef]);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 4, images.length - 4));
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <div className="w-full h-fit mt-10 mb-6">
      <p className="md:pl-20 text-md md:text-2xl font-semibold mb-4">
        Venues Categories
      </p>
      <div className=" h-fit flex w-full bg-white flex-col items-center justify-center  relative">
        <button
          className="z-10 absolute left-0 md:left-10 -mt-6 md:mt-0 transform -translate-y-1/2  rounded-full bg-white shadow-md w-5 h-5 md:w-10 md:h-10 flex justify-center items-center"
          onClick={handlePrevClick}
        >
          <MdKeyboardArrowLeft className="text-4xl text-black" />
        </button>
        <div
          ref={containerRef}
          className="h-fit flex  w-full md:w-11/12 bg-white overflow-hidden   relative "
        >
          <div
            className="-ml-1 h-fit flex transition-transform duration-500 ease-in-out gap-0 md:gap-3"
            style={{
              marginTop: "15px",
            }}
          >
            {images.slice(startIndex, startIndex + 16).map((image, index) => (
              <button
                onClick={() => setIsFocused(index)}
                key={image.id}
                className="h-fit"
              >
                <div className="p-2 overflow-hidden flex flex-col justify-center items-center">
                  <div
                    className={`${isFocused == index ? "border-4 border-cyan-400" : ""} flex w-20 h-20 md:w-36 md:h-36 justify-center items-center bg-orange-300 rounded-full overflow-hidden bg-cover bg-no-repeat`}
                  >
                    <img
                      src={image.url}
                      alt={image.name}
                      width={154}
                      height={154}
                      className="rounded-full cursor-pointer"
                    />
                  </div>
                </div>
                <p
                  className={`${isFocused == index ? "font-bold text-black" : "font-semibold text-gray-500"}text-center mt-2 cursor-pointer font-sans text-xs md:text-sm `}
                >
                  {image.name}
                </p>
              </button>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 md:right-10 -mt-6 md:mt-0 z-10 bg-white shadow-md transform -translate-y-1/2  rounded-full w-5 h-5 md:w-10 md:h-10 flex justify-center items-center"
          onClick={handleNextClick}
        >
          <MdKeyboardArrowRight className="text-4xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default Index;
