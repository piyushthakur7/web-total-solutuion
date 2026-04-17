'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Link from 'next/link';
import { FaShieldAlt, FaFileContract, FaMoneyBillWave, FaHandshake, FaBalanceScale, FaGavel, FaExclamationTriangle, FaGlobe } from 'react-icons/fa';

const sectionIconMap: Record<string, React.ElementType> = {
  introduction: FaFileContract,
  services: FaHandshake,
  payment: FaMoneyBillWave,
  client: FaBalanceScale,
  ip: FaShieldAlt,
  termination: FaExclamationTriangle,
  liability: FaGavel,
  governing: FaGlobe,
};

interface PolicySection {
  id: string;
  iconKey: string;
  title: string;
  content: React.ReactNode;
}

const policySections: PolicySection[] = [
  {
    id: 'introduction',
    iconKey: 'introduction',
    title: '1. Introduction',
    content: (
      <>
        <p>
          Welcome to <strong>Web Total Solution</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of our website located at{' '}
          <a href="https://webtotalsolution.com" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
            webtotalsolution.com
          </a>{' '}
          and all services provided by Web Total Solution, including but not limited to web development, UI/UX design, digital marketing, e-commerce solutions, and website maintenance.
        </p>
        <p>
          By engaging our services or accessing our website, you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and Web Total Solution. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    iconKey: 'services',
    title: '2. Services & Project Scope',
    content: (
      <>
        <p>
          Web Total Solution provides professional digital services including, but not limited to:
        </p>
        <ul>
          <li>Custom website design and development (Next.js, React, MERN Stack, WordPress)</li>
          <li>UI/UX design and prototyping</li>
          <li>Digital marketing and SEO services</li>
          <li>E-commerce platform development and integration</li>
          <li>Website maintenance, support, and hosting services</li>
        </ul>
        <p>
          <strong>2.1 Scope of Work:</strong> The specific scope, deliverables, timeline, and pricing for each project shall be defined in a separate written proposal or agreement (&ldquo;Project Proposal&rdquo;) mutually agreed upon by both parties prior to the commencement of work. Any work outside the originally agreed scope shall be subject to additional charges and a revised timeline.
        </p>
        <p>
          <strong>2.2 Revisions:</strong> Unless otherwise specified in the Project Proposal, each project includes a reasonable number of revision rounds as outlined therein. Additional revision requests beyond the agreed scope will be billed at our standard hourly rate or as mutually agreed upon.
        </p>
        <p>
          <strong>2.3 Third-Party Services:</strong> Where our services involve integration with third-party platforms, APIs, or services (e.g., payment gateways, hosting providers, analytics tools), we shall not be held responsible for the availability, performance, or terms of those third-party services.
        </p>
      </>
    ),
  },
  {
    id: 'payment',
    iconKey: 'payment',
    title: '3. Payment Terms & Refund Policy',
    content: (
      <>
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <FaExclamationTriangle className="text-red-400 text-xl flex-shrink-0" />
            <h4 className="text-lg font-bold text-red-400">IMPORTANT: Non-Refundable Advance Payment</h4>
          </div>
          <p className="text-gray-200 leading-relaxed">
            All advance payments, deposits, and upfront fees collected by Web Total Solution are <strong className="text-white">strictly non-refundable</strong> under any circumstances, including but not limited to project cancellation, change of mind, scope reduction, or any other reason whatsoever. By making an advance payment, you expressly acknowledge and agree that such payment is non-refundable and represents compensation for the allocation of resources, scheduling, and preliminary work undertaken by the Company.
          </p>
        </div>

        <p>
          <strong>3.1 Payment Structure:</strong> Our standard payment structure is as follows, unless otherwise agreed upon in a Project Proposal:
        </p>
        <ul>
          <li><strong>Advance Payment (Non-Refundable):</strong> A minimum of 50% of the total project cost is required as an advance payment before work commences. This advance is non-refundable regardless of the project outcome or cancellation.</li>
          <li><strong>Milestone Payments:</strong> For larger projects, payments may be structured around agreed milestones. Each milestone payment is due upon completion and presentation of the corresponding deliverable.</li>
          <li><strong>Final Payment:</strong> The remaining balance is due upon project completion and before the final handover of deliverables, source files, and deployment credentials.</li>
        </ul>

        <p>
          <strong>3.2 Late Payments:</strong> Invoices are payable within 7 (seven) business days of issuance unless otherwise stated. Late payments may attract a penalty of 2% per month on the outstanding amount. We reserve the right to suspend all work on the project until all outstanding payments are cleared.
        </p>

        <p>
          <strong>3.3 Refund Policy:</strong>
        </p>
        <ul>
          <li><strong>Advance payments are strictly non-refundable.</strong> Once an advance payment has been made and acknowledged, it shall not be returned to the Client under any circumstances.</li>
          <li>Milestone payments for work already completed and delivered are non-refundable.</li>
          <li>If the Company is unable to deliver the agreed services due to reasons solely attributable to the Company, a partial credit (excluding the advance payment) may be offered at the Company&rsquo;s sole discretion for incomplete milestones only.</li>
          <li>No refunds will be issued for delays caused by the Client&rsquo;s failure to provide required content, feedback, access, or approvals in a timely manner.</li>
        </ul>

        <p>
          <strong>3.4 Taxes:</strong> All prices quoted are exclusive of applicable taxes (GST, service tax, etc.) unless explicitly stated otherwise. The Client shall be responsible for any applicable taxes in addition to the agreed project fees.
        </p>

        <p>
          <strong>3.5 Payment Methods:</strong> Payments can be made via bank transfer (NEFT/IMPS/UPI), online payment gateways, or any other method mutually agreed upon. All payments must be made in Indian Rupees (INR) unless otherwise specified.
        </p>
      </>
    ),
  },
  {
    id: 'client',
    iconKey: 'client',
    title: '4. Client Responsibilities & Obligations',
    content: (
      <>
        <p>The Client agrees to the following obligations to ensure the timely and successful delivery of the project:</p>
        <ul>
          <li><strong>Content & Materials:</strong> The Client shall provide all necessary content, images, branding assets, login credentials, and other materials required for the project in a timely manner as requested by the Company.</li>
          <li><strong>Timely Feedback:</strong> The Client shall provide feedback, approvals, and responses to queries within 5 (five) business days of each request. Failure to do so may result in project delays, and the Company shall not be held responsible for such delays.</li>
          <li><strong>Accuracy of Information:</strong> The Client warrants that all information, content, and materials provided to the Company are accurate, lawful, and do not infringe upon any third-party rights, including intellectual property rights.</li>
          <li><strong>Legal Compliance:</strong> The Client is solely responsible for ensuring that the content and purpose of their website or digital product comply with all applicable laws, regulations, and industry standards.</li>
          <li><strong>Domain & Hosting:</strong> Unless included in the Project Proposal, the Client shall be responsible for procuring and maintaining their own domain name and hosting services. The Company may recommend hosting providers but shall not be liable for third-party hosting performance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    iconKey: 'ip',
    title: '5. Intellectual Property Rights',
    content: (
      <>
        <p>
          <strong>5.1 Ownership Transfer:</strong> Upon receipt of full and final payment for the project, the Client shall receive ownership of the custom-developed deliverables as specified in the Project Proposal. This includes custom code, design files, and content created specifically for the Client&rsquo;s project.
        </p>
        <p>
          <strong>5.2 Company Retained Rights:</strong> The Company retains the right to use general frameworks, libraries, tools, methodologies, and reusable components developed during the project for future projects. The Company also reserves the right to showcase the completed project in its portfolio, case studies, and marketing materials unless the Client requests otherwise in writing.
        </p>
        <p>
          <strong>5.3 Pre-Existing IP:</strong> Any pre-existing intellectual property, proprietary tools, templates, or code libraries used in the project remain the sole property of the Company or their respective owners. The Client is granted a non-exclusive, non-transferable license to use such components as part of the delivered project.
        </p>
        <p>
          <strong>5.4 Third-Party Assets:</strong> The Company may use third-party assets (stock images, fonts, plugins, libraries) in the project. The Client shall be responsible for maintaining valid licenses for any premium third-party assets used, where applicable.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    iconKey: 'termination',
    title: '6. Termination & Cancellation',
    content: (
      <>
        <p>
          <strong>6.1 Termination by Client:</strong> The Client may terminate the project at any time by providing written notice. However, the following conditions apply:
        </p>
        <ul>
          <li>The advance payment is <strong>non-refundable</strong> and will not be returned.</li>
          <li>The Client shall pay for all work completed up to the date of termination, including any milestone deliverables already presented.</li>
          <li>Any unreleased work product shall remain the property of the Company until all outstanding payments are settled.</li>
        </ul>
        <p>
          <strong>6.2 Termination by Company:</strong> The Company reserves the right to terminate the project if:
        </p>
        <ul>
          <li>The Client fails to make payments as per the agreed schedule.</li>
          <li>The Client becomes unresponsive for more than 30 (thirty) consecutive days without prior notice.</li>
          <li>The Client requests work that is illegal, unethical, or violates the Company&rsquo;s policies.</li>
          <li>The Client engages in abusive, threatening, or unprofessional conduct towards Company staff.</li>
        </ul>
        <p>
          <strong>6.3 Dormant Projects:</strong> Projects with no client communication or activity for a period exceeding 60 (sixty) days shall be considered dormant. Reactivation of dormant projects may be subject to revised timelines, pricing, and availability.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    iconKey: 'liability',
    title: '7. Limitation of Liability',
    content: (
      <>
        <p>
          <strong>7.1 Service Disclaimer:</strong> Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we strive for excellence and high-quality deliverables, we do not warrant that our services will be uninterrupted, error-free, or completely secure.
        </p>
        <p>
          <strong>7.2 Limitation:</strong> To the maximum extent permitted by applicable law, Web Total Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising out of or in connection with the use of our services.
        </p>
        <p>
          <strong>7.3 Maximum Liability:</strong> In no event shall the Company&rsquo;s total aggregate liability exceed the total amount paid by the Client for the specific project giving rise to the claim.
        </p>
        <p>
          <strong>7.4 Force Majeure:</strong> The Company shall not be held liable for any delays or failures in performance resulting from circumstances beyond its reasonable control, including but not limited to natural disasters, pandemics, government actions, internet outages, cyberattacks, or other force majeure events.
        </p>
        <p>
          <strong>7.5 Post-Delivery:</strong> Once the project has been delivered and the Client has taken control of the website or digital product, the Company shall not be responsible for any issues arising from modifications made by the Client or third parties, security breaches due to the Client&rsquo;s negligence, or issues caused by the Client&rsquo;s hosting environment.
        </p>
      </>
    ),
  },
  {
    id: 'governing',
    iconKey: 'governing',
    title: '8. Governing Law & Dispute Resolution',
    content: (
      <>
        <p>
          <strong>8.1 Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal, India.
        </p>
        <p>
          <strong>8.2 Dispute Resolution:</strong> In the event of any dispute, the parties shall first attempt to resolve the matter amicably through good-faith negotiation. If the dispute cannot be resolved within 30 (thirty) days of the initial notice, either party may pursue legal remedies available under applicable law.
        </p>
        <p>
          <strong>8.3 Severability:</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
        </p>
        <p>
          <strong>8.4 Entire Agreement:</strong> These Terms, together with any Project Proposal and any other written agreements between the parties, constitute the entire agreement and supersede all prior negotiations, representations, and agreements between the parties relating to the subject matter herein.
        </p>
      </>
    ),
  },
];

const tableOfContents = policySections.map((s) => ({
  id: s.id,
  title: s.title,
}));

export default function TermsPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
          {/* Hero Section */}
          <section className="relative py-28 md:py-36 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaShieldAlt />
                  LEGAL &amp; POLICIES
                </motion.span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Terms &amp;{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Conditions
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                  Please review our terms of service, payment policies, and legal guidelines carefully before engaging with Web Total Solution.
                </p>

                <p className="text-sm text-gray-500">
                  Last updated: April 17, 2026 &bull; Effective immediately
                </p>
              </motion.div>
            </div>
          </section>

          {/* Table of Contents + Content */}
          <section className="pb-24 relative">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-[280px_1fr] gap-12 max-w-7xl mx-auto">
                {/* Sidebar: Table of Contents */}
                <motion.aside
                  className="hidden lg:block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="sticky top-28">
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        Table of Contents
                      </h3>
                      <nav className="space-y-1">
                        {tableOfContents.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                          >
                            {item.title}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </motion.aside>

                {/* Main Content */}
                <motion.div
                  className="max-w-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Non-refundable banner */}
                  <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-orange-900/30 border border-red-500/40 rounded-2xl p-8 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <FaExclamationTriangle className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-red-400 mb-2">
                          Advance Payment Policy — Non-Refundable
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          All advance payments, deposits, and upfront fees paid to Web Total Solution are <strong className="text-white">strictly non-refundable</strong> under any and all circumstances. This includes, but is not limited to, project cancellation, change of requirements, scope reduction, or change of mind. By proceeding with payment, you agree to this policy in its entirety.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sections */}
                  <div className="space-y-12">
                    {policySections.map((section, index) => {
                      const Icon = sectionIconMap[section.iconKey] || FaFileContract;
                      return (
                        <motion.div
                          key={section.id}
                          id={section.id}
                          className="scroll-mt-28"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-100px' }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 hover:border-gray-700 rounded-2xl p-8 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 rounded-xl flex items-center justify-center">
                                <Icon className="text-blue-400 text-xl" />
                              </div>
                              <h2 className="text-2xl md:text-3xl font-bold text-white">
                                {section.title}
                              </h2>
                            </div>
                            <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed space-y-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:text-gray-300 [&_a]:text-blue-400 [&_a:hover]:text-blue-300 [&_strong]:text-white">
                              {section.content}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Contact Section */}
                  <motion.div
                    className="mt-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Questions About Our Policies?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      If you have any questions, concerns, or require clarification regarding our terms and conditions, please don&rsquo;t hesitate to reach out to us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/30 rounded-full font-semibold text-white transition-all duration-300"
                      >
                        <FaHandshake />
                        Contact Us
                      </Link>
                      <a
                        href="mailto:info@webtotalsolution.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-700 hover:border-blue-500 rounded-full text-gray-300 hover:text-white font-semibold transition-all duration-300"
                      >
                        info@webtotalsolution.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Footer note */}
                  <div className="mt-12 text-center text-sm text-gray-600">
                    <p>
                      © {new Date().getFullYear()} Web Total Solution. All rights reserved. These terms are effective as of the date last updated above and apply to all engagements with the Company.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
