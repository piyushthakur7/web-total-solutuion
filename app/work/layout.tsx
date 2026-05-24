import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Portfolio & Case Studies',
  description: 'Explore our portfolio of 320+ projects including web apps, e-commerce platforms, and digital experiences built for clients like Banerjee Academy, Amiora Diamonds, and more.',
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
