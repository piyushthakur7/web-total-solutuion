import Link from "next/link";

export const metadata = {
  title: "Digital Marketing | Web Total Solution",
  description: "Campaigns built to drive traffic, leads, and sales.",
};

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20">
      <section className="max-w-6xl mx-auto space-y-20">
        {/* Hero */}
        <header className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Digital Marketing</h1>
          <p className="text-lg text-gray-300">
            We build data-backed strategies that actually convert. No vague
            promises or buzzwords. Just measurable campaigns that grow traffic,
            leads, and revenue.
          </p>
        </header>

        {/* Highlights */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Performance First</h3>
            <p className="text-gray-400 text-sm">Every campaign is engineered to hit KPIs, not vanity numbers.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Platform Expertise</h3>
            <p className="text-gray-400 text-sm">Paid ads, organic growth, and remarketing handled end to end.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Analytics-Driven</h3>
            <p className="text-gray-400 text-sm">We track everything and optimize relentlessly for better ROI.</p>
          </div>
        </section>

        {/* What You Get */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">What You Get</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-16 max-w-3xl">
            <li>Social media & content strategy across all major platforms</li>
            <li>High-performance paid ad campaigns (Meta, TikTok, Google)</li>
            <li>Email automation, customer funnels, and retargeting</li>
            <li>Analytics dashboards, tracking setup, and CRO insights</li>
            <li>Full campaign management and monthly reporting</li>
          </ul>
        </section>

        {/* Process */}
        <section className="space-y-10">
          <h2 className="text-3xl font-semibold mb-6">How We Run Campaigns</h2>

          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">1. Research & Targeting</h3>
              <p className="text-gray-400">Audience segmentation, competitive analysis, and campaign mapping.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">2. Content & Creative</h3>
              <p className="text-gray-400">Ad creatives, copywriting, landing pages, and funnel design.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">3. Launch & Optimization</h3>
              <p className="text-gray-400">A/B testing, budget allocation, and conversion tuning.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">4. Reporting & Scaling</h3>
              <p className="text-gray-400">Clear reporting plus strategic scaling for long-term growth.</p>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">Platforms & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
            <div className="bg-gray-900 p-6 rounded-xl text-center">Meta Ads</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Google Ads</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">TikTok Ads</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">LinkedIn Ads</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Mailchimp</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Klaviyo</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">GA4</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Tag Manager</div>
          </div>
        </section>

        {/* Buttons */}
        <div className="mt-20 flex gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold"
          >
            Start a Project
          </Link>
          <Link
            href="/services"
            className="text-gray-300 underline underline-offset-4"
          >
            Back to all services
          </Link>
        </div>
      </section>
    </main>
  );
}

