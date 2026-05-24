import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Legal & Policies',
  description: 'Read the terms of service, payment policies, and legal guidelines for Web Total Solution. Includes our non-refundable advance payment policy and project scope agreements.',
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
