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
      className={`my-screen relative mx-auto flex max-w-full flex-col items-center justify-evenly overflow-hidden ${containerClassName} ${animationClasses.fadeInUp}`}
      id={title?.toLowerCase().replace(/\s+/g, '-')}
    >
      {title && (
        <div
          className={`absolute top-16 text-center ${headerClassName} ${animationClasses.slideInFromTop}`}
        >
          <h2 className="text-2xl uppercase tracking-[15px] text-gray-500 mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-sm tracking-wider">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className={`relative z-20 ${className}`}>
        {children}
      </div>
    </section>
  );
}