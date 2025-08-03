import { motion } from "framer-motion";
import React, { useState } from "react";
import type { Project } from "../../types";

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
  const [isHovered, setIsHovered] = useState(false);
  
  const statusStyles = {
    'completed': {
      color: 'text-semantic-success-500',
      bg: 'bg-semantic-success-500/10',
      border: 'border-semantic-success-500/30',
      icon: '✓'
    },
    'in-progress': {
      color: 'text-semantic-warning-500',
      bg: 'bg-semantic-warning-500/10',
      border: 'border-semantic-warning-500/30',
      icon: '⚡'
    },
    'archived': {
      color: 'text-neutral-400',
      bg: 'bg-neutral-500/10',
      border: 'border-neutral-500/30',
      icon: '📦'
    }
  };

  const statusStyle = statusStyles[status];

  return (
    <motion.div 
      className={`scroll-item container-sm ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="card-lg h-full flex flex-col group hover:scale-[1.02] transition-all duration-500">
        {/* Image Container with modern overlay */}
        <div className="relative overflow-hidden rounded-t-2xl aspect-video">
          <motion.img 
            src={image} 
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            loading="lazy"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Status badge */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className={`absolute top-4 left-4 px-3 py-1 rounded-full ${statusStyle.bg} ${statusStyle.border} border backdrop-blur-sm flex items-center gap-2`}
          >
            <span className="text-lg">{statusStyle.icon}</span>
            <span className={`text-xs font-medium ${statusStyle.color}`}>
              {status.replace('-', ' ')}
            </span>
          </motion.div>
          
          {/* Quick actions overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-4 z-10"
          >
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-card hover:bg-neutral-800/80 rounded-full flex-center text-neutral-300 hover:text-primary-400 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 rounded-full flex-center text-neutral-900 transition-all duration-300 shadow-glow"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex-1 padding-md flex flex-col spacing-md">
          {/* Title with gradient */}
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
            {title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-xs">
            {technologies.slice(0, 4).map((tech, index) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary-400/10 to-primary-600/10 text-primary-300 border border-primary-400/20"
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium text-neutral-400">
                +{technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-400 leading-relaxed flex-1">
            {description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-sm">
            <motion.a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-modern-outline py-2 text-sm flex items-center justify-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </motion.a>
            <motion.a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-modern py-2 text-sm flex items-center justify-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </motion.a>
          </div>
        </div>

        {/* Decorative gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-secondary-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  );
}