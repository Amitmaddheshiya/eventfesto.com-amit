import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Index = () => {
  return (
    <div className="w-full flex justify-center mt-12 md:mt-24 mb-12 md:mb-28 bg-gray-50">
      <div className="w-full md:w-5/6 flex flex-col items-center">
        <h1 className="text-md md:text-4xl mb-3 -b-4 border-b-4 border-pink-600 p-2">
          What Our Partners Say
        </h1>

        <div className="w-full flex flex-col bg-gray-100 p-2  md:p-12 gap-6">
          <div className=" w-full md:flex grid grid-cols-1 gap-4 md:gap-8">
            <div className="w-full md:w-1/6  flex flex-col items-end">
              <p className="text-md">Kohinoor</p>
              <p className="text-md ">Continental</p>
              <p className="text-xs text-gray-700 ">Mumbai</p>
            </div>

            <div className="w-full md:w-4/6 bg-white p-6 rounded-lg relative">
              <IoMdArrowDropleft className="absolute top-0 -left-8 text-6xl text-white hidden md:block" />
              <span className="text-sm">
                It is a very commendable to have assosiated with eventfesto.com
                for last so many month. It has really helped us to increase our
                business in terms of banquet bookings
              </span>
            </div>
            <div className="w-1/6 hidden md:block"></div>
          </div>

          <div className=" w-full md:flex grid grid-cols-1 gap-4 md:gap-8">
            <div className="w-1/6 hidden md:block flex flex-col items-end"></div>

            <div className="w-full md:w-4/6 bg-white p-6 rounded-lg relative">
              <span className="text-sm">
                Eventfesto.com has been very supportive in our endeavor to
                capture the market for Banquets in Lokhandwala, Andheri. Your
                staff has been actively and aggressively sending us Banquet
                Enquirers which has been of great help to us. Eventfesto.com has
                been of immense value to our property for which we thank you
                profusely and sincerely hope that our association will continue
                for a long time.
              </span>
              <IoMdArrowDropright className="hidden md:block absolute top-0 -right-8 text-6xl text-white" />
            </div>
            <div className="w-full md:w-1/6 flex flex-col items-start">
              <p className="text-md ">Flags</p>
              <p className="text-xs text-gray-700 ">Andheri, Mumbai</p>
            </div>
          </div>

          <div className=" w-full md:flex grid grid-cols-1 gap-4 md:gap-8">
            <div className="w-full md:w-1/6 flex flex-col items-end">
              <p className="text-md">Salim Khan</p>
              <p className="text-xs text-gray-700">Photography</p>
            </div>

            <div className="w-full md:w-4/6 bg-white p-6 rounded-lg relative">
              <IoMdArrowDropleft className="hidden md:block absolute top-0 -left-8 text-6xl text-white" />
              <span className="text-sm">
                Getting me onboard when I was offboarding from all third party
                websites took a lot of convincing from Eventfesto.com. My
                presence on Weddingz for over a year is itself a testimony of
                how Professional, Dependable, Hardworking and Honest they are.
              </span>
            </div>
            <div className="w-1/6 hidden md:block"></div>
          </div>

          <div className=" w-full md:flex grid grid-cols-1 gap-4 md:gap-8">
            <div className="w-1/6 hidden md:block flex flex-col items-end"></div>

            <div className="w-full md:w-4/6 bg-white p-6 rounded-lg relative">
              <span className="text-sm">
                We get it, wedding planning isn't always a walk in the park!
                There are hard decisions to make, and it can be hard to please
                everyone. You hope to remain level-headed throughout the
                process. Eventfesto.com reciprocates this sentiment and more. As
                a vendor we never felt like we were walking alone. The entire
                team of Eventfesto.com involves itself from start to finish.
                What impresses us and what is so awesome is their in depth
                knowledge on the subject from design to execution, planning to
                process, and start to finish. We at Hastakshar events management
                pvt Ltd wish a very happy and long term relationship with team
                Eventfesto.com
              </span>
              <IoMdArrowDropright className="hidden md:block absolute top-0 -right-8 text-6xl text-white" />
            </div>
            <div className="w-full md:w-1/6 flex flex-col items-start">
              <p className="text-md ">Tanveer Ahmed</p>
              <p className="text-xs text-gray-700 ">Hastakshar Events(Decor)</p>
            </div>
          </div>

          <div className="w-full md:flex grid grid-cols-1 gap-4 md:gap-8">
            <div className="w-full md:w-1/6 flex flex-col items-end">
              <p className="text-md">Anand Mertia,</p>
              <p className="text-md"> Managing Director</p>
              <p className="text-xs text-gray-700 ">Magnum Arena,Bangalore</p>
            </div>

            <div className="w-full md:w-4/6 bg-white p-6 rounded-lg relative">
              <IoMdArrowDropleft className="hidden md:block absolute top-0 -left-8 text-6xl text-white" />
              <span className="text-sm">
                We are happy with the services provided by Eventfesto.com . From
                site recce to closure, your staff is very helpful and
                understands the wedding market upto the mark! One of the best
                portals we have worked with till date. Keep up the good work!
                Cheers!
              </span>
            </div>
            <div className="w-1/6 hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
