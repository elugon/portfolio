import { motion } from "framer-motion";
import React, { useState } from "react";
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
  
  const [selectedProject, setSelectedProject] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'showcase'>('showcase');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`section-container-xl overflow-hidden text-left z-0 ${className}`}
    >
      {/* Enhanced section header */}
      <div className="section-header-fixed">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-3d"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-muted text-sm font-medium"
        >
          Showcasing My Best Work
        </motion.p>
      </div>

      {/* View mode toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-32 sm:top-36 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-xs glass-card padding-xs rounded-full">
          <button
            onClick={() => setViewMode('showcase')}
            className={`filter-button ${
              viewMode === 'showcase' 
                ? 'filter-button-active' 
                : 'filter-button-inactive'
            }`}
          >
            Showcase
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`filter-button ${
              viewMode === 'grid' 
                ? 'filter-button-active' 
                : 'filter-button-inactive'
            }`}
          >
            Grid View
          </button>
        </div>
      </motion.div>

      {/* Projects container */}
      <div className="section-content-fixed">
        {viewMode === 'showcase' ? (
          // Showcase mode - horizontal scroll
          <>
            <div className="scroll-container z-20">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedProject === index ? 'scale-100' : 'scale-95 opacity-70'
                  }`}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            
            {/* Modern scroll indicator */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-center z-30">
              <div className="scroll-indicator-modern">
                {displayedProjects.map((_, index) => (
                  <div
                    key={index}
                    className={`scroll-indicator-dot ${
                      selectedProject === index ? 'active' : ''
                    }`}
                    onClick={() => setSelectedProject(index)}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          // Grid mode
          <motion.div 
            layout
            className="grid-1-2-3 container-xl"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} className="w-full max-w-none" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Background decorations */}
      <div className="absolute top-[30%] bg-gradient-to-r from-primary-400/10 to-secondary-400/10 left-0 h-[500px] w-full -skew-y-12 blur-3xl" />
      
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
        }}
      />
    </motion.div>
  );
}