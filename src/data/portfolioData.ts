import type { HeroData, AboutData, Experience, Project, Education, Skill, ContactInfo } from '../types';

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  name: "Harshit Rajput",
  title: ".NET Developer & Software Engineer",
  description:
    "Passionate .NET Developer with over 3 years of experience building scalable enterprise solutions, APIs, and cloud-integrated applications. Skilled in C#, ASP.NET Core, and SQL Server, I’m dedicated to writing clean, maintainable code and delivering high-performance software. Always eager to learn and apply emerging technologies to solve real-world challenges.",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/HARSHIT-828550", icon: "🐙" },
    { name: "LinkedIn", url: "www.linkedin.com/in/harshit-rajput-0b8b17193", icon: "💼" },
    { name: "Email", url: "mailto:harshit828550@gmail.com", icon: "📧" }
    
  ]
};

export const aboutData: AboutData = {
  description:
    "I’m a dedicated and detail-oriented software engineer specializing in the Microsoft tech stack. With a strong focus on backend and API development, I have successfully contributed to several enterprise projects in healthcare, finance, and logistics domains. My goal is to deliver efficient, scalable, and secure software systems while staying updated with the latest .NET ecosystem and cloud innovations.",
  stats: [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Delivered" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" }
  ]
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Senior .NET Developer",
    company: "Microware Computing & Consulting Pvt. Ltd.",
    period: "2022 - Present",
    description:
      "Leading .NET Core backend development for multiple web platforms under Jhpiego’s RCH project. Architected APIs, implemented complex SQL procedures, integrated authentication layers, and deployed services using Docker and Azure DevOps. Designed and optimized stored procedures improving performance by 40%.",
    technologies: ["reactjs" , "angular","C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Ocelot API Gateway"]
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Child Care Management System",
    description:
      "Developed a comprehensive full-stack Child Care Management System aimed at ensuring child well-being through nutrition tracking, growth monitoring, education progress, and personality development. Designed for organizations managing early childhood care programs, the system enables data-driven insights and personalized support plans. Implemented a modular and scalable backend in .NET Core using a Generic Repository Pattern and Service Layer architecture to promote clean code and reusability. The frontend, built in ReactJS, features dynamic dashboards, progress analytics, and interactive reports for monitoring children’s health and development. The solution supports role-based access, secure API communication, and automated reporting for healthcare and educational teams.",
    image: "/image/childcare.jpg",
    technologies: [
      ".NET Core",
      "Entity Framework Core",
      "SQL Server",
      "ReactJS",
      "Generic Repository Pattern",
      "Service Layer Architecture",
      "REST API",
      "C#",
      "Swagger",
      "JWT Authentication",
      "Bootstrap",
      "Axios"
    ],
    role: "Full Stack Developer",
    achievements: [
      "Implemented scalable Generic Repository and Service Layer pattern for maintainable architecture.",
      "Built ReactJS dashboard with child nutrition and growth analytics charts.",
      "Added JWT authentication and role-based access for secure user operations.",
      "Integrated dynamic PDF and Excel export features for child development reports.",
      "Reduced API response time by 30% through optimized SQL queries."
    ],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "1",
    title: "Integrated Women in Health Network (iWIN)",
    description:
      "Developed and maintained the iWIN health management system for women’s healthcare data management. Built APIs in .NET Core 5 and optimized SQL Server queries for antenatal, intrapartum, and postpartum healthcare data. Designed scalable microservices and implemented secure data exchange between modules to ensure high reliability and system performance.",
    image: "/image/iwin.jpg",
    technologies: [
      ".NET Core 5",
      "ASP.NET",
      "Entity Framework Core",
      "SQL Server 2019",
      "REST API",
      "Microservices",
      "JWT Authentication"
    ],
    role: "Full Stack Developer",
    achievements: [
      "Improved API performance by optimizing 50+ SQL stored procedures.",
      "Integrated multi-module architecture ensuring seamless data synchronization.",
      "Developed secure REST APIs for healthcare analytics and reporting dashboards.",
      "Collaborated with UI teams for real-time visualization of patient data."
    ],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "2",
    title: "Comprehensive Adolescent Health Program (CAHP)",
    description:
      "Created and maintained a survey-driven web platform for tracking adolescent girls’ and women’s health data. Designed and implemented robust APIs in .NET Core for capturing field data and generating analytical health reports. Focused on improving data integrity, reducing redundancy, and providing real-time access to health records.",
    image: "/image/cahp.jpg",
    technologies: [
      ".NET Core",
      "MSSQL",
      "Entity Framework",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "DataTables"
    ],
    role: "Full Stack Developer / Survey Application Developer",
    achievements: [
      "Developed dynamic SQL reports supporting real-time analytics.",
      "Built reusable components for faster survey creation and form management.",
      "Reduced report generation time by 40% through optimized queries.",
      "Implemented client-side validation and error handling for data quality assurance."
    ],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "3",
    title: "WeCare Application",
    description:
      "Developed the WeCare system to manage patient health records and counseling data. Designed API architecture using ASP.NET Core and Entity Framework to handle large datasets efficiently. Added reporting and tracking features to improve healthcare decision-making and operational visibility.",
    image: "/image/wecare.jpg",
    technologies: [
      ".NET Core",
      "Entity Framework",
      "SQL Server",
      "jQuery",
      "DataTables",
      "Bootstrap",
      "AJAX"
    ],
    role: "Full Stack Developer",
    achievements: [
      "Delivered dynamic reporting modules with multi-parameter filters.",
      "Implemented pagination and search functionality using DataTables.",
      "Improved SQL performance with indexed views and query optimization.",
      "Automated export of Excel reports for management and monitoring teams."
    ],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "4",
    title: "Planned Social Concern Automation",
    description:
      "Built an automation platform for financial and social welfare programs. Streamlined loan processing, beneficiary tracking, and reporting through integrated APIs. Designed an efficient data flow between client, server, and database layers for better operational transparency.",
    image: "/image/planned-social-concern.jpg",
    technologies: [
      ".NET Core",
      "MSSQL",
      "Entity Framework Core",
      "Web API",
      "jQuery",
      "Bootstrap"
    ],
    role: "Software Developer",
    achievements: [
      "Automated 80% of manual financial reporting processes.",
      "Implemented RESTful APIs for loan disbursement and tracking.",
      "Built a data validation layer ensuring data integrity across workflows.",
      "Designed stored procedures for faster financial calculations and summaries."
    ],
    liveUrl: "#",
    codeUrl: "#"
  }
];




export const education: Education[] = [
  
  {
    id: "1",
    degree: "Master of Computer Applications (MCA)",
    institution: "IFTM University (Institute of Foreign Trade and Management)",
    duration: "2021 - 2023",
    description: "Focused on advanced software engineering, .NET technologies, database design, and project development.",
    icon: "🎓"
  },
  {
    id: "2",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mahatma Jyotiba Phule Rohilkhand University (MJPRU)",
    duration: "2014 - 2017",
    description: "Completed BCA with a focus on software fundamentals, database management, and web technologies.",
    icon: "💻"
  }
];


export const skills: Skill[] = [
  {
    category: "Backend Development",
    skills: [
      { name: "C#", icon: "🔧" },
      { name: "ASP.NET Core", icon: "🌐" },
      { name: "Entity Framework Core", icon: "🗄️" },
      { name: "Web services", icon: "🔌" },
      { name: "REST API", icon: "🔌" },
      { name: "Ocelot API Gateway", icon: "🔌" },
      { name: "LINQ", icon: "🔍" }
     
    ]
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "SQL Server", icon: "🗃️" },
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Azure SQL", icon: "☁️" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Azure DevOps", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Git & Bitbucket", icon: "📚" },
      { name: "Jenkins", icon: "🤖" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" },
      { name: "TypeScript", icon: "📘" }
    ]
  },
  {
    category: "Other Tools & Platforms",
    skills: [
      { name: "Visual Studio", icon: "💻" },
      { name: "VS Code", icon: "🧠" },
      { name: "Postman", icon: "📨" },
      { name: "Power BI", icon: "📊" },
      { name: "Figma", icon: "🎨" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Team Collaboration", icon: "🤝" },
      { name: "Problem Solving", icon: "💡" },
      { name: "Agile Development", icon: "🏃‍♂️" },
      { name: "Code Review & Mentoring", icon: "🧑‍🏫" }
    ]
  }
];

export const contactInfo: ContactInfo = {
  email: "harshit828550@gmail.com",
  phone: "+91 90846 32065",
  location: "Gurgaon, Haryana, India",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/HARSHIT-828550", icon: "🐙" },
    { name: "LinkedIn", url: "www.linkedin.com/in/harshit-rajput-0b8b17193", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/harshit_rajput", icon: "🐦" },
    { name: "Stack Overflow", url: "https://stackoverflow.com/users/harshit-rajput", icon: "📚" }
  ]
};
