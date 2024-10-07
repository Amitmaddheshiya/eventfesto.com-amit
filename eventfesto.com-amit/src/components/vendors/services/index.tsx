"use client";
import Link from "next/link";

const images: {
  id: string;
  url: string;
  name: string;

  href: string;
}[] = [
  {
    id: "1",
    url: "/statush.jpg",
    name: "Venues",
    href: "/list-business",
  },
  {
    id: "2",
    url: "/statush.jpg",
    name: "Decorators",
    href: "/list-business",
  },
  {
    id: "3",
    url: "/statush.jpg",
    name: "Photographers",
    href: "/list-business",
  },
  {
    id: "4",
    url: "/statush.jpg",
    name: "E-Invites",
    href: "/list-business",
  },
  {
    id: "5",
    url: "/statush.jpg",
    name: "Makeup Artists",
    href: "/list-business",
  },
  {
    id: "6",
    url: "/statush.jpg",
    name: "Transportations",
    href: "/list-business",
  },
  {
    id: "7",
    url: "/statush.jpg",
    name: "Mehandi Artists",
    href: "/list-business",
  },
  {
    id: "8",
    url: "/statush.jpg",
    name: "Dj's",
    href: "/list-business",
  },
  {
    id: "9",
    url: "/statush.jpg",
    name: "Entertainments",
    href: "/list-business",
  },
  {
    id: "10",
    url: "/statush.jpg",
    name: "Choreographers",
    href: "/list-business",
  },
  {
    id: "11",
    url: "/statush.jpg",
    name: "Hospitality",
    href: "/list-business",
  },
  {
    id: "12",
    url: "/statush.jpg",
    name: "Jewellery",
    href: "/list-business",
  },
  {
    id: "13",
    url: "/statush.jpg",
    name: "Wedding Wear",
    href: "/list-business",
  },
  {
    id: "14",
    url: "/statush.jpg",
    name: "Gifts",
    href: "/list-business",
  },
  {
    id: "15",
    url: "/statush.jpg",
    name: "Honeymoons",
    href: "/list-business",
  },
  {
    id: "16",
    url: "/statush.jpg",
    name: "Pandits",
    href: "/list-business",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-md md:text-4xl mb-3">Choose your services</h1>
      <div className="bg-pink-500 h-1 w-48 mb-4 md:mb-10"></div>
      <div className="w-full md:w-4/6 grid grid-cols-2 md:grid-cols-4 bg-cyan-200 p-1 md:p-2">
        {images.map((item, index) => (
          <div
            key={item.id}
            className="w-full h-40 md:h-48 flex justify-center items-center"
          >
            <Link href={item.href} passHref className="w-full h-40 md:h-48">
              <div
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="md:border-4 border-2 border-cyan-200  w-full h-full hover:transform hover:scale-110  flex justify-end flex-col items-start cursor-pointer  bg-white p-2 mb-2 mr-2"
              >
                {/* Wrap the children inside a single parent element */}
                <div className="w-full h-full flex justify-start items-end">
                  <p
                    style={{ textShadow: "2px 2px 4px red" }}
                    className="text-black text-sm md:text-md font-bold mt-2"
                  >
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
