import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Project',
  description: 'Get in touch with Web Total Solution. Request a free consultation for your web development, UI/UX design, or digital marketing project. Based in Kolkata, serving clients worldwide.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
