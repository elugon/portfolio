import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'ey',
    title: 'Software Developer',
    company: 'Ernst & Young',
    period: 'February 2023 - Present',
    logo: '/experiencesImages/EYLogo.jpg',
    location: 'Remote',
    employmentType: 'Full-time',
    industry: 'Professional Services',
    companySize: '250,000+ employees',
    teamSize: '8-12 developers',
    description: 'Leading software development initiatives for enterprise-level financial and consulting solutions, focusing on modern web technologies and scalable architectures.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
    keySkills: ['Full-Stack Development', 'Code Review', 'Team Leadership', 'Agile Methodologies'],
    achievements: [
      'Improved application performance by 40% through code optimization',
      'Led migration of legacy systems to modern React architecture',
      'Mentored 5+ junior developers in best practices and code quality'
    ],
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
    employmentType: 'Contract',
    industry: 'Technology',
    companySize: '50-100 employees',
    teamSize: '4-6 developers',
    description: 'Specialized in creating modern, responsive frontend solutions for SaaS platforms with focus on user experience and performance optimization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma'],
    keySkills: ['UI/UX Implementation', 'Performance Optimization', 'Responsive Design', 'Component Architecture'],
    achievements: [
      'Reduced page load times by 35% through optimization techniques',
      'Implemented design system used across 10+ components',
      'Achieved 98% cross-browser compatibility score'
    ],
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
    employmentType: 'Contract',
    industry: 'EdTech',
    companySize: '10-20 employees',
    teamSize: '3-4 developers',
    description: 'End-to-end development of educational platform features, handling both frontend user experience and backend API development for student management systems.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
    keySkills: ['Full-Stack Development', 'API Design', 'Database Design', 'Real-time Applications'],
    achievements: [
      'Built complete student dashboard with real-time notifications',
      'Designed and implemented 15+ RESTful API endpoints',
      'Reduced database query time by 50% through optimization'
    ],
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
    employmentType: 'Internship',
    industry: 'Digital Agency',
    companySize: '5-10 employees',
    teamSize: '2-3 developers',
    description: 'Entry-level position focused on learning web development fundamentals while contributing to client projects and building foundational skills in modern web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Bootstrap', 'jQuery'],
    keySkills: ['Web Development Fundamentals', 'Version Control', 'Responsive Design', 'Problem Solving'],
    achievements: [
      'Successfully completed 8+ client website projects',
      'Mastered Git workflow and collaborative development',
      'Achieved proficiency in responsive design principles'
    ],
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