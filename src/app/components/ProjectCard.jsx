import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  images,
  title,
  description,
  gitUrl,
  previewUrl,
  onPreview,
  previewImage,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group cursor-pointer"
        onClick={openCarousel}
      >
        <img
          src={images[currentImageIndex]}
          alt={title}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

      {/* Carousel */}
      {isCarouselOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={previewImage || images[currentImageIndex]}
              alt={title}
              style={{ maxWidth: "80vw", maxHeight: "80vh" }}
            />

            {/* Next and Previous buttons */}
            <button
              className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
              onClick={prevImage}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
              onClick={nextImage}
            >
              &gt;
            </button>
            <button
              className="absolute top-2 right-2 text-white cursor-pointer"
              onClick={closeCarousel}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
