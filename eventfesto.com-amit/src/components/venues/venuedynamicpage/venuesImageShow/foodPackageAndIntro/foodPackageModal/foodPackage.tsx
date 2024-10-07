import { PiSquareLogoFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
interface ModalProps {
  onClose: () => void;
}

const silverVegItems: {
  foodItem: string;
  id: string;
}[] = [
  {
    foodItem: "1 Welcome Drink",
    id: "1",
  },
  {
    foodItem: "1 Soup",
    id: "2",
  },
  {
    foodItem: "2 Veg Snacks",
    id: "3",
  },
  {
    foodItem: "2 Salad",
    id: "4",
  },
  {
    foodItem: "1 Paneer",
    id: "5",
  },
  {
    foodItem: "1 Vegetable",
    id: "6",
  },
  {
    foodItem: "1 Dal",
    id: "7",
  },
  {
    foodItem: "1 Rice",
    id: "8",
  },
  {
    foodItem: "2 Breads",
    id: "9",
  },
  {
    foodItem: "1 Raita",
    id: "10",
  },
  {
    foodItem: "1 Dessert Hot",
    id: "11",
  },
  {
    foodItem: "0 Dessert Cold",
    id: "12",
  },
  {
    foodItem: "1 Ice Cream",
    id: "13",
  },
];

const goldVegItems: {
  foodItem: string;
  id: string;
}[] = [
  {
    foodItem: "2 Welcome Drink",
    id: "14",
  },
  {
    foodItem: "2 Soup",
    id: "15",
  },
  {
    foodItem: "3 Veg Snacks",
    id: "16",
  },
  {
    foodItem: "3 Salad",
    id: "17",
  },
  {
    foodItem: "1 Paneer",
    id: "18",
  },
  {
    foodItem: "2 Vegetable",
    id: "19",
  },
  {
    foodItem: "1 Dal",
    id: "20",
  },
  {
    foodItem: "1 Rice",
    id: "21",
  },
  {
    foodItem: "3 Breads",
    id: "22",
  },
  {
    foodItem: "1 Raita",
    id: "23",
  },
  {
    foodItem: "1 Dessert Hot",
    id: "24",
  },
  {
    foodItem: "1 Dessert Cold",
    id: "25",
  },
  {
    foodItem: "1 Ice Cream",
    id: "26",
  },
];

const platinumVegItems: {
  foodItem: string;
  id: string;
}[] = [
  {
    foodItem: "3 Welcome Drink",
    id: "27",
  },
  {
    foodItem: "2 Soup",
    id: "28",
  },
  {
    foodItem: "4 Veg Snacks",
    id: "29",
  },
  {
    foodItem: "3 Salad",
    id: "30",
  },
  {
    foodItem: "1 Paneer",
    id: "31",
  },
  {
    foodItem: "3 Vegetable",
    id: "32",
  },
  {
    foodItem: "1 Dal",
    id: "33",
  },
  {
    foodItem: "1 Rice",
    id: "34",
  },
  {
    foodItem: "4 Breads",
    id: "35",
  },
  {
    foodItem: "1 Raita",
    id: "36",
  },
  {
    foodItem: "2 Dessert Hot",
    id: "37",
  },
  {
    foodItem: "1 Dessert Cold",
    id: "38",
  },
  {
    foodItem: "1 Ice Cream",
    id: "39",
  },
];

const accompaniments: { name: string; id: string }[] = [
  { name: "Papad", id: "40" },
  { name: "Pickels", id: "41" },
  { name: "Chutney", id: "42" },
];

const tierLabels = ["Silver", "Gold", "Platinum"];
const tierPrices = ["INR 1099 + Taxes", "INR 1299 + Taxes", "INR 1499 + Taxes"];

const tierBackgroundColors = ["bg-gray-400", "bg-amber-500", "bg-slate-500"];
const handleClickInsideModal = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  event.stopPropagation();
};

const Modal = ({ onClose }: ModalProps) => {
  return (
    <button className="  w-full" onClick={handleClickInsideModal}>
      <button
        className="flex justify-end text-slate-500 mb-2 hover:text-slate-700 font-bold py-1 px-2 rounded"
        onClick={onClose}
      >
        <RxCross2 className="" />
      </button>
      <div className=" w-full h-fit flex justify-between mb-6 gap-8 px-8 ">
        {/* Vegetarian and Non-Vegetarian Options */}
        {["Vegetarian"].map((type, index) => (
          <div key={type} className="flex flex-col w-full">
            <div
              className={`flex justify-center items-center rounded-t-md p-1 gap-2 ${
                type === "Vegetarian" ? "bg-green-200" : "bg-red-200"
              } text-sm md:text-xl font-bold text`}
            >
              <PiSquareLogoFill className="text-green-500" />
              {type}
            </div>
            <div className="w-full md:flex grid grid-cols-1 h-96 md:h-fit overflow-auto">
              {/* Render Silver, Gold, Platinum Options */}
              {[silverVegItems, goldVegItems, platinumVegItems].map(
                (items, tierIndex) => (
                  <div
                    key={items[0].id}
                    className="w-full flex flex-col border shadow-lg"
                  >
                    <div
                      className={`w-full flex flex-col border-t-4 border-green-500 rounded-t-md items-center ${tierBackgroundColors[tierIndex]}`}
                    >
                      <p className="w-full text-center text-white text-sm md:text-lg font-bold font-mono border-b border-yellow-300">
                        {tierLabels[tierIndex]}
                      </p>
                      <p className="w-full text-center text-white text-sm md:text-lg font-bold font-mono border-t border-yellow-300">
                        {tierPrices[tierIndex]}
                      </p>
                    </div>
                    <div className="w-full flex flex-col items-center">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="w-full flex justify-center border-b p-1"
                        >
                          <p className="text-xs font-medium md:font-bold">
                            {item.foodItem}
                          </p>
                        </div>
                      ))}
                      {/* Render Accompaniments */}
                      <div className="w-full">
                        <p
                          className={`w-full text-center text-white text-lg font-bold font-mono ${tierBackgroundColors[tierIndex]}`}
                        >
                          Accompaniments
                        </p>
                        {accompaniments.map((item, index) => (
                          <p
                            key={item.id}
                            className={`w-full text-center text-xs font-bold ${
                              index === accompaniments.length - 1
                                ? ""
                                : "border-b"
                            } p-1`}
                          >
                            {item.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </button>
  );
};
export default Modal;
