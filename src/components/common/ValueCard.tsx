import React from 'react';
import type { CardProps } from '../../types';
import { animationClasses } from '../../utils/tailwind-animations';

/**
 * ValueCard Component - Single Responsibility: Display a single value card
 * 
 * Follows SOLID principles:
 * - Single Responsibility: Only renders a value card
 * - Open/Closed: Extensible via props without modification
 * - Liskov Substitution: Can be used anywhere a card is needed
 * - Interface Segregation: Only depends on CardProps
 * - Dependency Inversion: Depends on props abstraction, not concrete data
 */
export default function ValueCard({ 
  icon, 
  title, 
  description, 
  index = 0,
  className = '',
  ...rest 
}: CardProps) {
  return (
    <div
      className={`glass-card-hover p-8 md:p-10 rounded-2xl text-center group ${animationClasses.scaleIn} ${className}`}
      style={{ animationDelay: `${index * 100}ms` }}
      {...rest}
    >
      {/* Icon with hover animation */}
      <div className="text-5xl mb-4 hover:rotate-12 transition-transform duration-500">
        {icon}
      </div>
      
      {/* Title with group hover effect */}
      <h5 className="text-xl font-semibold text-neutral-100 mb-3 group-hover:text-primary-400 transition-colors">
        {title}
      </h5>
      
      {/* Description */}
      <p className="text-sm text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}