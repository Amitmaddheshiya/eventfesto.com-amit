"use client";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Portfolio = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isCertified, setIsCertified] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      if (selectedImages.length + filesArray.length > 8) {
        setErrorMessage("You can't select more than 8 images.");
      } else {
        setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
        setErrorMessage(null);
      }
    } else {
      console.error("No files selected.");
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCertified(e.target.checked);
  };

  const handleRemoveImage = (index: number) => {
    URL.revokeObjectURL(selectedImages[index].name); // Clean up the object URL
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setErrorMessage(null);
  };

  return (
    <div className="p-8">
      <div className="flex items-center">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="mr-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">Portfolio</h1>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="certify"
            className="mr-2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="certify" className="text-sm text-cyan-500 font-serif">
            I certify that the work uploaded is my own / is the copyright of our
            firm. I understand that any work found to be someone else's would be
            removed immediately, and action could be taken.
          </label>
        </div>

        <div className="flex">
          <div className="mt-4">
            <div
              className={`w-96 mx-auto text-center ${
                errorMessage ? "bg-red-500" : "bg-cyan-500"
              } text-white`}
            >
              {errorMessage ??
                `Number of cover images selected: ${selectedImages.length} (Max limit is 8)`}
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
              disabled={!isCertified || selectedImages.length >= 8}
            />
            <label
              htmlFor="file-upload"
              className={`block mt-2 ${
                !isCertified || selectedImages.length >= 8
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              <div
                className={`w-full mt-6 max-w-sm border-4 border-dashed border-gray-300 p-4 text-center text-gray-500 relative ${
                  !isCertified || selectedImages.length >= 8 ? "opacity-50" : ""
                }`}
              >
                <img
                  src="/img1.jpg"
                  alt="background"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <div>
                    <span className="block text-2xl">+</span>
                    <span className="block">Add New Image</span>
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div className="flex mt-4 ml-10">
            Max file size: 16 MB Accepted Formats: jpg, jpeg, png Max files: 8
          </div>
        </div>

        {selectedImages.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedImages.slice(0, 8).map((file) => (
              <div key={file.name} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-auto"
                />
                <button
                  onClick={() =>
                    handleRemoveImage(selectedImages.indexOf(file))
                  }
                  aria-label="Remove image"
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
