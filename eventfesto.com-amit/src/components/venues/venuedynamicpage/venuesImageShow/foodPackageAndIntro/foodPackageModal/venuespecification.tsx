import { FaHome } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
interface ModalProps {
  onClose: () => void;
}

interface Area {
  id: string;
  type: string;
  capacity: string;
}

const areas: Area[] = Array.from({ length: 20 }, (_, index) => ({
  id: `${index + 1}`,
  type: "Indoor",
  capacity: "225 Stealing | 400 Floating",
}));

const handleClickInsideModal = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  event.stopPropagation();
};

const Index = ({ onClose }: ModalProps) => {
  return (
    <button onClick={handleClickInsideModal} className="overflow-auto w-full">
      <button
        className=" flex justify-end text-slate-500 mb-2 hover:text-slate-700 font-bold py-1 px-2 rounded"
        onClick={onClose}
      >
        <RxCross2 className="" />
      </button>
      <div className="border-2 border-cyan-600 md:border-none overflow-auto h-96 md:h-fit w-full py-2 flex justify-between mb-4 gap-8 px-8">
        {/* Vegetarian and Non-Vegetarian Options */}
        <div className="flex flex-col w-full">
          <h2 className="text-2xl font-bold mb-4 flex text-pink-500">
            Areas Available (7)
          </h2>
          <div className=" w-full grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 ">
            {areas.map((area) => (
              <div
                key={area.id}
                className=" flex justify-center items-center gap-2 w-full"
              >
                <div className="">
                  <p className="flex text-3xl text-gray-300">
                    <FaHome />
                  </p>
                  <p className="text-xs text-gray-400">{area.type}</p>
                </div>
                <div className="flex flex-col items-start text-gray-400">
                  <p className="text-xs">{area.capacity}</p>
                  <p className="text-xs">coral</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};
export default Index;
