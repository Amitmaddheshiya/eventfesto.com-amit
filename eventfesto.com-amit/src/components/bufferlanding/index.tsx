"use client";
const BufferPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black">
      {/* EventFesto Logo */}
      <div className="flex flex-col items-center justify-center">
        <div className=" flex bg-cyan-400 rounded-full">
          <div className="flex items-center justify-center -rotate-45 h-20 w-20  bg-white m-8">
            <h1 className="text-6xl text-cyan-400 font-serif rotate-45">E</h1>
          </div>
        </div>
        <p className=" font-bold text-3xl mt-4 text-cyan-400">Eventfesto.com</p>
      </div>

      {/* Buffer Content */}

      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-xl font-bold mb-2 text-white">
          Welcome to EventFesto
        </h1>
        <p className="text-lg text-center font-serif mb-6 text-cyan-400">
          Step into the world’s paramount event platform, where moments become
          memories.
        </p>
      </div>
    </div>
  );
};

export default BufferPage;
