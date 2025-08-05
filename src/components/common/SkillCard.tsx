import React, { useState } from "react";
import type { Skill } from "../../types";

interface SkillCardProps extends Skill {
  className?: string;
}

export default function SkillCard({ 
  name, 
  logo, 
  url, 
  category,
  className = ""
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const categoryStyles = {
    frontend: {
      gradient: 'from-secondary-400/20 to-secondary-600/20',
      border: 'border-secondary-400/30',
      glow: 'hover:shadow-secondary-400/20',
      icon: '🎨'
    },
    backend: {
      gradient: 'from-semantic-success-400/20 to-semantic-success-600/20',
      border: 'border-semantic-success-500/30',
      glow: 'hover:shadow-semantic-success-400/20',
      icon: '⚙️'
    },
    tools: {
      gradient: 'from-primary-400/20 to-primary-600/20',
      border: 'border-primary-400/30',
      glow: 'hover:shadow-primary-400/20',
      icon: '🛠️'
    },
    languages: {
      gradient: 'from-semantic-warning-400/20 to-semantic-warning-600/20',
      border: 'border-semantic-warning-500/30',
      glow: 'hover:shadow-semantic-warning-400/20',
      icon: '💻'
    }
  };

  const style = categoryStyles[category];

  return (
    <div 
      className={`group relative transform-gpu will-change-transform ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative overflow-hidden rounded-2xl ${style.border} border-2 
                   transform-gpu will-change-transform transition-all duration-300 ease-out 
                   ${style.glow} hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1
                   focus-ring`}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
        
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative p-3 sm:p-4 lg:p-5 flex flex-col items-center transform-gpu">
          {/* Logo container */}
          <div 
            className={`relative mb-4 transform-gpu will-change-transform transition-transform duration-300 ease-out 
                       ${isHovered ? 'animate-bounce-gentle scale-110' : 'scale-100'} motion-reduce-animation`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center relative transform-gpu">
              <img 
                src={logo} 
                alt={`${name} logo`}
                className="w-full h-full object-contain filter brightness-110 drop-shadow-lg"
                loading="lazy"
              />
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 ease-out transform-gpu">
                <img 
                  src={logo} 
                  alt=""
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          
          {/* Skill name */}
          <h3 className="text-xs sm:text-sm font-semibold text-neutral-100 mb-1 text-center 
                        group-hover:text-primary-400 transition-colors duration-200 ease-out leading-tight">
            {name}
          </h3>
          
          
          {/* Category label */}
          <span className="text-xs text-muted capitalize mt-1 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-200 ease-out">
            {category}
          </span>
        </div>
        
        {/* Hover effect overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none 
                     transition-opacity duration-200 ease-out transform-gpu motion-reduce-animation 
                     ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Click indicator */}
        <div
          className={`absolute top-2 right-2 bg-primary-400/20 backdrop-blur-sm rounded-full p-2 
                     transform-gpu will-change-transform transition-all duration-200 ease-out motion-reduce-animation 
                     ${isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        >
          <svg className="w-3 h-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </div>
  );
}