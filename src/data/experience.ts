import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'ey',
    title: 'Software Developer',
    company: 'Ernst & Young',
    period: 'February 2023 - Present',
    logo: '/experiencesImages/EYLogo.jpg',
    location: 'Remote',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    responsibilities: [
      'Developed and maintained web applications using modern JavaScript frameworks',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive designs and optimized application performance',
      'Participated in code reviews and mentored junior developers'
    ]
  },
  {
    id: 'progressus',
    title: 'Frontend Developer',
    company: 'Progressus',
    period: 'June 2022 - January 2023',
    logo: '/experiencesImages/ProgressusLogo.png',
    location: 'Remote',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    responsibilities: [
      'Built responsive user interfaces using React and TypeScript',
      'Implemented modern CSS frameworks for styling consistency',
      'Collaborated with UX/UI designers to create intuitive user experiences',
      'Optimized frontend performance and accessibility'
    ]
  },
  {
    id: 'studentfy',
    title: 'Full Stack Developer',
    company: 'Studentfy',
    period: 'January 2022 - May 2022',
    logo: '/experiencesImages/StudentfyLogo.png',
    location: 'Remote',
    technologies: ['Node.js', 'React', 'MongoDB', 'Express'],
    responsibilities: [
      'Developed full-stack web applications from concept to deployment',
      'Designed and implemented RESTful APIs using Node.js and Express',
      'Created responsive frontend components with React',
      'Managed database operations and data modeling with MongoDB'
    ]
  },
  {
    id: 'supercellcomp',
    title: 'Junior Developer',
    company: 'Supercellcomp',
    period: 'August 2021 - December 2021',
    logo: '/experiencesImages/SupercellcompLogo.png',
    location: 'On-site',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
    responsibilities: [
      'Developed static websites and interactive web components',
      'Learned modern web development practices and version control',
      'Participated in agile development processes',
      'Gained experience with responsive web design principles'
    ]
  }
];

export const getCurrentExperience = () => 
  experiences.find(exp => exp.period.includes('Present'));

export const getExperienceById = (id: string) => 
  experiences.find(exp => exp.id === id);

export const getExperienceByCompany = (company: string) => 
  experiences.find(exp => exp.company.toLowerCase() === company.toLowerCase());