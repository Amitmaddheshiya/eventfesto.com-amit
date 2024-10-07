"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import SearchCityPage from "../homepage/search-city-page";
import VendorHoverPage from "../homepage/vendor-hover-page";
import LoginModal from "../loginModal";
import MenuDrawer from "./menuDrawer";

import { SupportedLanguages } from "@/localizations/types/language.type";
import { useDispatch } from "react-redux";
import localize from "../../localizations/localization/index";
import { useAppSelector } from "../../redux/hooks";
import { updateLanguage } from "../../redux/slices/localization.slice";
import LangSelect from "./langSelect";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { lang: language } = useAppSelector((state) => state.language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectCityValue, setSelectCityValue] = useState("All cities");
  const [isVendorHovered, setIsVendorHovered] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang && lang !== "undefined" && lang !== "null" && lang.trim() !== "") {
      dispatch(updateLanguage(lang));
    }
  }, [dispatch]);

  const langValue: SupportedLanguages =
    (language as SupportedLanguages) || "en";

  const menuOptions = [
    {
      id: 1,
      text: localize("HEADER", "VENDOR", langValue),
      link: "/vendors",
    },
    {
      id: 2,
      text: localize("HEADER", "REAL_EVENT", langValue),
      link: "/real-event",
    },
    {
      id: 3,
      text: localize("HEADER", "CELEB_EVENT", langValue),
      link: "/celeb-event",
    },
    {
      id: 4,
      text: localize("HEADER", "CORPORATE_EVENT", langValue),
      link: "/corporate-event",
    },
    {
      id: 5,
      text: localize("HEADER", "TESTIMONIALS", langValue),
      link: "/testimonials",
    },
    { id: 6, text: localize("HEADER", "SHOPS", langValue), link: "/shops" },
    { id: 7, text: localize("HEADER", "BLOG", langValue), link: "/blog" },
    {
      id: 8,
      text: localize("HEADER", "WHY_EVENTFESTO", langValue),
      link: "/why-eventfesto",
    },
  ];

  const handleCitySelect = (city: string) => {
    setSelectCityValue(city);
    setShowModal(false); // Close the modal after city selection
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openVendorModal = () => {
    setIsVendorHovered(true);
  };

  const closeVendorModal = () => {
    if (!isVendorHovered) {
      setIsVendorHovered(false);
    }
  };

  const handleModalMouseLeave = () => {
    if (!isVendorHovered) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="">
      {/*primary navbar*/}
      <div className="flex justify-between w-full h-fit bg-cyan-600 md:px-4 px-2 py-2 md:py-1 gap-2">
        {/* Logo */}
        <div className="w-fit h-fit flex md:justify-start justify-between items-center gap-4 md:gap-10">
          <h1 className="flex text-white text-sm lg:text-3xl">
            <p className="font-bold">EventFesto</p>
            <p>.com</p>
          </h1>

          <div className="relative">
            <input
              readOnly
              type="text"
              value={selectCityValue}
              className="w-32 md:w-60 md:py-1 px-2 cursor-pointer rounded-md bg-white outline-none"
              onClick={() => setShowModal(true)}
            />
            <div className="absolute inset-y-3 right-3 md:right-4 flex items-center pointer-events-none">
              <MdOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="pt-1 flex justify-center items-center text-white text-lg font-bold font-sans hidden md:block">
          <p>Offering Services Across India</p>
        </div>

        <div className="pt-1 flex justify-center items-center text-white text-lg hidden md:block">
          <p>{localize("HEADER", "HEADER_TITLE", langValue)} </p>
        </div>

        {/* Login and Signup */}
        <div className="w-max h-fit flex items-center gap-8">
          <div className="flex text-white cursor-pointer gap-2 hover:text-gray-300 text-md">
            <BsTranslate className="text-xl hidden md:block mt-1" />
            <div className="relative hidden md:block mt-1">
              <LangSelect lang={language} />
            </div>
            <p className="text-3xl md:text-4xl">
              <IoMdContact onClick={openModal} />
            </p>
          </div>
        </div>
      </div>

      {/*secondary navbar*/}
      <button
        className="hidden md:block w-full bg-cyan-500 px-12 py-3 flex justify-between items-center"
        onMouseLeave={() => {
          handleModalMouseLeave();
          // Yahan closeVendorModal function call kiya gaya hai
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-12">
          <p className="text-white text-2xl">
            <Link href="/">
              <FaHome />
            </Link>
          </p>
          {menuOptions.map((option) => (
            <Link
              key={option.id}
              href={option.link}
              className="text-white text-md hover:text-gray-300"
              onMouseEnter={() => {
                if (option.text === "Vendors") {
                  openVendorModal();
                }
              }}
              onMouseLeave={() => {
                if (option.text === "Vendors") {
                  closeVendorModal();
                } else {
                  setIsVendorHovered(false);
                }
              }}
            >
              {option.text}
            </Link>
          ))}
          <div className="text-white cursor-pointer hover:text-gray-300 text-2xl">
            <FaHeart />
          </div>
          <div className="flex text-white cursor-pointer hover:text-gray-300 text-2xl">
            <FaCartShopping />
          </div>
        </div>
      </button>

      <MenuDrawer />

      {isModalOpen && (
        <LoginModal onClose={closeModal} isModalOpenSignup={false} />
      )}

      {showModal && (
        <div className="fixed flex justify-center bg-opacity-50 z-20 inset-0 bg-gray-900">
          <button
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-opacity-0 w-full h-full"
          />
          <SearchCityPage onSelectCity={handleCitySelect} />
        </div>
      )}

      {isVendorHovered && (
        <div className="absolute flex w-fit h-fit justify-center bg-opacity-50 z-40 top-24 left-20 inset-0 bg-gray-900">
          <button
            className="bg-white rounded-lg shadow-md py-10 pl-6 pr-20"
            onMouseEnter={() => setIsVendorHovered(true)}
            onMouseLeave={() => setIsVendorHovered(false)}
          >
            <VendorHoverPage />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
