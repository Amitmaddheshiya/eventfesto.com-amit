"use client";

import { BsCurrencyRupee } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdCall, MdWhatsapp } from "react-icons/md";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function Index() {
  const handleClick = () => {
    window.location.href = "tel:+9170550301";
  };

  return (
    <div>
      <div className="flex-col bg-white">
        <div className="flex justify-between p-4">
          <span className="text-lg font-bold">Starting Price</span>
          <span className="flex  text-md text-pink-500">
            Pricing Info <IoIosArrowDown className="mt-1 text-lg" />
          </span>
        </div>

        <div className="flex justify-between border p-4">
          <span className="flex text-pink-500">
            <BsCurrencyRupee className="mt-1 text-md" />
            <span className="text-md"> 2500</span>
            <span className="text-xs mt-1.5 ml-1">Per Plate (Taxes Extra)</span>
          </span>
          <span className="text-sm">Veg Price</span>
        </div>

        <div className="flex justify-between border p-4">
          <span className="flex text-pink-500">
            <BsCurrencyRupee className="mt-1 text-md" />
            <span className="text-md"> 2700</span>
            <span className="text-xs mt-1.5 ml-1">Per Plate (Taxes Extra)</span>
          </span>
          <span className="text-sm">Non Veg Price</span>
        </div>

        <div className="border-b-2 border mt-4 text-white flex justify-between py-2 px-2 md:py-4 md:px-8 gap-6">
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="md:p-2 p-1 gap-1 rounded-3xl flex items-center justify-center bg-pink-500 px-4 md:px-8">
                <MdWhatsapp className=" text-2xl" />{" "}
                <span className="text-xs md:text-sm">Send Message</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <MdWhatsapp className=" text-2xl text-green-500" />{" "}
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">+91-9170550301</h4>
                  <p className="text-xs font-semibold">
                    You can message us{" "}
                    <span className="text-green-500">24*7</span> on Whatsapp
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <button
                onClick={handleClick}
                className="p-1 md:p-2 gap-1 flex justify-center items-center bg-green-600 rounded-3xl px-4 md:px-8"
              >
                <MdCall className=" text-2xl" />{" "}
                <span className=" text-xs md:text-sm">View Contact</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <MdCall className=" text-2xl text-green-500" />{" "}
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">+91-9170550301</h4>
                  <p className="text-xs font-semibold">
                    You can call us <span className="text-green-500">24*7</span>{" "}
                    for any query
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      {}
      <div className="flex-col mt-4">
        <div className="flex p-4">
          <span className="text-lg font-bold">Rating & riviews</span>
        </div>

        <div className="flex justify-between border p-2">
          <span className="text-md font-bold">Ratings</span>
          <span className="flex text-yellow-600 items-center">
            <FaStar className="text-xl" />
            <FaStar className="text-xl" />
            <FaStar className="text-xl" />
            <FaStar className="text-xl" />
            <FaStar className="text-xl" />
          </span>
        </div>

        <div className="py-2 gap-2 flex flex-col mt-4 text-xs md:text-sm px-2">
          <p>it website is awesome !</p>
          <p>amazing experiance !</p>
          <p>best faciality !</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
