"use client";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import MenuTable from "./MenuTable";

type MenuItem = {
  id: number;
  category: string;
  silver: string;
  gold: string;
  platinum: string;
};

const initialMenuItems: MenuItem[] = [
  {
    id: 1,
    category: "Price",
    silver: "INR 1099 + Taxes",
    gold: "INR 1299 + Taxes",
    platinum: "INR 1499 + Taxes",
  },
  {
    id: 2,
    category: "Welcome Drink",
    silver: "1 Welcome Drink",
    gold: "2 Welcome Drink",
    platinum: "3 Welcome Drink",
  },
  {
    id: 3,
    category: "Soup",
    silver: "1 Soup",
    gold: "2 Soup",
    platinum: "2 Soup",
  },
  {
    id: 4,
    category: "Veg Snacks",
    silver: "2 Veg Snacks",
    gold: "3 Veg Snacks",
    platinum: "4 Veg Snacks",
  },
  {
    id: 5,
    category: "Salad",
    silver: "2 Salad",
    gold: "3 Salad",
    platinum: "3 Salad",
  },
  {
    id: 6,
    category: "Paneer",
    silver: "1 Paneer",
    gold: "1 Paneer",
    platinum: "1 Paneer",
  },
  {
    id: 7,
    category: "Vegetable",
    silver: "1 Vegetable",
    gold: "2 Vegetable",
    platinum: "3 Vegetable",
  },
  {
    id: 8,
    category: "Dal",
    silver: "1 Dal",
    gold: "1 Dal",
    platinum: "1 Dal",
  },
  {
    id: 9,
    category: "Rice",
    silver: "1 Rice",
    gold: "1 Rice",
    platinum: "1 Rice",
  },
  {
    id: 10,
    category: "Breads",
    silver: "2 Breads",
    gold: "3 Breads",
    platinum: "4 Breads",
  },
  {
    id: 11,
    category: "Raita",
    silver: "1 Raita",
    gold: "1 Raita",
    platinum: "1 Raita",
  },
  {
    id: 12,
    category: "Dessert Hot",
    silver: "1 Dessert Hot",
    gold: "1 Dessert Hot",
    platinum: "2 Dessert Hot",
  },
  {
    id: 13,
    category: "Dessert Cold",
    silver: "0 Dessert Cold",
    gold: "1 Dessert Cold",
    platinum: "1 Dessert Cold",
  },
  {
    id: 14,
    category: "Ice Cream",
    silver: "1 Ice Cream",
    gold: "1 Ice Cream",
    platinum: "1 Ice Cream",
  },
  {
    id: 15,
    category: "Accompaniments",
    silver: "Papad, Pickles, Chutney",
    gold: "Papad, Pickles, Chutney",
    platinum: "Papad, Pickles, Chutney",
  },
];

interface HomeProps {
  uploadedImages: (File & { foodMenuImage: string })[];
  photohandle: () => void;
}

const Home: React.FC<HomeProps> = ({
  uploadedImages: initialUploadedImages,
  photohandle,
}) => {
  const [uploadedImages, setUploadedImages] = useState(initialUploadedImages);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const storedImages = localStorage.getItem("selectedFiles");
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, []);

  const handleSaveAll = (editedItems: MenuItem[]) => {
    const mergedItems = [...initialMenuItems, ...editedItems];
    console.log("Menu Table Items:", mergedItems);
  };
  const handleImageClick = (index: number) => {
    setShowImageModal(true);
    setSelectedImageIndex(index);
  };

  const handleDeleteIconClick = (index: number) => {
    setShowDeleteModal(true);
    setSelectedImageIndex(index);
  };

  const confirmDeleteImage = () => {
    if (selectedImageIndex !== null) {
      const updatedImages = uploadedImages.filter(
        (_, index) => index !== selectedImageIndex
      );
      setUploadedImages(updatedImages);
      localStorage.setItem("selectedFiles", JSON.stringify(updatedImages));
    }
    setShowDeleteModal(false);
    setSelectedImageIndex(null);
  };

  const closeModal = () => {
    setShowImageModal(false);
    setShowDeleteModal(false);
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < uploadedImages.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className={`w-full flex justify-center`}>
      <div className={`w-full`}>
        <div className="bg-gray-50 border-t shadow-lg py-4 px-6 text-xl font-bold">
          Menu
        </div>
        <div className="w-full bg-white shadow-md pb-6 mb-6 flex flex-col  md:grid grid-cols-4 ">
          <button onClick={photohandle} className="w-fit h-fit">
            <div className="flex justify-center md:mx-6 mx-4 mt-6 items-center md:w-56 w-64 h-56 overflow-hidden relative cursor-pointer">
              <img
                src="/back.jpg"
                alt="Add New Menu"
                className="md:w-56 w-64 h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-lg font-bold">
                <h1 className="text-xl">+</h1>
                <h1 className="text-sm">Add New Menu</h1>
              </div>
            </div>
          </button>
          {uploadedImages.map((file, index) => (
            <button
              key={file.foodMenuImage}
              className="relative mt-6 md:mx-6 mx-4 md:w-56 w-64 h-56 cursor-pointer "
              onClick={() => handleImageClick(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleImageClick(index);
                }
              }}
            >
              <img
                src={file.foodMenuImage}
                alt={`Menu ${index + 1}`}
                className="md:w-56 w-64  h-56 border cursor-pointer"
              />
              <button
                className="absolute top-0 -right-0 bg-white   p-1 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteIconClick(index);
                }}
              >
                <FaTrashAlt className="text-cyan-600" />
              </button>
            </button>
          ))}
        </div>
        <MenuTable
          initialMenuItems={initialMenuItems}
          handleSaveAll={handleSaveAll}
        />
      </div>

      {showImageModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center hidden md:flex">
          <div className="bg-white p-4 rounded shadow-lg">
            {selectedImageIndex !== null && (
              <img
                src={uploadedImages[selectedImageIndex].foodMenuImage}
                alt="Selected"
                className="w-[720px] h-[520px] object-cover mb-4"
              />
            )}
            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={handlePrevImage}
                className="px-4 py-2 bg-cyan-500 rounded"
                disabled={selectedImageIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextImage}
                className="px-4 py-2 bg-cyan-500 rounded"
                disabled={selectedImageIndex === uploadedImages.length - 1}
              >
                Next
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-cyan-500 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg w-11/12 max-w-sm">
            <h2 className="text-lg font-bold">Delete this Menu?</h2>
            <p>This action cannot be undone. Are you sure?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteImage}
                className="px-4 py-2 bg-cyan-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
