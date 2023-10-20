"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <ul className="list-disc pl-2">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>PostgreSQL</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>C/C#/C++</li>
          </ul>
        </div>
        <div style={{ display: "inline-block" }}>
          <ul className="list-disc pl-2">
            <li>MongoDB</li>
            <li>Swift</li>
            <li>Flutter</li>
            <li>Kotlin</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor's Degree in Computer Science</li>
        <li>National Diploma in Software Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Leadership Development Experience Certification</li>
        {/* <li>Google Professional Cloud Developer</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Clay.png" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My fascination with computer science began when I was around 14
            years old, and I watched a movie from the 80's called War Games. My
            imagination was captured, and I immediately picked up a book about
            JavaScript for beginners from the library. Although I couldn't get
            JavaScript to work on my parents' computer, I was so absorbed in
            understanding the logic of the code that I read the book cover to
            cover like a novel. <br></br> After taking a few programming courses
            in high school, I discovered that my enthusiasm for Software
            Engineering makes it the perfect career choice for me. <br></br>I
            made it my goal to create software that will provide value to people
            around the world. Currently, I'm studying Software Engineering at
            ESPRIT University and seeking internships for Winter 2024.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
