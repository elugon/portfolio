import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "../common/ExperienceCard";
import { experiences } from "../../data/experience";
import type { SectionProps } from "../../types";

interface ExperienceProps extends SectionProps {
  limit?: number;
}

export default function Experience({ 
  title = "Experience", 
  limit,
  className = ""
}: ExperienceProps) {
  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`my-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center ${className}`}
      client:load
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        {title}
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary">
        {displayedExperiences.map((experience) => (
          <ExperienceCard 
            key={experience.id}
            {...experience}
          />
        ))}
      </div>

      {/* Experience summary */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm max-w-md">
          Scroll horizontally to see my professional journey
        </p>
      </div>
    </motion.div>
  );
}