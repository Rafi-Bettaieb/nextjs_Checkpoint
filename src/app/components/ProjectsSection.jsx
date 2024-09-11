"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gourmet Haven",
    description:
      "restaurant website project developed using HTML and CSS. The website aims to showcase the menu offerings, and reservation options to potential customers. It features a clean and intuitive design, with vibrant imagery ",
    image: "/images/projects/restaurant.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Timeless Watches",
    description:
      "online store project developed using HTML and CSS, dedicated to offering a curated selection of high-quality timepieces for discerning customers. The website is designed to provide an immersive shopping experience, showcasing the beauty and craftsmanship of each watch",
    image: "/images/projects/watch.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Alarm Clock",
    description:
      "Alarm Clock application developed using Python. It provides users with a convenient way to set alarms, customize alarm tones, and wake up on time  while also offering countdown timer functionality.",
    image: "/images/projects/countdown.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe",
    description:
      "PyTicTacToe represents a fun and engaging implementation of the classic Tic Tac Toe game in Python, offering players of all ages a delightful gaming experience. With its intuitive interface, customizable options, intelligent computer opponents,",
    image: "/images/projects/Tic_Tac_Toe.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "FlavorCraft",
    description:
      "FlavorCraft brings you a diverse collection of easy-to-follow recipes from around the world. Whether you're a beginner or a seasoned cook, find dishes that suit your taste and skill level. Cook delicious meals with step-by-step instructions and ingredient lists at your fingertips",
    image: "/images/projects/mobileapp.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack E-commerce",
    description: "Project 5 description",
    image: "/images/projects/store.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
    <div id="projects">
      <section ref={ref}>
        <h2 className="text-center text-4xl font-bold text-white mt-4">
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
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
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
    </div>
  );
};

export default ProjectsSection;
