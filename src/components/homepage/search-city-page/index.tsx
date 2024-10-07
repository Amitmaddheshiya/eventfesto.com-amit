// pages/index.tsx
"use client";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

const cities = [
  {
    category: "Top Cities",
    names: [
      "All cities",
      "Delhi NCR",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Kolkata",
      "Lucknow",
      "Jaipur",

      "All cities",
      "Delhi NCR",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Kolkata",
      "Lucknow",
      "Jaipur",
    ],
  },
  {
    category: "Popular Cities",
    names: [
      "Gurgaon",
      "Goa",
      "Udaipur",
      "Ahmedabad",
      "Indore",
      "Chandigarh",
      "Agra",
      "Kanpur",
      "Jodhpur",
      "Bhopal",
    ],
  },
  {
    category: "Other Cities",
    names: [
      "Nagpur",
      "Dehradun",
      "Thane",
      "Surat",
      "Vadodara",
      "Visakhapatnam",
      "Raipur",
      "Coimbatore",
      "Ranchi",
      "Mysore",
    ],
  },
  {
    category: "International Cities",
    names: [
      "New York",
      "Arizona",
      "Dubai",
      "Thailand",
      "USA",
      "Canada",
      "Australia",
      "UK",
      "Srilanka",
      "London",
    ],
  },
];

interface ComponentProps {
  onSelectCity: (city: string) => void;
  // other props
}
const Index: React.FC<ComponentProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = cities
    .map((category) => ({
      category: category.category,
      names: category.names.filter((city) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.names.length > 0);

  return (
    <div className="md:w-[1000px] md:h-[470px] w-[300px] h-[400px]  mt-12 bg-white rounded-lg text-left  shadow-xl transform transition-all ">
      <div className="border md:w-[1000px] md:h-[470px] w-[300px] h-[400px] px-10 py-8 bg-white rounded-lg text-left overflow-auto  transform transition-all ">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search cities..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-8 pl-10 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-4 mb-7 flex items-center  pointer-events-none">
            <MdOutlineSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="md:flex md:gap-32 grid grid-cols-2">
          {filteredCities.map((category) => (
            <div key={category.category} className="">
              <h4 className="text-md font-bold text-cyan-500 mb-2">
                {category.category}
              </h4>
              <ul className="mb-4 space-y-2 mt-4">
                {category.names.map((city) => (
                  <li key={city} className="text-sm text-gray-900">
                    <button
                      className="cursor-pointer hover:font-semibold"
                      onClick={() => props.onSelectCity(city)}
                    >
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
