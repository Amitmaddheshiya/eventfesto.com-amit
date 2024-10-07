"use client";
import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import "./style-filter/filter.css";

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
    label: "Locality",
    values: [
      "Bodakedev",
      "S P Ring Road",
      "Taltej",
      "Ellisbridge",
      "Ashram Road",
    ],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 2,
    label: "No. of Guests",
    values: ["<100", "100-250", "250-500", "500-1000", "> 1000"],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 3,
    label: "Price per Plate",
    values: [
      "< ₹ 1K",
      "₹ 1K - ₹ 1.5K",
      "₹ 1.5K - ₹ 2K",
      "₹ 2K - ₹ 3K",
      "> ₹ 3K",
      "Rental",
      "Price on Request",
    ],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 4,
    label: "Rental Cost",
    values: [
      "< ₹ 25K",
      "₹ 25K - ₹ 50K",
      "₹ 50K - ₹ 1L",
      "₹ 1L - ₹ 2L",
      "> 2L- ₹ 5L",
      ">₹ 5L",
    ],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 5,
    label: "Space",
    values: ["Indoor", "Outdoor", "Poolside", "Terrace"],
    Icon: MdArrowDropDown,
    Icon2: MdArrowDropUp,
  },
  {
    id: 6,
    label: "Room Count",
    values: ["<30", "30-60", "61-100", "100 - 200", "200 - 1000"],
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
];

const Navbar: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const showVenueFilter = () => setShowFilter(!showFilter);

  const [selectedItems, setSelectedItems] = useState<{ [key: number]: string }>(
    {}
  );

  const handleItemClick = (itemId: number, value: string) => {
    if (selectedItems[itemId] === value) {
      // Deselect the item if already selected
      const updatedSelections = { ...selectedItems };
      delete updatedSelections[itemId];
      setSelectedItems(updatedSelections);
    } else {
      // Select the item
      setSelectedItems({ ...selectedItems, [itemId]: value });
    }
  };

  const clearSelection = () => {
    setSelectedItems({});
  };

  return (
    <div className=" h-fit mb-6 mt-12 w-full flex flex-col items-center shadow-sm">
      <nav className="h-fit flex w-full border-t  justify-center bg-lime-50 shadow-sm shadow-b-gray-500/50 px-2 py-1 text-black">
        <ul className="h-fit gap-4 w-full md:flex md:justify-between grid grid-cols-2 ">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="flex justify-center items-center border-2 border-cyan-500 rounded-3xl p-2"
            >
              <button
                onClick={() => {
                  showVenueFilter();
                }}
                className={`text-xs md:text-sm font-medium md:font-semibold flex items-center space-x-1 hover:text-cyan-500`}
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
        <div className="border w-full h-fit bg-lime-50  border border-gray-200 bg-white p-4 md:max-h-96 md:overflow-y-auto shadow-sm shadow-gray-500/50 transition-all duration-300">
          <div className="h-fit md:flex md:justify-between  grid grid-cols-2 gap-4 mr-2 py-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                className={`text-xs md:text-sm font-medium  border-2 border-cyan-500 rounded-xl p-2 md:border-none ${
                  item.label === "Price per Plate" ||
                  item.label === "Venue Type"
                    ? "scrollableSection"
                    : ""
                }`}
              >
                <div>{/* Display label */}</div>
                <div className="max-h-32 overflow-y-auto">
                  {item.values.map((value) => (
                    <div key={value} className="pb-1">
                      <label>
                        <button
                          className={`mx-2 cursor-pointer ${
                            selectedItems[item.id] === value
                              ? "text-cyan-500"
                              : ""
                          }`}
                          onClick={() => handleItemClick(item.id, value)}
                        >
                          {value}
                        </button>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex item-center justify-center gap-6 mt-10">
            <button
              className="border py-2 px-6 hover:bg-black border-black hover:text-white"
              onClick={clearSelection}
            >
              Reset
            </button>
            <button className="border border-cyan-500 py-2 px-3 hover:bg-cyan-500 hover:text-white">
              View Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
