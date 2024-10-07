import { useState } from "react";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdKeyboardArrowRight,
} from "react-icons/md";

const wedCategories: {
  id: string;
  url: string;
  name: string;
  icon: React.ElementType;
  icon2: React.ElementType;
  desc: string;
  color: string;
  categoriesItems: Array<string>;
}[] = [
  {
    id: "1",
    url: "/venues-home.jpg",
    name: "Venues",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Banquet Halls, Lawns / Farmhouses, Resort...",
    color: "bg-white",
    categoriesItems: [
      "View All Venues",
      "Banquet Halls",
      "Lawns / Farmhouses",
      "Resorts",
      "Small Function / Party Halls",
      "Destination Wedding",
      "Kalyana Mandapam",
      "4 Star & Above Hotels",
    ],
  },
  {
    id: "2",
    url: "/photographers-home.jpg",
    name: "Photographers",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Photographers",
    color: "bg-white",
    categoriesItems: ["Photographers"],
  },
  {
    id: "3",
    url: "/makeup-home.jpg",
    name: "Makeup",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Bridal Makeup, Family Makeup",
    color: "bg-white",
    categoriesItems: ["Bridal Makeup", "Family Makeup"],
  },
  {
    id: "4",
    url: "/pre-wedding-home.avif",
    name: "Pre Wedding Shoot",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Pre Wedding Shoot Locations, Pre Weddin...",
    color: "bg-white",
    categoriesItems: [
      "Pre Wedding Shoot Locations",
      "Pre Wedding Shoot Photographers",
    ],
  },
  {
    id: "5",
    url: "/decor-home.jpg",
    name: "Planning & Decor",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Wedding Planners, Decorators, Small Func...",
    color: "bg-white",
    categoriesItems: ["Wedding Planners", "Decorators", "Small Function Decor"],
  },
  {
    id: "6",
    url: "/bridal-wear-home.jpg",
    name: "Bridal Wear ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Bridal Lehengas, Kanjeevaram / Silk Saree..",
    color: "bg-white",
    categoriesItems: [
      "View All Bridal Wear",
      "Bridal Lahangas",
      "Kanjivaram Silk Sarees",
      "Cocktail Gowns",
      "Trousseau Sarees",
      "Bridal Lehenga on Rent",
    ],
  },
  {
    id: "7",
    url: "/groom-wear-home.jpg",
    name: "Groom Wear ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Sherwani, Wedding Suits / Tuxes, Sher...",
    color: "bg-white",
    categoriesItems: [
      "View All Groom Wear",
      "Sherwani",
      "Wedding Suits / Tuxes",
      "Sherwani On Rent",
    ],
  },
  {
    id: "8",
    url: "/mehandi-home.png",
    name: "Mehandi ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Mehandi Artist",
    color: "bg-white",
    categoriesItems: ["Mehandi Artists"],
  },
  {
    id: "9",
    url: "/jewellery-home.jpg",
    name: "Jewells & Accessories",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Jewellery, Flower Jewellery, Bridal Jew...",
    color: "bg-white",
    categoriesItems: [
      "View All Jewellery & Accessories",
      "Jewellery",
      "Flower Jewellery",
      "Bridal Jewellery on Rent",
      "Accessories",
    ],
  },
  {
    id: "10",
    url: "/gift-home.webp",
    name: "Invites & Gifts",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Invitations, Favors, Trousseau Packers, Inv...",
    color: "bg-white",
    categoriesItems: [
      "View All Invites & Gifts",
      "Invitations",
      "Favors",
      "Trousseau Packers",
      "Invitation Gifts",
      "Mehndi Favors",
    ],
  },
  {
    id: "11",
    url: "/music.jpeg",
    name: "Music & Dance ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "DJs, Sangeet Choreographer, Wedding E...",
    color: "bg-white",
    categoriesItems: ["DJs", "Sangeet Choreographer", "Wedding Entertainment"],
  },
  {
    id: "12",
    url: "/food-home.jpg",
    name: "Food ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Catering Services, Cake, Chaat & Food...",
    color: "bg-white",
    categoriesItems: [
      "View All Food",
      "Catering Services",
      "Cake",
      "Chaat & Food Stalls",
      "Bartenders",
      "Home Catering",
    ],
  },
  {
    id: "13",
    url: "/pandit-home.jpeg",
    name: "Pandits ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Wedding Pandits",
    color: "bg-white",
    categoriesItems: ["Wedding Pandits"],
  },
  {
    id: "14",
    url: "/bridal-home.jpg",
    name: "Bridal Grooming ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Spa and Wellness, Beauty and Wellness",
    color: "bg-white",
    categoriesItems: ["Spa and Wellness", "Beauty and Wellness"],
  },
  {
    id: "15",
    url: "/honeymoon-home.jpg",
    name: "Honeymoon ",
    icon: MdArrowDropDown,
    icon2: MdArrowDropUp,
    desc: "Honeymoon Packages",
    color: "bg-white",
    categoriesItems: ["Honeymoon Packages"],
  },
];

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="w-full flex flex-col items-center mb-10 md:mb-24 mt-10 md:mt-0">
      <div className="w-full md:w-5/6 flex justify-between mb-6">
        <div className="text-sm md:text-4xl font-bold ml-2">
          Wedding Categories
        </div>
        <div className="flex text-sm md:text-md font-semibold text-cyan-500 cursor-pointer hover:text-cyan-700">
          View all Categories
          <p className="md:text-2xl text-xl">
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>

      <div className="w-full md:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-4 ">
        {wedCategories.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full ${item.color} border flex items-center pl-6`}
              onClick={() => handleCategoryClick(item.id)}
            >
              <div className="w-full flex flex-col gap-3 text-black">
                <div className="w-full flex text-left text-lg md:text-2xl font-medium">
                  <p>{item.name}</p>
                  {selectedCategory === item.id ? (
                    <MdArrowDropUp className="mt-1" />
                  ) : (
                    <MdArrowDropDown className="mt-1" />
                  )}
                </div>
                <div className="w-full text-left">
                  <p className="text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
              <div
                className="w-5/6 text-2xl font-medium rounded-l-full"
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  height: "130px",
                }}
              ></div>
            </button>
            {selectedCategory === item.id && (
              <div className="grid grid-cols-2 w-full bg-white p-4 gap-8 text-xs md:text-sm">
                {item.categoriesItems.map((categoryItem) => (
                  <p
                    key={categoryItem}
                    className="hover:font-semibold cursor-pointer"
                  >
                    {categoryItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
