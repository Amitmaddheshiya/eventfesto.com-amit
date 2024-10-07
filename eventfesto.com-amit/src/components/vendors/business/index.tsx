const Index = () => {
  const data: { id: string; name: string; price: string }[] = [
    { id: "1", name: "Events Vendors", price: "100000" },
    { id: "2", name: "Lead everyday", price: "20000" },
    { id: "3", name: "Indian Cities", price: "40+" },
  ];
  return (
    <div className="w-full flex-col justify-center items-center">
      <div
        className="w-full flex justify-center "
        style={{
          width: "100%",
          height: "400px",
          backgroundImage: "url(list-business.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="p-4 mt-5">
          <div className="text-center">
            <p className="text-md md:text-4xl font-bold text-white  font-mono ">
              List Your Business On EventFesto.com
            </p>
            <br />
            <p className="text-md md:text-2xl font-bold text-white  font-sans">
              More Business and Superb Visibility
            </p>
          </div>

          <div className="flex gap-4 md:gap-36 justify-center p-4 mt-12">
            {data.map((name) => (
              <div key={name.id} className="text-center">
                <p className="text-yellow-300 text-xs font-bold md:text-xl">
                  {name.price}
                </p>
                <h1 className="text-center text-xs font-bold md:text-xl text-yellow-50 mt-2">
                  {name.name}
                </h1>
              </div>
            ))}
          </div>
          <p className="text-center text-green-200 text-xs md:text-md mt-12">
            Get thousand of verified leads from all over Indian everyday.grow
            your business and expand
            <br />
            your brand to new customers.
          </p>
        </div>
      </div>
      <div
        className="  justify-center flex"
        style={{
          width: "100%",
          height: "50px",
          backgroundImage: "url(back.jpg)",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" font-bold text-white mt-3 text-xs md:text-lg text-center">
          with over 1000 succesful wedding join us as we cater to our customer's
          Every weddingneed !
        </h1>
      </div>
    </div>
  );
};

export default Index;
