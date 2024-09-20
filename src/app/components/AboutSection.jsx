"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 list-disc pl-2 gap-x-4">
        <li>Express.js</li>
        <li>JavaScript</li>
        <li>Mongoose</li>
        <li>RESTful APIs</li>
        <li>Redux</li>
        <li>JSON</li>
        <li>AJAX</li>
        <li>Git</li>
        <li>Jest</li>
        <li>TypeScript</li>
        <li>CI/CD Pipelines</li>
        <li>Agile Methodologies</li>
        <li>Unit Testing</li>
        <li>Next.js</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Development - Ironhack</li>
        <li>MSc in Finance - University of Bedfordshire</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
      <li>Full Stack Web Development - Ironhack</li>
      <li>MSc in Finance - University of Bedfordshire</li>
      <li>Responsive Web Development - freeCodeCamp</li>
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
        <Image src="/images/about1.jpg" alt="about-me" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full Stack MERN Developer skilled in building scalable web
            applications using MongoDB, Express.js, React, and Node.js. With
            expertise in front-end and back-end development, I deliver robust,
            responsive solutions optimized for performance, ensuring seamless
            user experiences and efficient server-side operations.
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
