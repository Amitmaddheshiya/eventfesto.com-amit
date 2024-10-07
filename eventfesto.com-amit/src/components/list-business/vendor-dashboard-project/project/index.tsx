"use client";
import { useState } from "react";
import Home from "./projectHome";
import ImageUpload from "./projectPhoto";

const ParentComponent: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<
    (File & { projectImage: string })[]
  >([]);
  const [showHomePage, setShowHomePage] = useState(true);

  const handleDone = (images: (File & { projectImage: string })[]) => {
    setUploadedImages(images);
    setShowHomePage(true);
  };
  const photohandle = () => {
    setShowHomePage(false);
  };

  const handleIcon = () => {
    setShowHomePage(true);
  };

  return (
    <div>
      {showHomePage ? (
        <Home uploadedImages={uploadedImages} photohandle={photohandle} />
      ) : (
        <ImageUpload onDone={handleDone} arrowIcon={handleIcon} />
      )}
    </div>
  );
};

export default ParentComponent;
