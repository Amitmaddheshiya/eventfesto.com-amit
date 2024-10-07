import { ReactNode } from "react";
import { FaChartLine, FaHandshake } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";

interface Item {
  id: number;
  icon: ReactNode;
  text: string;
}

const data: Item[] = [
  {
    id: 1,
    icon: <FaHandshake size="65" />,
    text: "Solving Problem",
  },
  {
    id: 2,
    icon: <GiStrong size="65" />,
    text: "Influencing People",
  },
  {
    id: 3,
    icon: <FaChartLine size="65" />,
    text: "Creating Impact",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 md:p-12 bg-orange-50">
      <h1 className="text-sm md:text-4xl mb-2">
        Register as a New Vendors On Eventfesto
      </h1>
      <div className="bg-pink-500 h-1 w-full md:w-96 mb-8"></div>
      <p className="text-gray-600 text-center text-xs md:text-xl">
        We are the largest classified platform for wedding services in the
        industry.
        <br className="hidden md:block" />
        By partnering with us, you can.
      </p>
      <div className="flex gap-4 md:gap-44 my-6 md:my-20">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="flex justify-center items-center border hover:bg-white hover:text-cyan-500 p-2 md:p-8 text-white hover:border-cyan-500 bg-cyan-400 rounded-full w-16 h-16 md:w-32 md:h-32">
              {item.icon}
            </div>
            <h1 className="text-center text-gray-700 text-xs md:text-xl mt-6">
              {item.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
