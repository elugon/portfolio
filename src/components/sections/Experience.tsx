import React, { useState } from "react";
import ExperienceCard from "../common/ExperienceCard";
import { experiences } from "../../data/experience";
import type { SectionProps } from "../../types";
import { animationClasses } from "../../utils/tailwind-animations";

interface ExperienceProps extends SectionProps {
  limit?: number;
}

export default function Experience({ 
  title = "Experience", 
  limit,
  className = ""
}: ExperienceProps) {
  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`section-container-xl overflow-hidden text-left section-gradient-subtle ${animationClasses.fadeInUp} ${className}`}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Enhanced section header */}
      <div className="section-header-fixed">
        <h3 
          className={`section-title text-3d ${animationClasses.fadeInDown}`}
        >
          {title}
        </h3>
        <p 
          className={`mt-2 text-muted text-sm ${animationClasses.fadeInUp} animation-delay-200`}
        >
          My Professional Journey
        </p>
      </div>

      {/* Timeline indicator */}
      <div className="timeline-line" />

      {/* Experience cards container */}
      <div className="section-content-fixed">
        {/* Desktop: Vertical timeline layout */}
        <div className="hidden lg:block timeline-container">
          {displayedExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'} ${index % 2 === 0 ? animationClasses.slideInFromLeft : animationClasses.slideInFromRight}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" />
              
              {/* Experience card */}
              <div className={`inline-block ${index % 2 === 0 ? 'timeline-content-left' : 'timeline-content-right'}`}>
                <ExperienceCard 
                  {...experience}
                  className="timeline-card-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden">
          <div className="scroll-container">
            {displayedExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id}
                {...experience}
                className={activeIndex === index ? 'scale-105' : 'scale-95 opacity-75'}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modern scroll indicator for mobile */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10 lg:hidden">
        <div className="flex flex-col items-center space-y-3">
          <p className="text-muted text-caption max-w-md font-medium">
            Swipe to explore my journey
          </p>
          <div className="scroll-indicator-modern">
            {displayedExperiences.map((_, index) => (
              <div
                key={index}
                className={`scroll-indicator-dot ${
                  activeIndex === index ? 'active' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating decoration elements */}
      <div 
        className="absolute top-40 right-10 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-float"
      />
      <div 
        className="absolute bottom-40 left-10 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl animate-float animation-delay-500"
      />
    </div>
  );
}