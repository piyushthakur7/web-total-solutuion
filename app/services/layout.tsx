import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Web Development, Design & Marketing',
  description: 'Explore our full range of services: custom web development, UI/UX design, digital marketing, e-commerce solutions, and website maintenance. Built to scale your business.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
