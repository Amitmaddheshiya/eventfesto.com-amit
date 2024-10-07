"use client";
const portfolioiImgList = [
  {
    id: "1",
    src: "/img3.jpg",
  },
  {
    id: "2",
    src: "/img3.jpg",
  },
  {
    id: "3",
    src: "/img3.jpg",
  },
  {
    id: "4",
    src: "/img3.jpg",
  },
  {
    id: "5",
    src: "/img3.jpg",
  },
  {
    id: "6",
    src: "/img3.jpg",
  },
  {
    id: "7",
    src: "/img3.jpg",
  },
  {
    id: "8",
    src: "/img3.jpg",
  },
  {
    id: "9",
    src: "/img3.jpg",
  },
];

function index() {
  return (
    <div className="w-full flex-col gap-4 mt-16 mb-10">
      <div className="w-full mb-4 md:text-left text-center">
        <span className="text-xs md:text-2xl font-bold ">
          Venue and Tour & Previous Event Photos Gallery
        </span>
      </div>

      <div className="h-fit md:h-[500px] flex-cols md:flex w-full gap-8">
        <div className="w-full h-full flex-col border">
          <div className="flex w-full justify-between mb-2">
            <div className="border-b-2 border-pink-500 p-2 text-xs font-bold text-pink-500 cursor-pointer">
              Portfolio(345)
            </div>
            <div className="border-b-2 border-gray-500 p-2 text-xs font-bold text-gray-400 cursor-pointer">
              Album(12)
            </div>
            <div className="border-b-2 border-gray-500 p-2 text-xs font-bold text-gray-400 cursor-pointer">
              Video (123)
            </div>
          </div>
          <div className="h-[280px] md:h-[456px] w-full grid grid-cols-3  gap-4 border overflow-y-scroll">
            {portfolioiImgList.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.src}
                  alt="img"
                  className="w-full h-full"
                />
              );
            })}
          </div>
        </div>

        <div className="w-full h-[380px] md:h-[500px] bg-red-600">
          <img src="/makeup-home.jpg" alt="img" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default index;
