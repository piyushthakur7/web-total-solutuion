export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: "💻",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Strategic SEO services to improve your website's visibility and ranking.",
    icon: "📈",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Performance Optimization"]
  },
  {
    id: "branding",
    title: "Branding",
    description: "Complete brand identity design that tells your story and connects with customers.",
    icon: "✨",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
  }
];