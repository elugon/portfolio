import React from 'react';
import ValueCard from '../common/ValueCard';
import { coreValues } from '../../data/about-data';
import { animationClasses } from '../../utils/tailwind-animations';
import type { BaseComponentProps } from '../../types';

/**
 * ValueSection Component - Single Responsibility: Display core values section
 * 
 * Follows SOLID principles:
 * - Single Responsibility: Only handles the values section presentation
 * - Open/Closed: Extensible via props and data injection
 * - Liskov Substitution: Can replace any section component
 * - Interface Segregation: Minimal interface with BaseComponentProps
 * - Dependency Inversion: Depends on ValueCard abstraction and data import
 */
interface ValueSectionProps extends BaseComponentProps {
  title?: string;
}

export default function ValueSection({ 
  title = "My Core Values",
  className = "",
  ...rest 
}: ValueSectionProps) {
  return (
    <div
      className={`mt-20 ${animationClasses.fadeInUp} ${className}`}
      {...rest}
    >
      {/* Section title */}
      <h4 className="text-2xl font-bold text-center mb-12 text-neutral-100">
        {title}
      </h4>
      
      {/* Values grid with responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {coreValues.map((value, index) => (
          <ValueCard
            key={value.id}
            icon={value.icon}
            title={value.title}
            description={value.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}