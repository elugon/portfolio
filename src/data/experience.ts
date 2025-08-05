import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'ey',
    title: 'Desarrollador de Software',
    company: 'Ernst & Young',
    period: 'Febrero 2023 - Presente',
    logo: '/experiencesImages/EYLogo.jpg',
    location: 'Remoto',
    employmentType: 'Full-time',
    industry: 'Servicios Profesionales',
    companySize: '250,000+ empleados',
    teamSize: '8-12 desarrolladores',
    description: 'Liderando iniciativas de desarrollo de software para soluciones financieras y de consultoría a nivel empresarial, enfocándome en tecnologías web modernas y arquitecturas escalables.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
    keySkills: ['Desarrollo Full-Stack', 'Revisión de Código', 'Liderazgo de Equipo', 'Metodologías Ágiles'],
    achievements: [
      'Mejoré el rendimiento de aplicaciones en un 40% mediante optimización de código',
      'Lideré la migración de sistemas legacy a arquitectura moderna de React',
      'Mentoré a más de 5 desarrolladores junior en buenas prácticas y calidad de código'
    ],
    responsibilities: [
      'Desarrollé y mantuve aplicaciones web usando frameworks modernos de JavaScript',
      'Colaboré con equipos multifuncionales para entregar soluciones de software de alta calidad',
      'Implementé diseños responsivos y optimicé el rendimiento de aplicaciones',
      'Participé en revisiones de código y mentoré desarrolladores junior'
    ]
  },
  {
    id: 'progressus',
    title: 'Desarrollador Frontend',
    company: 'Progressus',
    period: 'Junio 2022 - Enero 2023',
    logo: '/experiencesImages/ProgressusLogo.png',
    location: 'Remoto',
    employmentType: 'Contract',
    industry: 'Tecnología',
    companySize: '50-100 empleados',
    teamSize: '4-6 desarrolladores',
    description: 'Especializado en crear soluciones frontend modernas y responsivas para plataformas SaaS con enfoque en experiencia de usuario y optimización de rendimiento.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma'],
    keySkills: ['Implementación UI/UX', 'Optimización de Rendimiento', 'Diseño Responsivo', 'Arquitectura de Componentes'],
    achievements: [
      'Reduje los tiempos de carga de página en un 35% mediante técnicas de optimización',
      'Implementé un sistema de diseño utilizado en más de 10 componentes',
      'Logré un 98% de compatibilidad entre navegadores'
    ],
    responsibilities: [
      'Construí interfaces de usuario responsivas usando React y TypeScript',
      'Implementé frameworks CSS modernos para consistencia de estilos',
      'Colaboré con diseñadores UX/UI para crear experiencias de usuario intuitivas',
      'Optimicé el rendimiento y accesibilidad del frontend'
    ]
  },
  {
    id: 'studentfy',
    title: 'Desarrollador Full Stack',
    company: 'Studentfy',
    period: 'Enero 2022 - Mayo 2022',
    logo: '/experiencesImages/StudentfyLogo.png',
    location: 'Remoto',
    employmentType: 'Contract',
    industry: 'Tecnología Educativa',
    companySize: '10-20 empleados',
    teamSize: '3-4 desarrolladores',
    description: 'Desarrollo integral de funcionalidades de plataforma educativa, manejando tanto la experiencia de usuario frontend como el desarrollo de APIs backend para sistemas de gestión estudiantil.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
    keySkills: ['Desarrollo Full-Stack', 'Diseño de APIs', 'Diseño de Base de Datos', 'Aplicaciones en Tiempo Real'],
    achievements: [
      'Construí un panel estudiantil completo con notificaciones en tiempo real',
      'Diseñé e implementé más de 15 endpoints de API RESTful',
      'Reduje el tiempo de consulta de base de datos en un 50% mediante optimización'
    ],
    responsibilities: [
      'Desarrollé aplicaciones web full-stack desde el concepto hasta el despliegue',
      'Diseñé e implementé APIs RESTful usando Node.js y Express',
      'Creé componentes frontend responsivos con React',
      'Gestioné operaciones de base de datos y modelado de datos con MongoDB'
    ]
  },
  {
    id: 'supercellcomp',
    title: 'Desarrollador Junior',
    company: 'Supercellcomp',
    period: 'Agosto 2021 - Diciembre 2021',
    logo: '/experiencesImages/SupercellcompLogo.png',
    location: 'Presencial',
    employmentType: 'Internship',
    industry: 'Agencia Digital',
    companySize: '5-10 empleados',
    teamSize: '2-3 desarrolladores',
    description: 'Posición de nivel inicial enfocada en aprender fundamentos de desarrollo web mientras contribuía a proyectos de clientes y construía habilidades fundamentales en tecnologías web modernas.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Bootstrap', 'jQuery'],
    keySkills: ['Fundamentos de Desarrollo Web', 'Control de Versiones', 'Diseño Responsivo', 'Resolución de Problemas'],
    achievements: [
      'Completé exitosamente más de 8 proyectos de sitios web para clientes',
      'Dominé el flujo de trabajo de Git y desarrollo colaborativo',
      'Logré competencia en principios de diseño responsivo'
    ],
    responsibilities: [
      'Desarrollé sitios web estáticos y componentes web interactivos',
      'Aprendí prácticas modernas de desarrollo web y control de versiones',
      'Participé en procesos de desarrollo ágil',
      'Adquirí experiencia con principios de diseño web responsivo'
    ]
  }
];

export const getCurrentExperience = () => 
  experiences.find(exp => exp.period.includes('Present'));

export const getExperienceById = (id: string) => 
  experiences.find(exp => exp.id === id);

export const getExperienceByCompany = (company: string) => 
  experiences.find(exp => exp.company.toLowerCase() === company.toLowerCase());