import { motion } from "framer-motion";
import React from "react";
import type { Project } from "../../types";
import { motionPresets } from "../../utils/animations";

interface ProjectCardProps extends Project {
  className?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  githubUrl, 
  liveUrl, 
  technologies,
  status,
  className = ""
}: ProjectCardProps) {
  const statusColors = {
    'completed': 'bg-green-500/20 text-green-400',
    'in-progress': 'bg-yellow-500/20 text-yellow-400',
    'archived': 'bg-gray-500/20 text-gray-400'
  };

  return (
    <div className={`w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-2 mt-2 md:p-44 h-screen ${className}`}>
      <motion.div
        {...motionPresets.slideInFromBottom}
        client:load
        className="h-auto w-auto mx-1 lg:h-[750px] lg:w-[600px] rounded overflow-hidden shadow-2xl group"
      >
        <img 
          src={image} 
          alt={`${title} project screenshot`}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </motion.div>

      <div className="space-y-5 px-0 md:px-10 max-w-6xl text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h4 className="text-2xl xl:text-4xl font-semibold">
            <span className="underline decoration-primary/50">
              {title}
            </span>
          </h4>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status.replace('-', ' ')}
          </span>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm md:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          {description}
        </p>

        <div className="flex justify-center space-x-4 pt-6">
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-primary/80 text-black rounded-lg transition-colors duration-200 flex items-center gap-2 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}