export interface Product {
  id: string;
  name: string;
  category: 'panels' | 'inverters' | 'batteries' | 'controllers' | 'lighting' | 'pumps' | 'mounting' | 'cables' | 'kits' | 'accessories';
  description: string;
  price?: number;
  image: string;
  features: string[];
  specs: Record<string, string>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Industrial' | 'Public';
  capacity: string;
  description: string;
  image: string;
  year: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
