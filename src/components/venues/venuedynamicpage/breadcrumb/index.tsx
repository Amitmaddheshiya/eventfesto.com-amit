"use client";
import * as React from "react";
import { FaLocationDot } from "react-icons/fa6";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function Index({ params }: Readonly<{ params: any }>) {
  return (
    <div className="p-2">
      <div className="w-full mt-4">
        <p className="text-lg md:text-3xl font-bold">Grand Hayatt Mumbai</p>
        <div className="flex mt-1">
          <span className="flex items-center">
            <FaLocationDot />
          </span>
          <span className="ml-2 text-xs md:text-sm">Mumbai</span>
        </div>
      </div>
    </div>
  );
}

export default Index;
