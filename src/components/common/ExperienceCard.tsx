import { motion } from "framer-motion";
import React from "react";
import type { Experience } from "../../types";
import { motionPresets } from "../../utils/animations";

interface ExperienceCardProps extends Experience {
  className?: string;
  onClick?: () => void;
}

export default function ExperienceCard({ 
  title, 
  company, 
  period, 
  logo, 
  responsibilities, 
  technologies,
  location,
  className = "",
  onClick
}: ExperienceCardProps) {
  return (
    <article 
      onClick={onClick}
      className={`card-lg scroll-item min-h-[500px] max-h-[600px] container-sm cursor-pointer hover:scale-[1.02] transition-all duration-500 ${className}`}
    >
      <div className="h-full flex flex-col spacing-md">
        {/* Header with logo and company info */}
        <div className="flex items-start gap-md">
          <motion.div
            {...motionPresets.scaleIn}
            className="relative flex-shrink-0"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden glass-card padding-sm neon-border">
              <img 
                src={logo} 
                alt={`${company} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400 rounded-full animate-pulse" />
          </motion.div>
          
          <div className="flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-neutral-100 mb-1">{title}</h4>
            <p className="text-primary-400 font-semibold text-base sm:text-lg flex items-center gap-2">
              {company}
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            </p>
            <p className="text-muted text-sm mt-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {period}
            </p>
            {location && (
              <p className="text-muted text-sm mt-1 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </p>
            )}
          </div>
        </div>

        {/* Technologies with modern styling */}
        <div>
          <div className="flex flex-wrap gap-xs">
            {technologies?.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary-400/10 to-primary-600/10 text-primary-300 border border-primary-400/20 hover:border-primary-400/40 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Responsibilities with enhanced styling */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/80 pointer-events-none z-10" />
          <ul className="spacing-sm overflow-y-auto max-h-48 pr-2 responsibilities-list">
            {responsibilities.map((responsibility, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-sm text-neutral-300"
              >
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="leading-relaxed">{responsibility}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Modern hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 via-primary-400/0 to-primary-400/0 hover:from-primary-400/5 hover:via-transparent hover:to-secondary-400/5 transition-all duration-500 rounded-2xl pointer-events-none" />
      </div>
    </article>
  );
}