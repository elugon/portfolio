import { motion } from "framer-motion";
import React, { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`section-container-xl overflow-hidden text-left section-gradient-subtle ${className}`}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
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
          className="mt-2 text-muted text-sm"
        >
          My Professional Journey
        </motion.p>
      </div>

      {/* Timeline indicator */}
      <div className="timeline-line" />

      {/* Experience cards container */}
      <div className="section-content-fixed">
        {/* Desktop: Vertical timeline layout */}
        <div className="hidden lg:block timeline-container">
          {displayedExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'} ${
                ''
              }`}
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
            </motion.div>
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
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 right-10 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-40 left-10 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl"
      />
    </motion.div>
  );
}