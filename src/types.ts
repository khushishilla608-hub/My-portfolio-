export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Tech' | 'Art';
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Creative' | 'Soft';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
