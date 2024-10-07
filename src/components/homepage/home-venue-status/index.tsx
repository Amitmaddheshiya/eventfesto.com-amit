"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Index: React.FC = () => {
  const images: {
    id: string;
    url: string;
    name: string;
    count: string;
    href: string;
    comming: string;
  }[] = [
    {
      id: "1",
      url: "/statush.jpg",
      name: "Venues",
      count: "(123456)",
      href: "/venues",
      comming: "",
    },
    {
      id: "4",
      url: "/statush.jpg",
      name: "E-Invites",
      count: "(123456)",
      href: "/e-invites",
      comming: "",
    },
    {
      id: "2",
      url: "/statush.jpg",
      name: "Decorators",
      count: "(123456)",
      href: "/decorators",
      comming: "Comming soon !",
    },
    {
      id: "3",
      url: "/statush.jpg",
      name: "Photographers",
      count: "(123456)",
      href: "/photographers",
      comming: "Comming soon !",
    },

    {
      id: "5",
      url: "/statush.jpg",
      name: "Makeup artists",
      count: "(123456)",
      href: "/makeup-artists",
      comming: "Comming soon !",
    },
    {
      id: "6",
      url: "/statush.jpg",
      name: "Transportations",
      count: "(123456)",
      href: "/transportations",
      comming: "Comming soon !",
    },
    {
      id: "7",
      url: "/statush.jpg",
      name: "Mehandi artists",
      count: "(123456)",
      href: "/mehandi-artists",
      comming: "Comming soon !",
    },
    {
      id: "8",
      url: "/statush.jpg",
      name: "Dj's",
      count: "123456",
      href: "/dj",
      comming: "Comming soon !",
    },
    {
      id: "9",
      url: "/statush.jpg",
      name: "Entertainments",
      count: "(123456)",
      href: "/entertainments",
      comming: "Comming soon !",
    },
    {
      id: "10",
      url: "/statush.jpg",
      name: "Choreographers",
      count: "(123456)",
      href: "/choreographers",
      comming: "Comming soon !",
    },
    {
      id: "11",
      url: "/statush.jpg",
      name: "Hospitality",
      count: "(123456)",
      href: "/hospitality",
      comming: "Comming soon !",
    },
    {
      id: "12",
      url: "/statush.jpg",
      name: "Jewellery",
      count: "(123456)",
      href: "/jewellery",
      comming: "Comming soon !",
    },
    {
      id: "13",
      url: "/statush.jpg",
      name: "Wedding wear",
      count: "(123456)",
      href: "/wedding-wear",
      comming: "Comming soon !",
    },
    {
      id: "14",
      url: "/statush.jpg",
      name: "Gifts",
      count: "(123456)",
      href: "/gifts",
      comming: "Comming soon !",
    },
    {
      id: "15",
      url: "/statush.jpg",
      name: "Honeymoons",
      count: "(123456)",
      href: "/honeymoons",
      comming: "Comming soon !",
    },
    {
      id: "16",
      url: "/statush.jpg",
      name: "Pandits",
      count: "(123456)",
      href: "/pandits",
      comming: "Comming soon !",
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
  }, [containerRef]);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 4));
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  return (
    <div className=" w-full md:mt-24">
      <p className="pl-2 md:pl-20 text-md md:text-3xl font-bold mb-2 md:mb-4">
        Vendor Categories
      </p>
      <div className="flex w-full bg-white flex-col items-center justify-center  relative">
        <button
          className="z-10 absolute left-0 md:left-1 md:left-6 mt-10  transform -translate-y-1/2  rounded-full bg-white shadow-md  w-6 h-6 md:w-10 md:h-10 flex justify-center items-center"
          onClick={handlePrevClick}
        >
          <MdKeyboardArrowLeft className="text-4xl text-black" />
        </button>
        <div
          ref={containerRef}
          className="flex w-full md:w-11/12 bg-white overflow-hidden   relative "
        >
          <div
            className="bgg-white py-8 flex transition-transform duration-500 ease-in-out gap-2 md:gap-8"
            style={{
              marginTop: "15px",
            }}
          >
            {images.slice(startIndex, startIndex + 16).map((image) => (
              <Link href={image.href} key={image.id}>
                <div
                  style={{
                    position: "relative",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="hover:transform hover:scale-110 hover:brightness-125 w-24 h-24 md:w-40  md:h-40  rounded-xl "
                >
                  <div
                    style={{
                      backgroundImage: `url(${image.url})`,
                      backgroundSize: "cover",
                    }}
                    className="w-full h-full rounded-xl overflow-hidden"
                  >
                    {" "}
                  </div>
                  <div
                    className="w-full h-full  inset-0  rounded-xl flex flex-col justify-end items-start p-1 md:p-2 bg-gray-400 opacity-100 hover:opacity-80 text-white"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", // Adding shadow
                    }}
                  >
                    <p className="font-sans text-xs md:text-sm font-medium md:font-bold cursor-pointer">
                      {image.name}
                    </p>
                    <p className="w-full  flex justify-between text-xs md:text-xs  font-sans cursor-pointer">
                      <span>{image.count}</span>{" "}
                      <span className="text-blue-500">{image.comming}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 md:right-1 md:right-6 mt-10 z-10 bg-white shadow-md transform -translate-y-1/2  rounded-full w-6 h-6 md:w-10 md:h-10 flex justify-center items-center"
          onClick={handleNextClick}
        >
          <MdKeyboardArrowRight className="text-4xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default Index;
