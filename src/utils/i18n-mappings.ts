// i18n mappings for employment types and other enums
// Following 2025 best practices for internationalization
// Keeps data layer in English for consistency while displaying localized text

export const employmentTypeMap = {
  'Full-time': 'Tiempo completo',
  'Part-time': 'Tiempo parcial', 
  'Contract': 'Contrato',
  'Freelance': 'Freelance',
  'Internship': 'Prácticas'
} as const;

export const locationMap = {
  'Remote': 'Remoto',
  'On-site': 'Presencial',
  'Hybrid': 'Híbrido'
} as const;

// Utility function to get localized employment type
export function getLocalizedEmploymentType(type: keyof typeof employmentTypeMap): string {
  return employmentTypeMap[type] || type;
}

// Utility function to get localized location
export function getLocalizedLocation(location: keyof typeof locationMap): string {
  return locationMap[location] || location;
}

// Additional translations for common terms
export const commonTermsMap = {
  'Present': 'Presente',
  'Currently': 'Actualmente',
  'Experience': 'Experiencia',
  'Skills': 'Habilidades',
  'About': 'Acerca',
  'Contact': 'Contacto',
  'Projects': 'Proyectos',
  'Technologies': 'Tecnologías'
} as const;

// Utility function to get localized common terms
export function getLocalizedTerm(term: keyof typeof commonTermsMap): string {
  return commonTermsMap[term] || term;
}

// Future: This can be extended to support multiple languages
// export const employmentTypeMap = {
//   'es': { 'Full-time': 'Tiempo completo', ... },
//   'en': { 'Full-time': 'Full-time', ... },
//   'fr': { 'Full-time': 'Temps plein', ... }
// }