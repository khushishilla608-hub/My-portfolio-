import { Project, Skill, Service } from './types';

export const TAGLINES = [
  "Blending AI with Creativity to Build Meaningful Experiences",
  "Where Data Science Meets the Art of Handmade Craft"
];

export const BIO = "I am a BCA student specializing in AI and Data Science, driven by a unique journey that began in medical studies and evolved into a passion for technology and art. My work is a reflection of discipline, analytical thinking, and a deep-seated love for handmade creativity, particularly broken mirror paintings and glass art.";

export const SKILLS: Skill[] = [
  { name: "Python", category: "Technical" },
  { name: "Data Science Basics", category: "Technical" },
  { name: "AI Concepts", category: "Technical" },
  { name: "Basic Programming", category: "Technical" },
  { name: "Broken Mirror Painting", category: "Creative" },
  { name: "Glass Art", category: "Creative" },
  { name: "Handmade Crafts", category: "Creative" },
  { name: "Design Thinking", category: "Creative" },
  { name: "Communication", category: "Soft" },
  { name: "Problem Solving", category: "Soft" },
  { name: "Creativity", category: "Soft" },
  { name: "Discipline", category: "Soft" }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Predictive Health Analysis",
    description: "Leveraging my medical background and AI skills to analyze health data trends using Python.",
    category: "Tech",
    image: "https://picsum.photos/seed/health-ai/800/600",
    tags: ["Python", "Data Science", "Healthcare"]
  },
  {
    id: "2",
    title: "Broken Mirror Mosaic",
    description: "A large-scale handmade artwork using recycled mirrors to create a shimmering landscape.",
    category: "Art",
    image: "https://picsum.photos/seed/mirror-art/800/600",
    tags: ["Handmade", "Glass Art", "Mosaic"]
  },
  {
    id: "3",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard built to visualize complex datasets in a clean, minimalist way.",
    category: "Tech",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tags: ["Python", "Matplotlib", "UI Design"]
  },
  {
    id: "4",
    title: "Traditional Glass Painting",
    description: "Intricate floral designs on glass panels using vibrant colors and traditional techniques.",
    category: "Art",
    image: "https://picsum.photos/seed/glass-painting/800/600",
    tags: ["Painting", "Glass Art", "Handmade"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Handmade Art Commissions",
    description: "Custom broken mirror and glass paintings tailored to your space and aesthetic.",
    icon: "Palette"
  },
  {
    title: "AI & Data Support",
    description: "Assistance with basic data analysis, Python scripts, and AI concept implementation.",
    icon: "Brain"
  },
  {
    title: "Creative Digital Work",
    description: "Minimalist design work and creative assets for personal or professional branding.",
    icon: "Layout"
  }
];
