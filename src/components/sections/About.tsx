import React from "react";
import { personalInfo } from "../../data/personal-info";
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
  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    { 
      icon: "💡", 
      title: "Innovation", 
      description: "Constantly exploring new technologies and creative solutions"
    },
    { 
      icon: "🎯", 
      title: "Quality", 
      description: "Delivering pixel-perfect, performant applications"
    },
    { 
      icon: "🤝", 
      title: "Collaboration", 
      description: "Working seamlessly with teams to achieve common goals"
    },
  ];

  return (
    <div
      className={`section-container-xl ${animationClasses.fadeInUp} ${className}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 section-gradient-subtle" />
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
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
              <div className="grid grid-cols-3 gap-sm padding-md">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center ${animationClasses.fadeInUp}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
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

          {/* Values section */}
          <div
            className={`mt-20 ${animationClasses.fadeInUp}`}
          >
            <h4 className="text-2xl font-bold text-center mb-12 text-neutral-100">
              My Core Values
            </h4>
            <div className="layout-three-col">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`glass-card-hover p-8 rounded-2xl text-center group ${animationClasses.scaleIn}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="text-5xl mb-4 hover:rotate-12 transition-transform duration-500"
                  >
                    {value.icon}
                  </div>
                  <h5 className="text-xl font-semibold text-neutral-100 mb-3 group-hover:text-primary-400 transition-colors">
                    {value.title}
                  </h5>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional info cards with modern styling */}
          <div
            className={`grid-1-2-3 ${animationClasses.fadeInUp} animation-delay-200`}
          >
            <div className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex-center">
                  <span className="text-lg">🎯</span>
                </div>
                <h5 className="text-lg font-semibold text-neutral-100">Focus Areas</h5>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Full-stack development, React ecosystem, modern web technologies, and cloud architecture
              </p>
            </div>
            
            <div className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary-400 to-secondary-600 flex-center">
                  <span className="text-lg">🚀</span>
                </div>
                <h5 className="text-lg font-semibold text-neutral-100">Approach</h5>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Clean architecture, test-driven development, user-centered design, and agile methodologies
              </p>
            </div>
            
            <div className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-semantic-success-400 to-semantic-success-600 flex-center">
                  <span className="text-lg">💚</span>
                </div>
                <h5 className="text-lg font-semibold text-neutral-100">Interests</h5>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Soccer, cinema, emerging technologies, and contributing to open-source projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-40 right-0 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-float"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl animate-float animation-delay-500"
      />
    </div>
  );
}