"use client";
import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

interface NavItem {
  id: number;
  label: string;
  values: string[];
  Icon: React.ElementType;
  Icon2: React.ElementType;
}

const navItems: NavItem[] = [
  {
    id: 1,
    label: "Sort By",
    values: ["Trending", "Newest"],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 2,
    label: "Order Quantity",
    values: ["<30", "30-50", "50-100", "100-150", ">150"],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 3,
    label: "Price per card(Printed)",
    values: [
      "50-100",
      "100-200",
      "200-400",
      ">400",
      "<50",
      "Design Cost Only",
      "On Request",
    ],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 4,
    label: "Culture",
    values: [
      "Hindu",
      "South Indian",
      "Muslim",
      "Christian",
      "Marathi",
      "Bengali",
      "Punjabi",
      "Rajasthani",
      "Generic",
      "Gujarati",
    ],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 5,
    label: "Review count",
    values: ["<5 revlews>", "5+ revlews ", "15+ revlews", "30+ revlews"],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 6,
    label: "Specialty",
    values: ["Unboxed Invites", "Boxed Nnvites"],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 7,
    label: "Rating",
    values: ["All Ratings", "Rated <4", "Rated 4+", "Rated 4.5+", "Rated 4.8+"],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 8,
    label: "Theme",
    values: [
      "Traditional",
      "Elegant",
      "Caricature",
      "Royal",
      "Luxury",
      "Photo",
      "Quirky",
      "Floral",
      "Beach",
      "With God Photos",
      "Pastel",
    ],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
];

const Navbar: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{
    [key: number]: string | string[];
  }>({});

  const showVenueFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleRadioChange = (itemId: number, value: string) => {
    setSelectedItems({ ...selectedItems, [itemId]: value });
  };

  const handleCheckboxChange = (itemId: number, value: string) => {
    const currentValues = (selectedItems[itemId] as string[]) || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((val) => val !== value)
      : [...currentValues, value];
    setSelectedItems({ ...selectedItems, [itemId]: updatedValues });
  };

  const clearSelection = () => {
    const updatedSelectedItems: { [key: number]: string | string[] } = {};
    navItems.forEach((item) => {
      updatedSelectedItems[item.id] = "";
    });
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div>
      <nav className="h-fit flex w-full border-t  justify-center bg-lime-50 shadow-sm shadow-b-gray-500/50 px-2 py-1 text-black">
        <ul className="h-fit gap-4 md:pl-6 md:gap-20 w-full md:flex md:justify-start grid grid-cols-2 ">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="flex justify-center items-center border-2 border-cyan-500 rounded-3xl p-2"
            >
              <button
                onClick={() => {
                  showVenueFilter();
                }}
                className={`text-xs md:text-xs font-medium md:font-medium flex items-center space-x-1 hover:text-cyan-500`}
              >
                <span className={selectedItems[item.id] ? "text-cyan-500" : ""}>
                  {item.label}
                </span>
                {showFilter ? (
                  <item.Icon
                    className={
                      selectedItems[item.id]
                        ? "text-cyan-500 text-2xl"
                        : "text-2xl"
                    }
                  />
                ) : (
                  <item.Icon2 className="text-2xl" />
                )}
              </button>
            </button>
          ))}
        </ul>
      </nav>
      {showFilter && (
        <div className="border w-full h-fit bg-lime-50  border border-gray-200  p-4 md:max-h-96 md:overflow-y-auto shadow-sm shadow-gray-500/50 transition-all duration-300">
          <div className="md:flex md:justify-around grid grid-cols-2 py-2 gap-4">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="text-sm text-xs md:text-sm font-medium  border-2 border-cyan-500 rounded-xl p-2 md:border-none"
              >
                <div style={{ maxHeight: "120px", overflowY: "auto" }}>
                  {item.values.map((value) => (
                    <div key={value} className="pb-1">
                      <label>
                        {item.id === 1 || item.id === 4 || item.id === 5 ? (
                          <input
                            type="radio"
                            className="mx-2"
                            checked={selectedItems[item.id] === value}
                            onChange={() => handleRadioChange(item.id, value)}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="mx-2"
                            checked={(
                              selectedItems[item.id] as string[]
                            )?.includes(value)}
                            onChange={() =>
                              handleCheckboxChange(item.id, value)
                            }
                          />
                        )}
                        {value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex item-center justify-center gap-6 mt-10">
            <button
              className="border py-2 px-6 hover:bg-cyan-500 border-cyan-500 hover:text-white"
              onClick={clearSelection}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
