// pages/index.tsx

import React from "react";

// data.json

const jsonData = {
  sections: [
    {
      id: "1",
      header: "Know About us",
      content: [
        { id: "6", item: "About us" },
        { id: "7", item: "Contact us" },
        { id: "8", item: "Careers" },
      ],
    },
    {
      id: "2",
      header: "You Need to Know",
      content: [
        { id: "11", item: "Terms & Conditions" },
        { id: "12", item: "Privacy Policy" },
        { id: "13", item: "FAQ" },
        { id: "14", items: "Deals" },
        { id: "9", item: "Partner Login" },
        { id: "10", items: "Cancellation Policy" },
      ],
    },
    {
      id: "3",
      header: "Photo Gallery",
      content: [
        { id: "15", item: "Real Events" },
        { id: "16", item: "Blog" },
        { id: "17", item: "Testimonials" },
        { id: "18", items: "Celeb Event" },
        { id: "19", item: "Shop" },
      ],
    },
  ],
};

const IndexPage: React.FC = () => {
  return (
    <div className=" w-full md:flex md:justify-center items-center mb-6 hidden md:block">
      <div className=" w-full md:w-5/6 md:flex justify-between grid grid-cols-2 px-6 md:px-8 ">
        {jsonData.sections.map((section, index) => (
          <div key={section.id} className="">
            <div className="font-bold text-sm mb-2">{section.header}</div>
            <div className="">
              {section.content.map((item, i) => (
                <div
                  key={item.id}
                  className="flex flex-col text-sm space-y-6 cursor-pointer"
                >
                  {item.item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
