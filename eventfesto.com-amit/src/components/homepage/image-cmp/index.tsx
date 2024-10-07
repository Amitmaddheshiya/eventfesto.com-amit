"use client";

// rest of the code

function Image() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div
          className="w-full border-r-0 border-cyan-500 bg-no-repeat bg-center mb-12"
          style={{
            backgroundImage: "url(/imgcmp.jpg)",
            backgroundSize: "cover",
            height: "500px",
            width: "100%",
          }}
        ></div>
        <div
          className="w-full h-full flex flex-col justify-center items-center "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)", // Adding shadow
          }}
        >
          <h1 className="text-xl md:text-4xl font-bold">
            India's Largest{" "}
            <span className="text-cyan-500">Event Management</span> Platform
          </h1>
          <p className="mt-4 text-white font-sans text-sm md:text-lg font-bold">
            Hire best Vendors such as Venues, Photographers, e-Invites,
            Hospitality, Caterers and so on.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Image;
