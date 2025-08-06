import React from "react";
import type { Experience } from "../../types";
import { animationClasses, hoverClasses } from "../../utils/tailwind-animations";
import { getLocalizedEmploymentType, getLocalizedLocation, locationMap } from "../../utils/i18n-mappings";

interface ExperienceCardProps extends Experience {
  className?: string;
  onClick?: () => void;
  hideCompanyLogo?: boolean;
}

export default function ExperienceCard({ 
  title, 
  company, 
  period, 
  logo, 
  responsibilities, 
  technologies,
  location,
  employmentType,
  description,
  achievements,
  keySkills,
  teamSize,
  companySize,
  industry,
  className = "",
  onClick,
  hideCompanyLogo = false
}: ExperienceCardProps) {
  return (
    <article 
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 backdrop-blur-sm border border-neutral-700/50 hover:border-primary-400/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-primary-400/10 ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 via-transparent to-secondary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Main Content */}
      <div className="relative p-6 space-y-6">
        {/* Header Section - Redesigned for better hierarchy */}
        <header className="flex items-start gap-4">
          {/* Logo Column - Simplified and more prominent */}
          {!hideCompanyLogo && (
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white/10 p-2 ring-2 ring-neutral-700/50 group-hover:ring-primary-400/30 transition-all duration-300">
                <img 
                  src={logo} 
                  alt={`${company} logo`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-400 rounded-full border-2 border-neutral-800 shadow-lg animate-pulse" />
            </div>
          )}
          
          {/* Title & Company Info */}
          <div className="flex-1 min-w-0">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-primary-400 transition-colors duration-300">
                {title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-lg font-semibold text-primary-400">{company}</span>
                {employmentType && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary-400/20 text-secondary-300 border border-secondary-400/30">
                    {getLocalizedEmploymentType(employmentType)}
                  </span>
                )}
              </div>
            </div>
            
            {/* Meta information - Simplified */}
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">{period}</span>
              </div>
              {location && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location && ['Remote', 'On-site', 'Hybrid'].includes(location) ? getLocalizedLocation(location as keyof typeof locationMap) : location}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Company Context - Compact info pills */}
        {(industry || companySize || teamSize) && (
          <div className="flex flex-wrap gap-2">
            {industry && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-800/50 text-neutral-300 border border-neutral-700/50">
                <span className="text-blue-400">🏢</span>
                {industry}
              </span>
            )}
            {companySize && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-800/50 text-neutral-300 border border-neutral-700/50">
                <span className="text-green-400">👥</span>
                {companySize}
              </span>
            )}
            {teamSize && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-800/50 text-neutral-300 border border-neutral-700/50">
                <span className="text-purple-400">⚡</span>
                Equipo: {teamSize}
              </span>
            )}
          </div>
        )}

        {/* Description - More prominent */}
        {description && (
          <div className="rounded-lg bg-gradient-to-r from-neutral-800/30 to-neutral-800/10 p-4 border-l-4 border-primary-400/60">
            <p className="text-sm text-neutral-300 leading-relaxed font-medium">{description}</p>
          </div>
        )}

        {/* Key Achievements - Highlighted section */}
        {achievements && achievements.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Logros Principales
            </h4>
            <div className="grid gap-2">
              {achievements.slice(0, 3).map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-400/5 to-transparent border border-yellow-400/20">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills and Technologies - Simplified layout */}
        <div className="space-y-4">
          {/* Key Skills */}
          {keySkills && keySkills.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-neutral-200 uppercase tracking-wide">Habilidades Clave</h4>
              <div className="flex flex-wrap gap-2">
                {keySkills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 text-primary-300 border border-primary-400/30 hover:border-primary-400/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-neutral-200 uppercase tracking-wide">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary-400/15 text-secondary-300 border border-secondary-400/25 hover:border-secondary-400/40 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>


      </div>
      
      {/* Hover accent border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary-400/0 to-secondary-400/0 group-hover:from-primary-400/20 group-hover:to-secondary-400/20 transition-all duration-500 pointer-events-none" style={{mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor'}} />
    </article>
  );
}