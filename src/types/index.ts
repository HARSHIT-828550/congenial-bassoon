export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  achievements?: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  icon: string;
}

export interface Skill {
  category: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  description: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface AboutData {
  description: string;
  stats: {
    number: string;
    label: string;
  }[];
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
