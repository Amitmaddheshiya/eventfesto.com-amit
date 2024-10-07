"use client";
import React, { useState } from "react";
import { BsShieldCheck } from "react-icons/bs";
import { GiBigDiamondRing, GiShoppingCart } from "react-icons/gi";
import { PiCheckFatFill } from "react-icons/pi";
import Modal from "./foodPackageModal";

// Modal component

const Index: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContentType, setModalContentType] = useState<string>("");

  const openModal = (content: string) => {
    setShowModal(true);
    setModalContentType(content);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full flex-col  mt-20 md:mt-10">
      <div className="flex w-full gap-2 md:gap-12 mt-6 text-xs md:p-0 p-2 md:text-lg">
        <button
          className="w-2/6 bg-blue-500 hover:bg-blue-700 p-2 rounded-md text-white font-bold"
          onClick={() => openModal("Food Packages")}
        >
          <p className="">Food Packages</p>
        </button>

        <button
          className="w-2/6 bg-blue-500 hover:bg-blue-700 p-2 rounded-md text-white font-bold"
          onClick={() => openModal("Venue Specification")}
        >
          <p className="">Venue Specification</p>
        </button>

        <button
          className="w-2/6 bg-blue-500 hover:bg-blue-700 p-2 rounded-md text-white font-bold"
          onClick={() => openModal("Policies")}
        >
          <p className="">Policies</p>
        </button>
      </div>

      <div className="flex gap-8 w-full">
        <div className="w-full  bg-orange-200 mt-6 p-4 rounded-md">
          <p className="text-md text-gray-500 mb-2 md:mb-0">Introducing</p>
          <div className="border md:border-none shadow-md md:shadow-none md:shadow-inherit shadow-indigo-500/40 rounded-xl flex-cols space-y-6  md:space-y-0 md:flex w-full md:gap-8 p-2 md:p-0">
            <div className="w-full md:w-3/12">
              <div className="flex bg-gray-400 p-2  rounded-md mb-2 mt-2">
                <span className="text-green-700 text-xl flex items-center">
                  <PiCheckFatFill />
                </span>
                <span className="text-sm font-bold">Eventfesto.com</span>
              </div>
              <div className="bg-orange-200">
                <p className="text-xs">Plan Your Wedding at Eventfesto</p>
                <p className="text-xs">Managed Venues</p>
              </div>
            </div>

            <div className="w-full md:w-3/12 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white p-2 rounded-md">
              <div className="flex gap-2 mb-2">
                <span className=" text-xl flex justify-center items-center">
                  <GiBigDiamondRing />
                </span>
                <span className="text-sm font-bold">Great Event Granted</span>
              </div>
              <p className="text-xs">Plan Your Wedding at Eventfesto</p>
              <p className="text-xs">Managed Venues</p>
            </div>

            <div className="w-full md:w-3/12 bg-gradient-to-r from-orange-500 to-orange-300 text-white p-2 rounded-md">
              <div className="flex gap-2 mb-2 justify-center items-center">
                <span className=" text-xl ">
                  <GiShoppingCart />
                </span>
                <span className="text-sm font-bold">One-Stop Shop</span>
              </div>
              <p className="text-xs">Plan Your Wedding at Eventfesto</p>
              <p className="text-xs">Managed Venues</p>
            </div>

            <div className="w-full md:w-3/12 bg-gradient-to-r from-green-500 to-green-300 text-white p-2 rounded-md">
              <div className="flex gap-2 mb-2 justify-center items-center">
                <span className=" text-xl ">
                  <BsShieldCheck />
                </span>
                <span className="text-sm font-bold">100 % Transparency</span>
              </div>
              <p className="text-xs">Plan Your Wedding at Eventfesto</p>
              <p className="text-xs">Managed Venues</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal onClose={closeModal} contentType={modalContentType} />
      )}
    </div>
  );
};

export default Index;
