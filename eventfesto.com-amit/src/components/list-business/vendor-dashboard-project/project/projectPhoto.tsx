import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

interface ImageUploadProps {
  onDone: (files: (File & { projectImage: string })[]) => void;
  arrowIcon: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onDone, arrowIcon }) => {
  const [selectedFiles, setSelectedFiles] = useState<
    (File & { projectImage: string })[]
  >([]);
  const [uploadStatus, setUploadStatus] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedFiles = localStorage.getItem("selectedFilesProject");
    if (storedFiles) {
      try {
        const parsedFiles = JSON.parse(storedFiles) as {
          name: string;
          type: string;
          size: number;
          projectImage: string;
        }[];
        const filesWithprojectImage = parsedFiles.map((fileData) => {
          // Convert Blob to File
          const blob = new Blob([], { type: fileData.type });
          const file = new File([blob], fileData.name, { type: fileData.type });
          return { ...file, projectImage: fileData.projectImage };
        });
        setSelectedFiles(filesWithprojectImage);
        setUploadStatus(filesWithprojectImage.map(() => "success"));
      } catch (error) {
        console.error("Error parsing stored files:", error);
      }
    }

    return () => {
      selectedFiles.forEach((file) => URL.revokeObjectURL(file.projectImage));
    };
  }, []);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      const filesToStore = selectedFiles.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
        projectImage: file.projectImage,
      }));
      localStorage.setItem(
        "selectedFilesProject",
        JSON.stringify(filesToStore)
      );
    } else {
      localStorage.removeItem("selectedFilesProject");
    }
  }, [selectedFiles]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map((file) => ({
        ...file,
        projectImage: URL.createObjectURL(file),
      })) as (File & { projectImage: string })[];
      setSelectedFiles((projectImageFiles) => [
        ...projectImageFiles,
        ...newFiles,
      ]);
      setUploadStatus((projectImageStatus) => [
        ...projectImageStatus,
        ...newFiles.map(() => "idle"),
      ]);
      event.target.value = "";
    }
  };

  const handleRemoveFile = (index: number) => {
    URL.revokeObjectURL(selectedFiles[index].projectImage);
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setUploadStatus((prevStatus) => prevStatus.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    setUploadStatus(selectedFiles.map(() => "uploading"));

    const uploadPromises = selectedFiles.map((file, index) =>
      simulateUpload(file, index)
    );

    await Promise.all(uploadPromises);
    console.log("All files uploaded:", selectedFiles);
    setTimeout(() => {
      setUploadStatus(selectedFiles.map(() => "success"));
    }, 2000);
  };

  const simulateUpload = (file: File, index: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        updateUploadStatus(index, "success");
        resolve();
      }, 1000); // Simulate 1 second upload time
    });
  };

  const updateUploadStatus = (index: number, status: string) => {
    setUploadStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      return newStatus;
    });
  };

  const allUploaded = uploadStatus.every((status) => status === "success");

  const handleDone = () => {
    if (allUploaded) {
      onDone(selectedFiles);
      window.history.pushState({}, "", window.location.pathname); // Prevent page refresh
    }
  };

  return (
    <div
      className={`shadow bg-white ${selectedFiles.length > 0 ? "pb-0" : "pb-10"}`}
    >
      <div className="bg-gray-50 py-2 px-6 text-xl flex items-center">
        <button className="mr-4" onClick={() => arrowIcon()}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="md:w-6 md:h-6 w-4 h-4 text-gray-500"
          />
        </button>
        <h1 className="md:text-xl text-sm font-bold">
          Upload Images to Project
        </h1>
      </div>
      <div className="border-dashed border-2 mt-8 border-gray-300 mx-auto md:w-80 rounded-lg p-4">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center cursor-pointer"
        >
          <div>
            <svg
              className="w-12 h-12 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0a2 2 0 012-2h6a2 2 0 012 2v12m-4-4h4m0 0a2 2 0 01-2 2H9a2 2 0 01-2-2h4m0 0V4"
              />
            </svg>
          </div>
          <span className="text-gray-500 font-serif md:text-lg text-sm">
            Max file size: 16 MB
          </span>
          <span className="text-gray-500 md:text-lg text-sm">
            Accepted Formats: jpg, jpeg, png
          </span>
          <span className="text-gray-500 font-serif md:text-lg text-sm">
            Max files: 40
          </span>
          <div className="mt-4 bg-cyan-700 text-white px-4 py-2 rounded-full font-serif md:text-lg text-xs">
            Choose Files
          </div>
          <input
            id="file-upload"
            type="file"
            accept=".jpg,.jpeg,.png"
            multiple
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="mt-6 mx-4">
        {selectedFiles.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {selectedFiles.map((file, index) => (
              <div key={file.projectImage} className="relative">
                <div className="w-24 h-24 overflow-hidden border">
                  <img
                    src={file.projectImage}
                    alt={`${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {uploadStatus[index] === "uploading" && (
                  <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                    </svg>
                  </div>
                )}
                {uploadStatus[index] === "success" && (
                  <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center text-green-500">
                    <svg
                      className="h-6 w-6 rounded-full border border-green-500 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
                <button
                  className="absolute -top-5 right-3 bg-cyan-500 text-white rounded-full px-1 text-sm"
                  onClick={() => handleRemoveFile(index)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedFiles.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            className={`bg-cyan-700 text-white px-4 py-2 rounded-full font-serif ${allUploaded ? "w-1/2" : "w-full"}`}
            onClick={handleUpload}
          >
            Upload Files
          </button>
          {allUploaded && (
            <button
              className="ml-2 bg-cyan-900 text-white px-4 py-2 rounded-full font-serif w-1/2"
              onClick={handleDone}
            >
              Done
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
