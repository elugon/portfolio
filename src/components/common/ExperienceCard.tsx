import { motion } from "framer-motion";
import React from "react";
import type { Experience } from "../../types";
import { motionPresets } from "../../utils/animations";

interface ExperienceCardProps extends Experience {
  className?: string;
}

export default function ExperienceCard({ 
  title, 
  company, 
  period, 
  logo, 
  responsibilities, 
  technologies,
  location,
  className = ""
}: ExperienceCardProps) {
  return (
    <article className={`flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-5/6 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ${className}`}>
      <motion.div
        {...motionPresets.slideInFromTop}
        client:load
        className="w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-cover object-center"
      >
        <img 
          src={logo} 
          alt={`${company} logo`}
          className="w-full h-full object-contain rounded-lg"
          loading="lazy"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light xl:text-4xl">{title}</h4>
        <p className="font-bold text-xl xl:text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {technologies?.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300 xl:py-5 text-sm xl:text-base">
          {period}
        </p>
        {location && (
          <p className="text-gray-400 text-sm mb-4">📍 {location}</p>
        )}
        <ul className="list-disc space-y-2 ml-5 text-sm xl:text-lg max-h-40 overflow-y-auto">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-300">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}