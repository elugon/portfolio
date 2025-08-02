import { motion } from "framer-motion";
import React from "react";
import type { Skill } from "../../types";
import { hoverVariants } from "../../utils/animations";

interface SkillCardProps extends Skill {
  className?: string;
  showProficiency?: boolean;
}

export default function SkillCard({ 
  name, 
  logo, 
  url, 
  category, 
  proficiency,
  showProficiency = false,
  className = ""
}: SkillCardProps) {
  const categoryColors = {
    frontend: 'border-blue-500/30 bg-blue-500/10',
    backend: 'border-green-500/30 bg-green-500/10', 
    tools: 'border-purple-500/30 bg-purple-500/10',
    languages: 'border-orange-500/30 bg-orange-500/10'
  };

  return (
    <motion.div 
      variants={hoverVariants.skill}
      whileHover="hover"
      className={`group relative ${className}`}
      client:load
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${categoryColors[category]}`}
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${name} logo`}
              className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
              loading="lazy"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-sm md:text-base font-medium text-white group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            
            {showProficiency && (
              <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${proficiency}%` }}
                />
              </div>
            )}
            
            <span className="text-xs text-gray-400 capitalize mt-1 block">
              {category}
            </span>
          </div>
        </div>
        
        {/* Hover tooltip */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Click to learn more about {name}
        </div>
      </a>
    </motion.div>
  );
}