"use client";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const staricon = [1, 2, 3, 4];
const Index: React.FC = () => {
  const images: {
    id: string;
    url: string;
    name: string;

    star: string;
    review: string;
  }[] = [
    {
      id: "1",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "2",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "3",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "4",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "5",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "6",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "7",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "8",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "9",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "10",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "11",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "12",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "13",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "14",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "15",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
    {
      id: "16",
      url: "/hotelAlso.jpg",
      name: "Niranjan singh",
      review:
        "i was completely satisfied choosing vaishnavi for my big day. She made me look natural and elegant for both reception and muhurtham. She's sweet and polite. I highly recommend her for further makeup sessions.",
      star: "4.5",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const handleStart = (event: TouchEvent | MouseEvent) => {
      isDragging = true;
      startX =
        event instanceof TouchEvent ? event.touches[0].pageX : event.pageX;
      scrollLeft = container.scrollLeft;
    };

    const handleMove = (event: TouchEvent | MouseEvent) => {
      if (!isDragging) return;
      event.preventDefault();
      const x =
        event instanceof TouchEvent ? event.touches[0].pageX : event.pageX;
      const walk = (x - startX) * 3; // Adjust scroll speed here
      container.scrollLeft = scrollLeft - walk;
    };

    const handleEnd = () => {
      isDragging = false;
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
  }, []);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 4));
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  return (
    <div className="border shadow-lg rounded-xl p-4 w-full mb-12 md:mt-24">
      <p className="text-md md:text-3xl font-bold mb-2 md:mb-4">
        Reviews & Ratings
      </p>
      <div className="flex w-full bg-white flex-col items-center justify-center  relative">
        <button
          className="md:block hidden z-10 absolute  left-0 md:left-0  mt-10  transform -translate-y-1/2  rounded-full bg-white shadow-md  w-6 h-6 md:w-10 md:h-10 flex justify-center items-center"
          onClick={handlePrevClick}
        >
          <MdKeyboardArrowLeft className="text-4xl text-black" />
        </button>
        <div
          ref={containerRef}
          className=" h-[360px] md:h-fit overflow-auto w-full bg-white md:overflow-hidden   relative "
        >
          <div className=" h-[360px] bg-white grid grid-cols-1 md:grid-cols-4  transition-transform duration-500 ease-in-out gap-6 md:gap-6 overflow-auto">
            {images.slice(startIndex, startIndex + 16).map((image) => (
              <div
                key={image.id}
                style={{
                  position: "relative",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="overflow-auto w-full  h-60 md:w-60  md:h-60  rounded-xl "
              >
                <div className="bg-white border w-full h-full rounded-xl overflow-hidden"></div>
                <div
                  className="w-full h-full p-4 inset-0  rounded-xl flex flex-col justify-start items-start p-1 md:p-2 bg-gray-400 "
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0), transparent)", // Adding shadow
                  }}
                >
                  <span className="gap-2 flex items-center font-sans text-xs md:text-lg font-medium md:font-bold cursor-pointer">
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="Remy Sharp" src="/hotelAlso.jpg" />
                    </Stack>
                    <span className="flex text-yellow-400">
                      {staricon.map((value) => {
                        return (
                          <span key={value} className="flex text-yellow-400">
                            <FaStar />
                          </span>
                        );
                      })}
                    </span>
                    <span className="text-yellow-400">{image.star}</span>
                  </span>
                  <p className=" font-sans text-xs md:text-lg font-medium md:font-bold cursor-pointer">
                    {image.name}
                  </p>
                  <p className="mt-2 font-sans text-sm cursor-pointer">
                    {image.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="md:block hidden  absolute right-0 md:right-0 mt-10 z-10 bg-white shadow-md transform -translate-y-1/2  rounded-full w-6 h-6 md:w-10 md:h-10 flex justify-center items-center"
          onClick={handleNextClick}
        >
          <MdKeyboardArrowRight className="text-4xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default Index;
