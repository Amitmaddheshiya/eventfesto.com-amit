import Link from "next/link";
import {
  FaCamera,
  FaCanadianMapleLeaf,
  FaCarAlt,
  FaFacebookMessenger,
  FaHandSparkles,
  FaTheaterMasks,
  FaVideo,
} from "react-icons/fa";
import {
  GiBigDiamondRing,
  GiByzantinTemple,
  GiCampfire,
  GiClothes,
  GiForkKnifeSpoon,
  GiLipstick,
  GiMusicalNotes,
  GiSwordwoman,
} from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";

interface WeddingItem {
  id: number;
  icon: React.ElementType;
  name: string;
  link: string;
}

interface WeddingData {
  column1: WeddingItem[];
  column2: WeddingItem[];
}
const Index: React.FC = () => {
  const weddingData: WeddingData = {
    column1: [
      {
        id: 1,
        icon: FaCamera,
        name: "VENUES",
        link: "/venues",
      },
      {
        id: 2,
        icon: FaCanadianMapleLeaf,
        name: "DECORATORS",
        link: "/decorators",
      },
      {
        id: 3,
        icon: GiByzantinTemple,
        name: "PHOTOGRAPHERS",
        link: "/photographers",
      },
      {
        id: 4,
        icon: GiSwordwoman,
        name: "E-INVITES",
        link: "/e-invites",
      },
      {
        id: 5,
        icon: GiClothes,
        name: "MAKEUP ARTISTS",
        link: "/makeup-artists",
      },
      {
        id: 6,
        icon: FaTheaterMasks,
        name: "TRANSPORTATIONS",
        link: "/transportations",
      },
      {
        id: 7,
        icon: GiMusicalNotes,
        name: "MEHANDI ARTISTS",
        link: "/mehandi-artists",
      },
      {
        id: 8,
        icon: GiCampfire,
        name: "DJ'S",
        link: "/djs",
      },
      {
        id: 9,
        icon: FaCarAlt,
        name: "ENTERTAINMENTS",
        link: "/entertainments",
      },
    ],
    column2: [
      {
        id: 10,
        icon: GiLipstick,
        name: "CHOREOGRAPHERS",
        link: "/choreographers",
      },
      {
        id: 11,
        icon: GrUserManager,
        name: "HOSPITALITY",
        link: "/hospitality",
      },
      {
        id: 12,
        icon: FaHandSparkles,
        name: "JEWELLERY",
        link: "/jewellery",
      },
      {
        id: 13,
        icon: FaFacebookMessenger,
        name: "WEDDING WEAR",
        link: "/wedding-wear",
      },
      {
        id: 14,
        icon: FaVideo,
        name: "GIFTS",
        link: "/gifts",
      },
      {
        id: 15,
        icon: GiForkKnifeSpoon,
        name: "HONEYMOONS",
        link: "/honeymoons",
      },
      {
        id: 16,
        icon: GiBigDiamondRing,
        name: "PANDITS",
        link: "/pandits",
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-center gap-20">
        <div className="flex flex-col gap-6">
          {weddingData.column1.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className=" flex gap-4 items-center mb-2 text-xs font-semibold text-black cursor-pointer hover:text-cyan-500">
                <item.icon className="text-2xl" /> {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col ml-8 gap-6">
          {weddingData.column2.map((item, index) => (
            <Link href={item.link} key={item.id}>
              <div className="flex gap-4 mb-2 text-xs font-semibold items-center text-black cursor-pointer hover:text-cyan-500">
                <item.icon className="text-2xl" /> {item.name}
              </div>{" "}
            </Link>
          ))}
        </div>
      </div>
      <div className="pt-6 border-t-2 mt-8 flex justify-end gap-4 items-center">
        <span>I'm a Vendor</span>{" "}
        <Link href="/vendors">
          {" "}
          <button className="border rounded-3xl border-cyan-500 text-cyan-500 rounded-4 px-6 py-2 text-sm hover:bg-cyan-500 hover:text-white">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
