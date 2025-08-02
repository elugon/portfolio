import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "../common/ProjectCard";
import { projects, getFeaturedProjects } from "../../data/projects";
import type { SectionProps } from "../../types";

interface ProjectsProps extends SectionProps {
  featuredOnly?: boolean;
  limit?: number;
}

export default function Projects({ 
  title = "Projects", 
  featuredOnly = false,
  limit,
  className = ""
}: ProjectsProps) {
  let displayedProjects = featuredOnly ? getFeaturedProjects() : projects;
  if (limit) {
    displayedProjects = displayedProjects.slice(0, limit);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`my-screen relative z-0 flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center ${className}`}
      client:load
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        {title}
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary">
        {displayedProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            {...project}
          />
        ))}
      </div>

      {/* Projects summary */}
      <div className="w-full absolute top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12" />
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-30">
        <p className="text-gray-400 text-sm max-w-md">
          Scroll horizontally to explore my {featuredOnly ? 'featured ' : ''}projects
        </p>
      </div>
    </motion.div>
  );
}