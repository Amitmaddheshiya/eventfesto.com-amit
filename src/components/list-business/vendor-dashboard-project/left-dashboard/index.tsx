"use client";
import React, { useState } from "react";
import { FaBars, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlineCardMembership, MdReviews } from "react-icons/md";
import { PiBankBold } from "react-icons/pi";
import {
  RiMoneyDollarCircleLine,
  RiProjectorLine,
  RiStarLine,
} from "react-icons/ri";
import Banquets from "../banquets";
import GoogleBusiness from "../googleBusiness";
import Information from "../information/profileAnalytics";
import Membership from "../membership";
import Menu from "../menu";
import Projects from "../project";
import Reviews from "../review";

type Item = {
  id: string;
  icon: JSX.Element;
  text: string;
  to: string;
};

const Index: React.FC = () => {
  const items: Item[] = [
    {
      id: "1",
      icon: <IoIosInformationCircle />,
      text: "Information",
      to: "information",
    },
    { id: "2", icon: <RiProjectorLine />, text: "Projects", to: "projects" },
    {
      id: "3",
      icon: <MdOutlineCardMembership />,
      text: "Membership",
      to: "membership",
    },
    { id: "4", icon: <MdReviews />, text: "Reviews", to: "reviews" },
    {
      id: "5",
      icon: <RiMoneyDollarCircleLine />,
      text: "Menu",
      to: "menu",
    },
    {
      id: "6",
      icon: <PiBankBold />,
      text: "Banquets",
      to: "banquets",
    },
    {
      id: "7",
      icon: <RiStarLine />,
      text: "Google My Business",
      to: "google-business",
    },
  ];

  const [selectedComponent, setSelectedComponent] =
    useState<string>("information");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const profileData = {
    /* Your profile data here */
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "information":
        return <Information />;
      case "projects":
        return <Projects />;
      case "menu":
        return <Menu />;
      case "membership":
        return <Membership />;
      case "banquets":
        return <Banquets />;
      case "reviews":
        return <Reviews />;
      case "google-business":
        return <GoogleBusiness />;
      default:
        return <Information />;
    }
  };

  const handleItemClick = (to: string) => {
    setSelectedComponent(to);
    setIsSidebarOpen(false); // Close the sidebar on item click
  };

  return (
    <div className="bg-gray-50 p-4 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:mx-4 sm:mx-10">
        <button
          className="sm:hidden text-xl -ml-2 -mt-2 mb-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </button>
        <div
          className={`left-box ${isSidebarOpen ? "block" : "hidden"} sm:block`}
        >
          <div className="flex bg-white shadow-sm flex-col w-full sm:w-52 border border-gray-300 px-4 pb-2 pt-4 mr-0 sm:mr-5">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.to)}
                className={`flex items-center mb-4 bg-transparent border-0 text-left w-full p-0 ${
                  selectedComponent === item.to ? "text-cyan-500" : "text-black"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="ml-4">{item.text}</span>
              </button>
            ))}
          </div>
          <div className="w-full sm:w-52 bg-white pb-3 shadow-sm">
            <div className="bg-gradient-to-r from-cyan-700 to-cyan-500 w-full sm:w-52 h-28 mt-3 p-3">
              <p className="text-gray-100 text-xs text-center mt-2">
                we're now Indians' favorite wedding portals
              </p>
              <p className="text-white text-center mt-1">Eventfesto.com</p>
            </div>
            <p className="text-xs text-left p-3">
              Share your WedMeGood profile with your friends and followers on
              Facebook
            </p>
            <div className="flex text-md py-3 text-white items-center justify-center gap-1 bg-sky-800 mx-3">
              <FaFacebookF />
              <p>Share on Facebook</p>
            </div>
          </div>
          <div className="w-full sm:w-52 text-center bg-white py-2 mt-2 shadow-sm">
            <h1 className="text-cyan-500">WMG Support</h1>
            <div className="flex gap-2 justify-center">
              <FaPhoneAlt className="ml-2" />
              <p>0124-6812346</p>
            </div>
          </div>
        </div>

        <div className={`flex flex-col h-fit mt-6 sm:mt-0 sm:ml-6 flex-1`}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
