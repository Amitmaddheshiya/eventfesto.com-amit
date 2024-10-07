import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AiFillHeart } from "react-icons/ai";
import { IoIosPeople, IoIosStarOutline } from "react-icons/io";
import EInvitationFilter from "./filter";
interface ImageData {
  id: number;
  name: string;
  city: string;
  house: string;
  price: number;
  link: string;
  imgList: [string, string, string];
}

const imagesData: ImageData[] = [
  {
    id: 1,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 100,

    link: "/venues/1",
    imgList: ["/img5.jpg", "/img5.jpg", "/img5.jpg"],
  },
  {
    id: 2,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 200,

    link: "/venues/2",
    imgList: ["/img5.jpg", "/img5.jpg", "/img5.jpg"],
  },
  {
    id: 3,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 300,

    link: "/venues/3",
    imgList: ["/img5.jpg", "/img5.jpg", "/img5.jpg"],
  },
  {
    id: 4,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 300,

    link: "/venues/4",
    imgList: ["/img5.jpg", "/img5.jpg", "/img5.jpg"],
  },
  {
    id: 4,
    name: "Downtown Banquet and Laws",
    city: "Allabad",
    house: "Banquet HalLaw",
    price: 300,

    link: "/venues/5",
    imgList: ["/img5.jpg", "/img5.jpg", "/img5.jpg"],
  },
];

const Index = () => {
  return (
    <div className="mt-12">
      <EInvitationFilter />
      <div className="mt-24 mb-24 w-full flex justify-center">
        <div className="w-5/6">
          <p className="text-center text-xl md:text-3xl font-bold mb-16">
            Premium Card (42)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {imagesData.map((image) => (
              <div
                key={image.id}
                className="border p-3 w-full relative shadow-xl rounded-xl"
              >
                <Carousel className="w-full mb-2">
                  <CarouselContent>
                    {image.imgList.map((item, index) => (
                      <CarouselItem key={`${image.id}-${index}`}>
                        <div className="border  w-full cursor-pointer relative shadow-xl rounded-xl">
                          <img
                            src={item}
                            alt={image.name} // Use name property for alt text
                            className="w-full h-auto  rounded-xl "
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-8" />
                  <CarouselNext className="mr-8" />
                </Carousel>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
