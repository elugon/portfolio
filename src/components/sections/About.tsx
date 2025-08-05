import React from "react";
import { personalInfo } from "../../data/personal-info";
import { aboutStats } from "../../data/about-data";
import ValueSection from "./ValueSection";
import type { SectionProps } from "../../types";
import { animationClasses } from "../../utils/tailwind-animations";

interface AboutProps extends SectionProps {
  profileImage?: string;
}

export default function About({ 
  title = "About", 
  profileImage = "/profileImages/profilePicture4.jpg",
  className = ""
}: AboutProps) {

  return (
    <div
      className={`section-container-xl ${animationClasses.fadeInUp} ${className}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 section-gradient-subtle pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
      
      {/* Section header */}
      <div className="section-header-inline">
        <h3 
          className={`section-title text-3d ${animationClasses.fadeInDown}`}
        >
          {title}
        </h3>
        <p 
          className={`mt-2 text-muted text-sm font-medium ${animationClasses.fadeInUp} animation-delay-200`}
        >
          Get to Know Me Better
        </p>
      </div>
      
      <div className="section-content-inline spacing-xl">
        <div className="container-xl">
          {/* Main content grid */}
          <div className="layout-two-col">
            {/* Image section with enhanced effects */}
            <div
              className={`relative group ${animationClasses.slideInFromLeft}`}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 mix-blend-overlay z-10" />
                  <img 
                    src={profileImage} 
                    alt={`${personalInfo.name} about picture`}
                    className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating accent */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary-400/10 rounded-full blur-2xl animate-pulse"
                />
                <div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-400/10 rounded-full blur-2xl animate-pulse animation-delay-300"
                />
              </div>
            </div>
            
            {/* Content section */}
            <div
              className={`spacing-md ${animationClasses.slideInFromRight}`}
            >
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                  Crafting Digital Excellence
                </h4>
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  As a <span className="text-primary-400 font-semibold">Systems Engineer</span> with a passion for 
                  creating exceptional digital experiences, {personalInfo.description}
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  My engineering background provides me with strong analytical and problem-solving abilities, 
                  allowing me to tackle complex challenges with innovative solutions. I believe in writing 
                  clean, maintainable code that not only works but scales.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-md padding-md">
                {aboutStats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className={`text-center ${animationClasses.fadeInUp}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-neutral-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className={`flex flex-wrap gap-sm ${animationClasses.fadeInUp} animation-delay-400`}
              >
                <a href="#contact" className="btn-modern">
                  Let&apos;s Work Together
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/resume.pdf" className="btn-modern-outline">
                  Download Resume
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Values section - Now using SOLID principles */}
          <ValueSection />

        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-40 right-0 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-float pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl animate-float animation-delay-500 pointer-events-none"
      />
    </div>
  );
}