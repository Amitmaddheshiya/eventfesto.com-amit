"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AiFillHeart } from "react-icons/ai";
import Filter from "./e-invitation-filter";
interface ImageData {
  id: number;
  name: string;
  price: number;

  imgList: [string, string, string];
}

const imagesData: ImageData[] = [
  {
    id: 1,
    name: "Image 1",
    price: 100,

    imgList: ["/card1.jpg", "/card2.jpg", "/card3.jpg"],
  },
  {
    id: 2,
    name: "Image 2",
    price: 200,
    imgList: ["/card2.jpg", "/card3.jpg", "/card4.jpg"],
  },
  {
    id: 3,
    name: "Image 3",
    price: 300,
    imgList: ["/card1.jpg", "/card2.jpg", "/card3.jpg"],
  },
  {
    id: 4,
    name: "Image 4",
    price: 300,
    imgList: ["/card3.jpg", "/card4.jpg", "/card1.jpg"],
  },
  {
    id: 5,
    name: "Image 5",
    price: 400,

    imgList: ["/card4.jpg", "/card2.jpg", "/card3.jpg"],
  },
];

const Index = () => {
  return (
    <div className="mt-12">
      <Filter />
      <div className="my-5 w-full h-fit flex justify-center mt-24 mb-24">
        <div className="w-5/6">
          <h1 className="text-center text-3xl font-bold mb-16">
            E-Invitation Card
          </h1>
          <div className="w-full h-fit  grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {imagesData.map((image) => (
              <div
                key={image.id}
                className={`border p-3 w-full  relative shadow-xl rounded-xl `}
              >
                <Carousel className="w-full mb-2">
                  <CarouselContent>
                    {image.imgList.map((item, index) => (
                      <CarouselItem key={`${image.id}-${index}`}>
                        <div className=" h-[420px] w-full cursor-pointer relative  rounded-xl">
                          <img
                            src={item}
                            alt={image.name} // Use name property for alt text
                            className="w-full h-full   rounded-xl"
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

                <div className="flex items-center justify-between">
                  <p className="text-lg text-red-400 font-bold">{`₹${image.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
