import { motion } from "framer-motion";
import React from "react";
import { motionPresets } from "../../utils/animations";
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
    <motion.section
      {...motionPresets.fadeInUp}
      className={`my-screen relative mx-auto flex max-w-full flex-col items-center justify-evenly overflow-hidden ${containerClassName}`}
      id={title?.toLowerCase().replace(/\s+/g, '-')}
    >
      {title && (
        <motion.div
          {...motionPresets.slideInFromTop}
          className={`absolute top-16 text-center ${headerClassName}`}
        >
          <h2 className="text-2xl uppercase tracking-[15px] text-gray-500 mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-sm tracking-wider">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      
      <div className={`relative z-20 ${className}`}>
        {children}
      </div>
    </motion.section>
  );
}