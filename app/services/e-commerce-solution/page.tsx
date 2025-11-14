import Link from "next/link";

export const metadata = {
  title: "E-Commerce Solution | Web Total Solution",
  description: "Custom online stores built for sales and scalability.",
};

export default function EcommerceSolutionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">E-Commerce Solution</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">
          We develop powerful, secure, user-friendly e-commerce platforms designed
          to increase conversions and keep customers coming back. Your store gets
          speed, reliability, and a frictionless shopping experience.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-3xl font-semibold mb-4">What You Get</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
              <li>Custom store design & development</li>
              <li>Checkout optimization & analytics</li>
              <li>Payment gateways & integrations</li>
              <li>Shopify, WooCommerce, or custom Next.js</li>
              <li>Inventory, shipping, and automation setup</li>
              <li>High-performance product listings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">How We Build Your Store</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white">1. Store Strategy</h3>
                <p className="text-gray-400">Market analysis, product positioning, and conversion mapping.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">2. UX & Storefront Design</h3>
                <p className="text-gray-400">Clean layouts that make browsing smooth and buying effortless.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">3. Development & Integrations</h3>
                <p className="text-gray-400">Secure checkouts, API connections, inventory systems, and dashboards.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">4. Optimization & Launch</h3>
                <p className="text-gray-400">Testing, SEO tuning, speed improvements, and final deployment.</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">Platform Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
            <div className="bg-gray-900 p-6 rounded-xl text-center">Shopify</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">WooCommerce</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Next.js Custom Stores</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Headless Commerce</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Stripe Payments</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">PayPal</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">API Integrations</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">CMS & Automation</div>
          </div>
        </section>

        <div className="mt-20 flex gap-4">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold">
            Start a Project
          </Link>
          <Link href="/services" className="text-gray-300 underline underline-offset-4">
            Back to all services
          </Link>
        </div>
      </section>
    </main>
  );
}