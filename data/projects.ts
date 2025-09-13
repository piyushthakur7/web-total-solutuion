export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and payment integration.",
    category: "Web Development",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    year: "2024"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management App",
    description: "Comprehensive healthcare management system for clinics and patients.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    year: "2024"
  },
  {
    id: "finance-dashboard",
    title: "Financial Dashboard",
    description: "Real-time financial analytics dashboard with interactive charts and data visualization.",
    category: "UI/UX Design",
    technologies: ["React", "D3.js", "Firebase", "Material-UI"],
    year: "2023"
  },
  {
    id: "travel-booking",
    title: "Travel Booking Platform",
    description: "Complete travel booking experience with flight, hotel, and activity reservations.",
    category: "Web Development",
    technologies: ["Vue.js", "Express.js", "MySQL", "Payment APIs"],
    year: "2023"
  }
];