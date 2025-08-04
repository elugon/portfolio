import React, { useState } from "react";
import { hoverClasses } from "../../utils/tailwind-animations";
import type { Skill } from "../../types";

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
      className={`group relative ${hoverClasses.skill} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative overflow-hidden rounded-2xl ${style.border} border-2 transition-all duration-500 ${style.glow} hover:shadow-2xl`}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
        
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative p-6 flex flex-col items-center">
          {/* Logo container */}
          <div 
            className={`relative mb-4 ${isHovered ? 'animate-float' : ''} motion-reduce-animation`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
              <img 
                src={logo} 
                alt={`${name} logo`}
                className="w-full h-full object-contain filter brightness-110 drop-shadow-lg"
                loading="lazy"
              />
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                <img 
                  src={logo} 
                  alt=""
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
            {/* Category icon */}
            <span className="absolute -top-2 -right-2 text-lg">{style.icon}</span>
          </div>
          
          {/* Skill name */}
          <h3 className="text-sm md:text-base font-semibold text-neutral-100 mb-2 text-center group-hover:text-primary-400 transition-colors duration-300">
            {name}
          </h3>
          
          {/* Proficiency bar */}
          {showProficiency && (
            <div className="w-full space-y-2">
              <div className="relative h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-800 motion-reduce-animation`}
                  style={{ width: isHovered ? `${proficiency}%` : '0%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
              <p 
                className={`text-xs text-center text-primary-400 font-medium transition-opacity duration-300 motion-reduce-animation ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                {proficiency}% Proficiency
              </p>
            </div>
          )}
          
          {/* Category label */}
          <span className="text-xs text-muted capitalize mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category}
          </span>
        </div>
        
        {/* Hover effect overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none transition-opacity duration-300 motion-reduce-animation ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Click indicator */}
        <div
          className={`absolute top-2 right-2 bg-primary-400/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 motion-reduce-animation ${isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        >
          <svg className="w-3 h-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </div>
  );
}