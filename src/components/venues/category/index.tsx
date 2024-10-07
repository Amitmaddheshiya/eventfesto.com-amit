import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { IoIosPeople, IoIosStarOutline } from "react-icons/io";
interface ImageData {
  id: number;
  name: string;
  city: string;
  house: string;
  price: number;
  imageUrl: string;
  link: string;
}

const imagesData: ImageData[] = [
  {
    id: 1,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 100,
    imageUrl: "/img5.jpg",
    link: "/venues/1",
  },
  {
    id: 2,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 200,
    imageUrl: "/img2.jpg",
    link: "/venues/2",
  },
  {
    id: 3,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 300,
    imageUrl: "/img5.jpg",
    link: "/venues/3",
  },
  {
    id: 4,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 300,
    imageUrl: "/img5.jpg",
    link: "/venues/4",
  },
  {
    id: 5,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 300,
    imageUrl: "/img5.jpg",
    link: "/venues/5",
  },
];

const Index = () => {
  return (
    <div className="mt-24 mb-24 w-full flex justify-center">
      <div className="w-5/6">
        <p className="text-center text-xl md:text-3xl font-bold mb-16">
          Venues in Allahabad (42)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {imagesData.map((image) => (
            <Link href={image.link} key={image.id}>
              <div className="border cursor-pointer p-3 relative shadow-xl rounded-xl">
                <img
                  src={image.imageUrl}
                  alt={image.name}
                  className="w-full h-auto mb-2 rounded-xl "
                />
                <div className="absolute top-2 left-2 p-2">
                  <img src="/star.png" alt="star" className="w-10 h-10" />
                </div>
                <div className="absolute top-2 right-2 p-2">
                  <AiFillHeart className="w-10 h-10 text-white" />
                </div>

                <div className="flex justify-between">
                  <p className="text-sm font-semibold text-black">
                    {image.name}
                  </p>
                  <div className="flex items-center justify-center p-1 text-xs bg-green-700 text-white">
                    <IoIosStarOutline className="w-4 h-4 text-white" />
                    <p>4.1</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">{image.city}</p>
                  <div className="flex items-center gap-2 text-xs justify-center p-1">
                    <IoIosPeople className="w-6 h-6 text-cyan-400" />
                    <p className="font-bold">200-1000 completed</p>
                  </div>
                </div>
                <p className="text-xs -mt-2 text-gray-500">{image.house}</p>

                <div className="flex items-center justify-between">
                  <p className="text-lg text-red-400 font-bold">{`₹${image.price}`}</p>
                  <p className="text-xs">Per Plate (Veg)</p>
                </div>
                <button className="border text-red-400 border-red-400 justify-center w-full py-1 mt-2 rounded-sm">
                  Send Enquiry
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
