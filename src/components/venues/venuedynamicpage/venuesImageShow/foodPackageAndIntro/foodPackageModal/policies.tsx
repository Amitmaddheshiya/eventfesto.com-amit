import { RxCross2 } from "react-icons/rx";
interface ModalProps {
  onClose: () => void;
}

interface Policy {
  id: string;
  heading: string;
  details: string[];
}

const policies: Policy[] = [
  {
    id: "1",
    heading: "Timings & Slots",
    details: [
      "(Venue close at 11 PM)",
      "Morning - 9:00 AM - 3:00 PM",
      "Evening - 5:00 PM - 11:00 PM",
    ],
  },
  {
    id: "2",
    heading: "Changing Room at",
    details: ["No. of complimentary changing rooms: 2", "Changing Room A/C"],
  },
  {
    id: "3",
    heading: "Advance",
    details: [
      "25% at the time of booking",
      "Advance can be adjusted against future",
      "bookings in 6 months.",
    ],
  },
  {
    id: "4",
    heading: "Taxes",
    details: ["Taxes F&B : 18.00 %"],
  },
  {
    id: "5",
    heading: "Parking At",
    details: [
      "Valet provided by venue",
      "Parking space available for 40 vehicles",
    ],
  },
  {
    id: "6",
    heading: "Cancellation",
    details: ["Non cancellable"],
  },
  {
    id: "7",
    heading: "Lodging",
    details: [
      "Rooms Available",
      "No. of rooms:42",
      "Average price of room: Rs. 4000 /-",
    ],
  },
  {
    id: "8",
    heading: "Alcohol",
    details: [
      "Alcohol allowed at the venue",
      "Outside alcohol allowed at the venue",
      "Corkage costs applicable",
    ],
  },
  {
    id: "9",
    heading: "Other Policies",
    details: [
      "No Music allowed late",
      "Halls are air conditioned",
      "Ample parking",
      "Baarat allowed",
      "No fire crackers allowed",
      "Hawan allowed",
      "Overnight wedding allowed",
    ],
  },
  {
    id: "10",
    heading: "Food",
    details: [
      "Food provided by the venue",
      "Outside food/caterer allowed at the venue",
      "No Non-Veg allowed at the venue",
      "Catering Royalty per plate is Rs 50",
    ],
  },
  {
    id: "11",
    heading: "Decoration",
    details: [
      "No Outside decorators allowed",
      "Decoration starting costs at Rs 15000",
      "Decor provided by the venue",
    ],
  },
];
const handleClickInsideModal = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  event.stopPropagation();
};
const Index = ({ onClose }: ModalProps) => {
  return (
    <button
      className=" md:h-fit h-96 overflow-auto w-full flex flex-col"
      onClick={handleClickInsideModal}
    >
      <button
        className="border bg-gray-400 text-white flex justify-end text-slate-500 mb-2 hover:text-slate-700 font-bold py-1 px-2 rounded"
        onClick={onClose}
      >
        <RxCross2 className="" />
      </button>
      <div className="border-2 border-cyan-600 md:border-none w-full h-fit flex justify-center mb-4 gap-8 px-8 py-2 overflow-auto h-96 md:h-fit">
        {/* Vegetarian and Non-Vegetarian Options */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 flex text-pink-500">
            Venue Policies
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-28 md:gap-y-4 gap-y-10 ">
            {policies.map((policy, index) => (
              <div key={policy.id} className="">
                <h3 className="text-md font-bold font-mono flex">
                  {policy.heading}
                </h3>
                {policy.details.map((detail, idx) => (
                  <p key={detail} className="text-sm font-sans flex">
                    <span className="text-pink-500 mr-1">•</span>
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};
export default Index;
