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
  title = "Acerca", 
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
          Conoce Más Sobre Mí
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
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Image container with responsive sizing */}
                <div className="relative overflow-hidden rounded-2xl aspect-square max-w-sm mx-auto lg:max-w-md xl:max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 mix-blend-overlay z-10" />
                  <img 
                    src={profileImage} 
                    alt={`${personalInfo.name} about picture`}
                    className="img-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating accent - scaled down */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary-400/10 rounded-full blur-2xl animate-pulse"
                />
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary-400/10 rounded-full blur-2xl animate-pulse animation-delay-300"
                />
              </div>
            </div>
            
            {/* Content section */}
            <div
              className={`spacing-md ${animationClasses.slideInFromRight}`}
            >
              <div>
                <h4 className="text-subtitle bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent mb-4">
                  Creando Excelencia Digital
                </h4>
                <p className="text-body text-neutral-300 leading-relaxed mb-6">
                  Como <span className="text-primary-400 font-semibold">Ingeniero de Sistemas</span> con una pasión por 
                  crear experiencias digitales excepcionales, {personalInfo.description}
                </p>
                <p className="text-body text-neutral-400 leading-relaxed">
                  Mi formación en ingeniería me proporciona sólidas habilidades analíticas y de resolución de problemas, 
                  permitiéndome abordar desafíos complejos con soluciones innovadoras. Creo en escribir 
                  código limpio y mantenible que no solo funcione, sino que escale.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {aboutStats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className={`card-xs text-center hover:shadow-card-hover transition-all duration-300 ${animationClasses.fadeInUp}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-lg sm:text-xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-neutral-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className={`flex flex-wrap gap-3 ${animationClasses.fadeInUp} animation-delay-400`}
              >
                <a href="#contact" className="btn-secondary text-sm px-4 py-2">
                  Trabajemos Juntos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="/CV-Elu-Gonzalez-IT-Manager-Prompt-Engineer.pdf" 
                  className="btn-ghost text-sm px-4 py-2"
                  download="CV Elu Gonzalez - IT Manager and Prompt Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar CV
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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