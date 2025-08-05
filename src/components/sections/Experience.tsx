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
        {/* Desktop: Enhanced timeline layout with logos on opposite sides */}
        <div className="hidden lg:block timeline-container">
          {displayedExperiences.map((experience, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={experience.id}
                className={`timeline-item ${isLeft ? animationClasses.slideInFromLeft : animationClasses.slideInFromRight}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot" />
                
                {/* Layout: Logo on one side, Card on the other - Perfect centering */}
                <div className="grid grid-cols-2 gap-8 items-center">
                  {/* Left side content */}
                  {isLeft ? (
                    <>
                      {/* Card on left */}
                      <div className="timeline-content-left">
                        <ExperienceCard 
                          {...experience}
                          className="timeline-card-full"
                          hideCompanyLogo={true}
                        />
                      </div>
                      {/* Large Logo on right - Maximum size with perfect decorative positioning */}
                      <div className="timeline-content-right flex justify-center items-center h-full">
                        <div className={`relative ${animationClasses.scaleIn}`} style={{ animationDelay: `${index * 100 + 200}ms` }}>
                          <div className="glass-card neon-border shadow-2xl p-6">
                            <div className="w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 flex items-center justify-center">
                              <div className="rounded-3xl overflow-hidden bg-white/5 w-fit h-fit">
                                <img 
                                  src={experience.logo} 
                                  alt={`${experience.company} logo`}
                                  className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-500 drop-shadow-2xl"
                                  style={{ maxWidth: '20rem', maxHeight: '20rem' }}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Premium floating elements - Positioned relative to logo container for perfect corner placement */}
                          <div className="absolute -top-5 -right-5 w-10 h-10 bg-primary-400 rounded-full animate-pulse shadow-2xl shadow-primary-400/60 z-10" />
                          <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-secondary-400 rounded-full animate-pulse shadow-xl shadow-secondary-400/60 z-10" style={{ animationDelay: '0.5s' }} />
                          {/* Enhanced glow effect */}
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/20 to-secondary-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                          {/* Additional outer glow for prominence */}
                          <div className="absolute inset-[-8px] rounded-3xl bg-gradient-to-br from-primary-400/10 to-secondary-400/10 blur-lg opacity-0 hover:opacity-50 transition-opacity duration-500" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Large Logo on left - Maximum size with perfect decorative positioning */}
                      <div className="timeline-content-left flex justify-center items-center h-full">
                        <div className={`relative ${animationClasses.scaleIn}`} style={{ animationDelay: `${index * 100 + 200}ms` }}>
                          <div className="glass-card neon-border shadow-2xl p-6">
                            <div className="w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 flex items-center justify-center">
                              <div className="rounded-3xl overflow-hidden bg-white/5 w-fit h-fit">
                                <img 
                                  src={experience.logo} 
                                  alt={`${experience.company} logo`}
                                  className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-500 drop-shadow-2xl"
                                  style={{ maxWidth: '20rem', maxHeight: '20rem' }}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Premium floating elements - Positioned relative to logo container for perfect corner placement */}
                          <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary-400 rounded-full animate-pulse shadow-2xl shadow-primary-400/60 z-10" />
                          <div className="absolute -bottom-5 -right-5 w-8 h-8 bg-secondary-400 rounded-full animate-pulse shadow-xl shadow-secondary-400/60 z-10" style={{ animationDelay: '0.5s' }} />
                          {/* Enhanced glow effect */}
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/20 to-secondary-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                          {/* Additional outer glow for prominence */}
                          <div className="absolute inset-[-8px] rounded-3xl bg-gradient-to-br from-primary-400/10 to-secondary-400/10 blur-lg opacity-0 hover:opacity-50 transition-opacity duration-500" />
                        </div>
                      </div>
                      {/* Card on right */}
                      <div className="timeline-content-right">
                        <ExperienceCard 
                          {...experience}
                          className="timeline-card-full"
                          hideCompanyLogo={true}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Enhanced horizontal scroll with better indicators */}
        <div className="lg:hidden">
          {/* Mobile instructions */}
          <div className="text-center mb-6">
            <p className="text-sm text-neutral-400 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Swipe to explore my journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>

          <div className="scroll-container">
            {displayedExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id}
                {...experience}
                className={`${activeIndex === index ? 'scale-105 ring-2 ring-primary-400/30' : 'scale-95 opacity-75'} transition-all duration-300`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Enhanced progress indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {displayedExperiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary-400 w-8' 
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`View experience ${index + 1}`}
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