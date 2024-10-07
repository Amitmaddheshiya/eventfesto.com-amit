"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Index: React.FC = () => {
  const images: {
    id: string;
    url: string;
    name: string;
    city: string;
    price: string;
    href: string;
    star: string;
  }[] = [
    {
      id: "1",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "2",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "3",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "4",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "5",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "6",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "7",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "8",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "123456",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "9",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "10",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "11",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "12",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "13",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "14",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "15",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
      star: "4.5",
    },
    {
      id: "16",
      url: "/hotelAlso.jpg",
      name: "Ad marriage house",
      city: "kolkatta",
      href: "#",
      price: "Rs.800-1200",
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
    <div className="border shadow-lg rounded-xl p-4 w-full mb-20 md:mt-24">
      <p className="text-md md:text-3xl font-bold mb-2 md:mb-4">
        You may also like
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
          className="h-[520px] md:h-fit overflow-auto w-full bg-white md:overflow-hidden   relative "
        >
          <div className=" bg-white py-4 grid grid-cols-1 md:flex  transition-transform duration-500 ease-in-out gap-2 md:gap-8">
            {images.slice(startIndex, startIndex + 16).map((image) => (
              <Link href={image.href} key={image.id}>
                <div
                  style={{
                    position: "relative",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className=" hover:transform hover:scale-110 hover:brightness-125 w-full h-40 md:w-60  md:h-60  rounded-xl "
                >
                  <div
                    style={{
                      backgroundImage: `url(${image.url})`,
                      backgroundSize: "cover",
                    }}
                    className="border w-full h-full rounded-xl overflow-hidden"
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
                    <p className="gap-1 flex items-center font-sans text-xs md:text-lg font-medium md:font-bold cursor-pointer">
                      <span className=" text-yellow-400">
                        <FaStar />
                      </span>
                      <span className="text-yellow-400">{image.star}</span>
                    </p>
                    <p className=" font-sans text-xs md:text-lg font-medium md:font-bold cursor-pointer">
                      {image.name}
                    </p>
                    <p className="w-full flex justify-between text-xs md:text-md  font-sans cursor-pointer">
                      <span>{image.city}</span>{" "}
                      <span className="text-cyan-300 font-bold">
                        {image.price}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
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
