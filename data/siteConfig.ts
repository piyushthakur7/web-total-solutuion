export const siteConfig = {
  name: "Web Total Solution",
  description: "Professional web development agency specializing in modern digital solutions",
  url: "https://webtotalsolution.com",
  ogImage: "/og-image.png",
  contact: {
    email: "info@webtotalsolution.com",
    phone: "+91 6291 519 364",
    whatsapp: "+916291519364",
    address: "Kolkata, India",
  },
  socials: {
    twitter: "https://x.com/webtotal1234",
    facebook: "https://www.facebook.com/profile.php?id=61581002265105",
    instagram: "https://www.instagram.com/webtotalsolution/",
    linkedin: "https://www.linkedin.com/company/web-total-solution",
  },
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
      label: 'Services',
      dropdown: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "E-Commerce Solutions", href: "/services/e-commerce-solution" },
        { label: "Website Maintenance", href: "/services/website-maintenance" },
      ],
    },
    { href: '/work', label: 'Our Work' },
    { href: '/contact', label: 'Contact Us' },
  ],
};
