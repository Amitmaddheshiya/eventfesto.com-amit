import Link from "next/link";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import { IoCall } from "react-icons/io5";

function index() {
  return (
    <div className="w-full flex justify-center md:mb-24 mt-12">
      <div className="flex flex-col w-full md:w-5/6">
        <div className="md:flex items-center justify-between grid grid-cols-2 md:p-4 mb-6 md:mb-0 gap-4">
          <Link
            href="https://www.instagram.com/eventfesto.in?igsh=cnFkMHBod2pscml4"
            target="_blank"
          >
            <div className="flex justify-center items-center gap-x-2 cursor-pointer">
              <BsInstagram className="text-3xl text-orange-700" />
              <div>
                <p className="text-xs font-semibold">@EventFesto.com</p>
                <p className="text-xs">on instagram</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/share/PKs6FBd8dFpdkRyJ/?mibextid=qi2Omg"
            target="_blank"
          >
            <div className="flex justify-center items-center gap-x-2 cursor-pointer">
              <BiLogoFacebookSquare className="text-3xl text-blue-500" />
              <div>
                <p className="text-xs font-semibold">@EventFesto.com</p>
                <p className="text-xs">on facebook</p>
              </div>
            </div>
          </Link>

          <Link
            href="https://www.facebook.com/share/PKs6FBd8dFpdkRyJ/?mibextid=qi2Omg"
            target="_blank"
          >
            {" "}
            <div className="flex justify-center items-center gap-x-2 cursor-pointer">
              <GrPinterest className="text-3xl text-red-500" />
              <div>
                <p className="text-xs font-semibold">@EventFesto.com</p>
                <p className="text-xs">on pinterest</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-black  flex flex-col px-8 py-6 md:py-20">
          <div className="flex justify-center items-center text-white text-lg md:text-2xl">
            <span className="md:hidden block">Plan a Wedding In India</span>
            <span className="hidden md:block">
              Create Events to fit your Style, Budget, and Preferences
              Perfectly.
            </span>
          </div>

          <div className="md:flex justify-center grid grid-cols-1 mt-4 md:mt-8">
            <div className="flex flex-col  md:border-r border-slate-200 px-4 md:px-20 justify-center items-center gap-y-1">
              <p className="flex space-x-1 text-sm md:text-xl">
                <IoCall className="text-white mt-1 md:mt-2" />
                <span className="text-white">call us:</span>
                <span className="text-red-500">63-94-62-96-57</span>
              </p>
              <p
                className="text-slate-300 font-thin "
                style={{ fontSize: "0.7rem" }}
              >
                10am to 8pm
              </p>
              <p className=" text-xs  w-6 h-6 rounded-full border border-slate-400  text-white flex justify-center items-center">
                or
              </p>
              <p className="text-sm">
                <span className="text-red-500">HAVE US CALL YOU</span>{" "}
                <span className="text-white">UP TO 30%</span>
              </p>
              <p className="text-white text-xs">DISCOUNT</p>
            </div>

            <div className="flex flex-col md:border-l text-xs md:text-lg text-white border-slate-400 px-8 gap-y-1 justify-center md:m-0 mt-8">
              <p className="flex gap-2">
                <span className="font-bold">.</span>
                <span className="">India's Largest Event Company</span>
              </p>
              <p className="flex gap-2">
                <span className="font-bold">.</span>
                <span className="">
                  Find, Compare & Book Event Venues and Services
                </span>
              </p>
              <p className="flex gap-2">
                <span className="font-bold">.</span>
                <span className="">Best Prices Guaranteed</span>
              </p>
              <p className="flex gap-2">
                <span className="font-bold">.</span>
                <span className="">
                  Find, Vendor Network, Expert Advise, Latest Trends,
                  <br /> and Insights for your Events
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
