"use client";
import React, { useState, useRef, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "fuelMe",
    description:
      "fuelMe, is a mobile app designed to simplify your journey on the road. Its your go-to companion for all things related to gas stations. With fuelMe, you can effortlessly locate the nearest gas station, plan the fastest route to fill up your tank, and even reserve a convenient car wash appointment while on the go. But thats not all – fuelMe also allows you to conveniently shop for essential automotive and convenience store products online, ensuring your road trip is as seamless as possible.",
    images: [
      "/images/projects/FuelCover.png",
      "https://res.cloudinary.com/dr63ndxik/image/upload/v1697819367/rnaigz97x8w6tgjndr3x.png",
      "/images/projects/Fuel Me 2.png",
      "/images/projects/Fuel Me 3.png",
    ],

    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/YosriZaghouani21/Fuel-ME-android",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Gromet Website",
    description:
      "Gromet Website, is your comprehensive online destination for all your construction material needs, and more.At Gromet, weve transformed our extensive catalog into a fully functional website, offering a user-friendly experience that makes finding the right construction materials a breeze. But we didnt stop there.Gromet Website is not just about providing construction materials; its about offering a complete solution to simplify your construction projects. Experience the convenience of online shopping, stay informed with our blog, and enjoy the peace of mind that comes with our reliable delivery system",
    images: [
      "/images/projects/Gromet Cover.png",

      "/images/projects/Gromet2.png",
      "/images/projects/Gromet1.png",
      "/images/projects/Gromet3.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://www.gromet.rs",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "jobHub",
    description:
      "JobHub, is more than just an app; its a revolutionary platform thats reshaping how job seekers connect with potential employers and uncover exhilarating career pathways. Your one-stop destination for professional networking and job exploration, JobHub is where opportunities converge with talent, and connections metamorphose into thriving careers. Join us as we embark on this exhilarating journey to redefine the job-seeking experience",
    images: [
      "/images/projects/JobHubCover.png",

      "/images/projects/Jobhub1.png",
      "/images/projects/Jobhub2.png",
      "/images/projects/Jobhub3.png",
    ],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/YosriZaghouani21/Adress-Book-Gromet",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Xperience Website",
    description:
      "Xperience, is a web app that offer travelers a distinctive opportunity to fully immerse themselves in the rich culture and activities of Tunisia, all while connecting with passionate local hosts who are eager to share their knowledge and love for the region.Discover the heart of Tunisia through a diverse range of experiences, from savoring the flavors of Tunisian cuisine in our online cooking courses to learning the art of belly dancing with our expert instructors. Xperience, go beyond the typical tourist path, allowing you to engage with the countrys vibrant heritage and traditions in an unforgettable way.",
    images: [
      "/images/projects/Xperience Cover.png",
      "/images/projects/Xperience1.png",
      "/images/projects/Xperience2.png",
      "/images/projects/Xperience3.png",
      "/images/projects/Xperience4.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/YosriZaghouani21/Xperience-",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [previewImageIndex, setPreviewImageIndex] = useState(null); // Track the index of the previewed image
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = useCallback((newTag) => {
    setTag(newTag);
  }, []);

  const handlePreview = (imageSrc, index) => {
    setPreviewImageIndex(index); // Set the index of the previewed image
  };

  const handleExitPreview = () => {
    setPreviewImageIndex(null); // Clear the previewed image index
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onPreview={(imageSrc) => handlePreview(imageSrc, index)}
              isPreviewed={index === previewImageIndex}
            />
          </motion.li>
        ))}
      </ul>

      {/* Image Preview Modal */}
      {previewImageIndex !== null && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-75 z-50">
          <div className="max-w-3xl w-full p-4">
            <img
              src={filteredProjects[previewImageIndex].images[0]}
              alt={`Preview of ${filteredProjects[previewImageIndex].title}`}
              className="max-w-full h-auto"
            />
            <button
              onClick={handleExitPreview}
              className="mt-4 px-4 py-2 bg-white text-black rounded"
            >
              Exit Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
