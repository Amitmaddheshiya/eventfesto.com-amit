import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { FcBusinessman } from "react-icons/fc";
import {
  MdCelebration,
  MdCorporateFare,
  MdEditDocument,
  MdEventAvailable,
  MdMonitorHeart,
  MdQuestionMark,
  MdShoppingBasket,
} from "react-icons/md";

interface MenuData {
  id: number;
  text: string;
  link: string;
  icon: IconType;
}

const menuOptions: MenuData[] = [
  { id: 1, text: "Vendors", link: "/vendors", icon: FcBusinessman },
  { id: 2, text: "Real Event", link: "/real-event", icon: MdEventAvailable },
  { id: 3, text: "Celeb Event", link: "/celeb-event", icon: MdCelebration },
  {
    id: 4,
    text: "Corporate Event",
    link: "/corporate-event",
    icon: MdCorporateFare,
  },
  { id: 5, text: "Testimonials", link: "/testimonials", icon: MdMonitorHeart },
  { id: 6, text: "Shops", link: "/shops", icon: MdShoppingBasket },
  { id: 7, text: "Blog", link: "/blog", icon: MdEditDocument },
  {
    id: 8,
    text: "Why EventFesto.com?",
    link: "/why-eventfesto",
    icon: MdQuestionMark,
  },
];

const Index: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-black">
      {/* Secondary navbar */}
      <IconButton
        className="block md:hidden text-white" // Hide on medium and larger screens
        onClick={() => setDrawerOpen(true)} // Open drawer on icon click
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)} // Close drawer on overlay click
      >
        <div className="w-64">
          {" "}
          {/* Adjust width as per your design */}
          <div className="flex items-center bg-cyan-600 px-2 py-2 mb-4">
            <h1 className="text-lg lg:text-3xl text-white">
              <p className="font-bold">
                <Link href="/">Eventfesto.com</Link>
              </p>
            </h1>
          </div>
          {menuOptions.map((option) => (
            <Link
              key={option.id}
              href={option.link}
              className="block gap-4 border flex py-2 px-6 text-sm font-bold text-gray-800 hover:bg-gray-200"
              onClick={() => setDrawerOpen(false)} // Close drawer on menu item click
            >
              <option.icon className="text-2xl" />
              <span className="text-cyan-600">{option.text}</span>
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Index;
