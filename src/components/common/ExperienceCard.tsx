import React from "react";
import type { Experience } from "../../types";
import { animationClasses, hoverClasses } from "../../utils/tailwind-animations";

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
      className={`card-lg scroll-item container-sm cursor-pointer ${hoverClasses.card} ${className}`}
    >
      {/* Grid Container with consistent spacing and responsive layout - Dynamic height */}
      <div className="grid gap-6">
        {/* Header Section - Company Logo and Basic Info */}
        <header className={`${hideCompanyLogo ? 'block' : 'grid grid-cols-[auto_1fr] gap-4 sm:gap-6'} border-b border-neutral-700/50 pb-4`}>
          {/* Logo Column - Enhanced prominence (only if not hidden) */}
          {!hideCompanyLogo && (
            <div className={`relative ${animationClasses.scaleIn}`}>
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-3xl overflow-hidden glass-card padding-md neon-border shadow-2xl">
                <img 
                  src={logo} 
                  alt={`${company} logo`}
                  className="w-full h-full object-contain hover:scale-110 transition-all duration-500 drop-shadow-lg rounded-2xl"
                  loading="lazy"
                />
              </div>
              {/* Enhanced floating accent with glow */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary-400 rounded-full animate-pulse shadow-xl shadow-primary-400/60" />
              {/* Additional subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/15 to-secondary-400/15 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              {/* Premium border highlight */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-primary-400/20 via-transparent to-secondary-400/20" />
            </div>
          )}
          
          {/* Info Column */}
          <div className="grid grid-rows-[auto_auto_auto] gap-2 min-w-0">
            <h4 className="text-xl sm:text-2xl font-bold text-neutral-100 leading-tight">{title}</h4>
            
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-primary-400 font-semibold text-base sm:text-lg">{company}</p>
              {employmentType && (
                <span className="px-2 py-1 text-xs font-medium rounded bg-secondary-400/20 text-secondary-300 border border-secondary-400/30">
                  {employmentType}
                </span>
              )}
            </div>
            
            {/* Meta information grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{period}</span>
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Grid - Main content area with consistent spacing - Dynamic height */}
        <div className="grid gap-4">
          {/* Company Context */}
          {(industry || companySize || teamSize) && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted bg-neutral-800/30 rounded-lg p-3">
              {industry && <span className="flex items-center gap-1"><span>🏢</span><span>{industry}</span></span>}
              {companySize && <span className="flex items-center gap-1"><span>👥</span><span>{companySize}</span></span>}
              {teamSize && <span className="flex items-center gap-1"><span>⚡</span><span>Team: {teamSize}</span></span>}
            </div>
          )}

          {/* Description */}
          {description && (
            <div className="bg-neutral-800/20 rounded-lg p-3">
              <p className="text-sm text-neutral-300 leading-relaxed italic">{description}</p>
            </div>
          )}

          {/* Two Column Grid for Skills and Achievements */}
          {((achievements && achievements.length > 0) || (keySkills && keySkills.length > 0)) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Key Achievements */}
              {achievements && achievements.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Key Achievements</span>
                  </h5>
                  <ul className="space-y-1">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="grid grid-cols-[auto_1fr] gap-2 text-sm text-neutral-300">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Skills */}
              {keySkills && keySkills.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-neutral-200">Core Skills</h5>
                  <div className="grid grid-cols-2 gap-1">
                    {keySkills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 text-xs font-medium rounded bg-gradient-to-r from-primary-400/15 to-primary-600/15 text-primary-300 border border-primary-400/25 text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-neutral-200">Technologies</h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded bg-secondary-400/10 text-secondary-300 border border-secondary-400/20 hover:border-secondary-400/40 transition-colors duration-300 text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities - Full visibility, no height restrictions */}
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-neutral-200">Key Responsibilities</h5>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li 
                  key={index}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="grid grid-cols-[auto_1fr] gap-2 text-sm text-neutral-300 animate-slide-right motion-reduce-animation"
                >
                  <span className="flex-shrink-0 mt-1.5">
                    <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 via-primary-400/0 to-primary-400/0 hover:from-primary-400/3 hover:via-transparent hover:to-secondary-400/3 transition-all duration-500 rounded-2xl pointer-events-none" />
      </div>
    </article>
  );
}