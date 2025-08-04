import React from "react";
import { animationClasses } from "../../utils/tailwind-animations";
import type { SectionProps } from "../../types";

interface ExtendedSectionProps extends SectionProps {
  children: React.ReactNode;
  containerClassName?: string;
  headerClassName?: string;
}

export default function Section({ 
  title, 
  subtitle,
  children, 
  className = "",
  containerClassName = "",
  headerClassName = ""
}: ExtendedSectionProps) {
  return (
    <section
      className={`section-container-xl ${containerClassName} ${animationClasses.fadeInUp}`}
      id={title?.toLowerCase().replace(/\s+/g, '-')}
    >
      {title && (
        <div
          className={`section-header-fixed ${headerClassName} ${animationClasses.slideInFromTop}`}
        >
          <h2 className="section-title text-3d">
            {title}
          </h2>
          {subtitle && (
            <p className="section-subtitle mt-2">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className={`section-content-fixed ${className}`}>
        <div className="container-xl">
          {children}
        </div>
      </div>
    </section>
  );
}