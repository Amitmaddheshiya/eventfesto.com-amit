import Image from "next/image";
import Link from "next/link";
import React from "react";
// Define a type for your image data
type ImageData = {
  id: number;
  src: string;
  name: string;
};
const Index: React.FC = () => {
  const images: ImageData[] = [
    { id: 1, src: "/img1.jpg", name: "Goa" },
    { id: 2, src: "/img2.jpg", name: "Jaipur" },
    { id: 3, src: "/img3.jpg", name: "Udaipur" },
    { id: 4, src: "/img4.jpg", name: "Jodhpur" },
    { id: 5, src: "/img5.jpg", name: "Thailand" },
    { id: 6, src: "/img6.webp", name: "Jim Corbeti" },
  ];
  return (
    <div className="w-4/5 bg-white ml-40 shadow-lg flex flex-wrap">
      <div className=" pr-12 pl-6 py-6 flex flex-col">
        <p className="text-cyan-500 text-lg mb-1">By Type</p>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Banquet Halls
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Lawns / Farmhouses
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Resorts
          </button>
        </Link>

        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Small Function / Party Halls
          </button>
        </Link>

        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Destination Wedding
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Kalyana Mandapam
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            4 Star & Above Hotels
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Venue Concierge Services
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            View all Venues
          </button>
        </Link>
      </div>
      <div className="w-1/4 p-6 bg-cyan-50 flex flex-col">
        <p className="text-cyan-500 text-lg mb-1">By Locality</p>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Chandkheda
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Gandhinagar
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            View all Venues
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Hansol
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            South Bopal
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Vastrapur
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Navrangpura
          </button>
        </Link>
        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            Memnagar
          </button>
        </Link>

        <Link href="">
          <button className="text-gray-500 text-sm mb-1 hover:text-gray-900">
            More
          </button>
        </Link>

        {/* Add more localities here */}
      </div>
      <div>
        <h1 className="pl-6 pt-4">Destination Wedding Venues</h1>
        {/* Map over the images array and render each image and its name */}
        <div className="grid grid-cols-3 p-6 gap-8 pb-8">
          {images.map((image, index) => (
            <div key={image.id} className="flex flex-col items-center">
              <Image
                src={image.src}
                alt={image.name}
                width="200"
                height="50"
                className="w-36 h-32 rounded-md"
              />
              <p className="mt-2">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
