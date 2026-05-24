import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Our Story, Team & Values',
  description: 'Learn about Web Total Solution — a team of designers, developers, and strategists building digital products that drive growth. 320+ projects delivered with 18+ years combined experience.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
