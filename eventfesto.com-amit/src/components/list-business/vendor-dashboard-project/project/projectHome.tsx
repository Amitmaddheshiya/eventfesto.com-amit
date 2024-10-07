"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface HomeProps {
  uploadedImages: (File & { projectImage: string })[];
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
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    const storedImages = localStorage.getItem("selectedFilesProject");
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, []);

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
      localStorage.setItem(
        "selectedFilesProject",
        JSON.stringify(updatedImages)
      );
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <div className={`w-full flex justify-center`}>
      <div className={`w-full`}>
        <div className="bg-gray-50 border-t shadow-lg py-4 px-6 text-xl font-bold">
          Project
        </div>

        <div className="w-full bg-white shadow-md pb-6 mb-6 flex flex-col gap-4">
          <div className="flex flex-col ml-3 items-center mt-2 justify-center">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 -mt-20 md:mt-0"
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="link-checkbox"
                className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                  isCheckboxChecked ? "text-green-500" : "text-pink-500"
                }`}
              >
                I certify that the work uploaded is my own / is the copyright of
                our firm. I understand that any work found to be someone else's
                would be removed immediately, and action could be taken.
              </label>
            </div>
          </div>

          <div className="w-fit h-fit flex flex-col">
            <button
              disabled={!isCheckboxChecked}
              onClick={photohandle}
              className="w-fit h-fit"
            >
              <div className="flex justify-center md:mx-6 mx-4  mt-6 items-center w-64  md:w-56 h-56 overflow-hidden relative cursor-pointer">
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
            <div className="md:px-2 px-4 md:ml-4 mt-5 text-sx font-medium ">
              <Link
                className="text-blue-500 text-md hover:underline "
                href="/ImageUploadGuildline"
              >
                View Image Upload Guidelines
              </Link>
              <br />
              <Link
                className="text-blue-500 hover:underline"
                href="/albumUploadGuildeline"
              >
                View Album Upload Guidelines
              </Link>
            </div>
          </div>
          {uploadedImages && uploadedImages.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {uploadedImages.map((image, index) => (
                <div key={image.projectImage} className="relative mt-6">
                  <button onClick={() => handleImageClick(index)}>
                    <img
                      src={image.projectImage}
                      alt="uploaded projectImage"
                      className="md:w-56 w-64 md:mx-6 mx-4 h-56 border cursor-pointer"
                    />
                  </button>
                  <button
                    onClick={() => handleDeleteIconClick(index)}
                    className="absolute top-0 right-4 bg-cyan-500 text-white p-1 rounded-full"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-6 w-full text-center relative">
          <img
            src="/backg.jpg"
            alt="#WMGturns10"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold mb-4">#WMGturns10</h2>
            <div className="flex justify-center items-center mb-4">
              <div className="text-6xl font-bold text-pink-500 relative">
                10
              </div>
            </div>
            <p className="text-lg">Glorious Years of EventFesto.com</p>
          </div>
        </div>
      </div>

      {showImageModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center hidden md:flex">
          <div className="bg-white p-4 rounded shadow-lg">
            {selectedImageIndex !== null && (
              <img
                src={uploadedImages[selectedImageIndex].projectImage}
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
