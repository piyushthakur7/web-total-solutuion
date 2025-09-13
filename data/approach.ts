export interface ApproachStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const approachSteps: ApproachStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    icon: "🔍"
  },
  {
    id: "design",
    step: 2,
    title: "Design & Prototyping", 
    description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your project before development.",
    icon: "🎯"
  },
  {
    id: "development",
    step: 3,
    title: "Development & Testing",
    description: "We build your project using modern technologies and best practices, with rigorous testing throughout the process.",
    icon: "⚡"
  },
  {
    id: "launch",
    step: 4,
    title: "Launch & Support",
    description: "After thorough testing, we launch your project and provide ongoing support and maintenance to ensure optimal performance.",
    icon: "🚀"
  }
];