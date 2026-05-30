export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'React' | 'UIUX' | 'Mobile';
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  percentage?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
