import React, { useState } from "react";
import ProjectCard from "../common/ProjectCard";
import { projects, getFeaturedProjects } from "../../data/projects";
import type { SectionProps } from "../../types";
import { animationClasses } from "../../utils/tailwind-animations";

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
    <div
      className={`section-container-xl overflow-hidden text-left z-0 ${animationClasses.fadeInUp} ${className}`}
    >
      {/* Enhanced section header */}
      <div className="section-header-fixed">
        <h3 
          className={`section-title text-3d ${animationClasses.fadeInDown}`}
        >
          {title}
        </h3>
        <p 
          className={`mt-2 text-muted text-sm font-medium ${animationClasses.fadeInUp} animation-delay-200`}
        >
          Showcasing My Best Work
        </p>
      </div>

      {/* View mode toggle */}
      <div
        className={`absolute top-32 sm:top-36 left-1/2 transform -translate-x-1/2 z-20 ${animationClasses.fadeInUp} animation-delay-300`}
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
      </div>

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
          <div 
            className="grid-1-2-3 container-xl"
          >
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${animationClasses.scaleIn}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} className="w-full max-w-none" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Background decorations */}
      <div className="absolute top-[30%] bg-gradient-to-r from-primary-400/10 to-secondary-400/10 left-0 h-[500px] w-full -skew-y-12 blur-3xl" />
      
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
        }}
      />
    </div>
  );
}