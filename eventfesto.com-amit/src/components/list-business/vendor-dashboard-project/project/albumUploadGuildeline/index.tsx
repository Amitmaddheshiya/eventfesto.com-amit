"use client";
import { useState } from "react";

const PortfolioUpload = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="checkbox"
          id="certify"
          className="mr-2"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="certify">
          I certify that the work uploaded is my own / is the copyright of our
          firm. I understand that any work found to be someone else's would be
          removed immediately, and action could be taken.
        </label>
      </div>

      <div className="mb-4">
        <span>
          Number of cover images selected: {selectedFiles.length} (Max limit is
          8)
        </span>
        <button className="ml-2 text-blue-500">View all cover images</button>
      </div>

      <div
        className={`relative w-48 h-48 border ${isChecked ? "border-gray-300" : "border-gray-300 opacity-50 cursor-not-allowed"}`}
      >
        <input
          type="file"
          id="fileInput"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={!isChecked}
          accept=".jpg,.jpeg,.png"
          multiple
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-center h-full text-gray-500">
          <span>Add New Image</span>
        </div>
      </div>

      <div className="mt-4">
        {selectedFiles.length > 0 && (
          <div>
            <h3 className="mb-2">Selected Images:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioUpload;
