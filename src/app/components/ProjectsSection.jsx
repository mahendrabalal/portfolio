"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce (Local Handicraft)",
    description: "MERN-based E-commerce platform showcasing and selling local handicraft products.",
    image: "/images/projects/local-handicraft-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mahendrabalal/local-handicraft-frontend",
    previewUrl: "https://localhandicraft.netlify.app/",
  },
   /*{
    id: 2,
    title: "Career-Builder Website",
    description: "User-friendly job search website for seekers and employers, enhancing efficiency.",
    image: "/images/projects/job-search.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mahendrabalal/job-search-website",
    previewUrl: "https://careerbuilding.netlify.app",
  },
  */
  {
    id: 3,
    title: "Bike Racing Game",
    description: "Avoid obstacles, earn lives, and face tougher challenges in bike race.",
    image: "/images/projects/motorbikerace.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mahendrabalal/dom-bike-race",
    previewUrl: "https://mysterybiker.netlify.app/",
  },
  {
    id: 4,
    title: "Free Films and TV ",
    description: "CYF's TV show DOM project: A dynamic, engaging starting point.",
    image: "/images/projects/TV-series-site.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mahendrabalal/tv-show-dom-project?tab=readme-ov-file",
    previewUrl: "https://deploy-preview-1--cyf-mabalal-tv.netlify.app/",
  },

  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
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
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
