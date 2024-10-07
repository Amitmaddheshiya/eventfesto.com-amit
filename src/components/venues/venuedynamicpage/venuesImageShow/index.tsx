import React, { useEffect, useRef, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDropdown,
  IoIosArrowDropup,
  IoIosArrowForward,
} from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FoodPackageAndIntro from "./foodPackageAndIntro";
import PriceAndRiview from "./priceAndRiview";

const images = [
  {
    photos: "/img1.jpg",
    id: "1",
  },
  { photos: "/img2.jpg", id: "2" },
  { photos: "/img3.jpg", id: "3" },
  { photos: "/img4.jpg", id: "4" },
  { photos: "/img5.jpg", id: "5" },
  { photos: "/img6.jpg", id: "6" },
  { photos: "/img1.jpg", id: "7" },
  { photos: "/img2.jpg", id: "8" },
  { photos: "/img3.jpg", id: "9" },
  { photos: "/img4.jpg", id: "10" },
  { photos: "/img5.jpg", id: "11" },
  { photos: "/img1.jpg", id: "12" },
  { photos: "/img2.jpg", id: "13" },
  { photos: "/img3.jpg", id: "14" },
  { photos: "/img4.jpg", id: "15" },
  { photos: "/img5.jpg", id: "16" },
  { photos: "/img6.jpg", id: "17" },
  { photos: "/img1.jpg", id: "18" },
  { photos: "/img2.jpg", id: "19" },
  { photos: "/img3.jpg", id: "20" },
];

const VerticalCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexH, setCurrentIndexH] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleDrag = (e: MouseEvent) => {
      const newIndex = Math.floor((currentIndexH + 0.5) / 4) * 4;
      setCurrentIndex(newIndex);
    };

    container.addEventListener("mousemove", handleDrag);

    return () => {
      container.removeEventListener("mousemove", handleDrag);
    };
  }, [currentIndexH]);

  const handleNext = () => {
    if (currentIndex < images.length - 5) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const handleNextHorizontal = () => {
    if (currentIndexH < images.length - 1) {
      setCurrentIndexH(currentIndexH + 1);
    }
  };

  const handleBackHorizontal = () => {
    if (currentIndexH > 0) {
      setCurrentIndexH(currentIndexH - 1);
    }
  };

  const handleClickVertical = (index: number) => {
    setCurrentIndexH(index);
  };

  return (
    <div className="w-full">
      <div className="w-full md:flex mt-8  select-none ">
        <div className="w-full md:w-1/6 flex md:flex-col relative">
          <div
            className={`flex justify-center text-2xl font-black ${
              currentIndex < 1 ? "hidden" : ""
            } `}
          >
            <IoIosArrowBack
              className="  md:hidden block absolute ml-4 top-5  text-black cursor-pointer "
              onClick={handleBack}
            />
            <IoIosArrowDropup
              className="md:block hidden absolute top-2  text-black cursor-pointer "
              onClick={handleBack}
            />
          </div>
          {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
            <button
              className="w-full"
              key={image.id}
              onClick={() => handleClickVertical(currentIndex + index)}
            >
              {" "}
              {/* Assuming image has a unique id */}
              <img
                src={image.photos}
                alt={`pic ${image.id}`}
                className={`w-full h-16 md:h-28 cursor-pointer transition duration-300 ${
                  currentIndexH === currentIndex + index
                    ? "opacity-100"
                    : "opacity-50"
                } hover:opacity-100 `}
              />
            </button>
          ))}
          <div
            className={` mr-2 flex justify-center font-black text-2xl ${
              currentIndex > images.length - 6 ? "hidden" : ""
            }`}
          >
            <IoIosArrowForward
              className=" md:hidden block absolute mr-2 bottom-5 font-bold text-black cursor-pointer"
              onClick={handleNext}
            />
            <IoIosArrowDropdown
              className="md:block hidden absolute bottom-2 font-bold text-black cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>

        <div
          ref={carouselRef}
          className=" relative w-full h-[360px] md:h-[560px] md:w-3/6 border-4 border-gray-200 flex items-center"
        >
          <div
            className={`z-10 absolute  left-2 flex justify-center text-2xl font-black ${
              currentIndexH < 1 ? "hidden" : "block"
            } `}
          >
            <IoIosArrowBack
              className="font-bold text-black cursor-pointer "
              onClick={handleBackHorizontal}
            />
          </div>

          <Carousel
            showThumbs={false}
            selectedItem={currentIndexH}
            onChange={(index) => setCurrentIndexH(index)}
            showArrows={false}
            emulateTouch={true}
            dynamicHeight={false}
            thumbWidth={80}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={100 / 1}
          >
            {images.map((image, index) => (
              <button key={image.id}>
                {" "}
                <img
                  src={image.photos}
                  alt={`pic ${image.id}`}
                  height={552}
                  className="w-full h-[352px] md:h-[552px]"
                />
              </button>
            ))}
          </Carousel>

          <div
            className={` absolute right-2 flex justify-center font-black text-2xl  ${
              currentIndexH > images.length - 2 ? "hidden" : ""
            }`}
          >
            <IoIosArrowForward
              className=" font-bold text-black cursor-pointer"
              onClick={handleNextHorizontal}
            />
          </div>
        </div>
        {/**yah right side wala design import karna hai img ke bagal wala */}
        <div className="w-full md:w-2/6 md:ml-8 mt-12 md:mt-0">
          <PriceAndRiview />
        </div>
      </div>
      <div className="flex gap-6 w-full ">
        <div className="w-full md:w-4/6">
          <FoodPackageAndIntro />
        </div>
        <div className="bg-black hidden md:block w-2/6  h-60 mt-6">
          <img src="/img3.jpg" alt="img" className="w-full h-full bg-black" />
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
