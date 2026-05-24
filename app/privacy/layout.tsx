import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Data Protection',
  description: 'Web Total Solution privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or use our services.',
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
