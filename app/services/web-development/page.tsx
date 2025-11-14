import Link from "next/link";

export const metadata = {
  title: "Web Development | Web Total Solution",
  description: "Modern, scalable, conversion-focused web development services.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Web Development</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">
          We build high-performance websites and web apps using modern frameworks,
          designed to convert traffic into real business results. Everything we deliver
          is crafted for speed, SEO, usability, and long-term maintainability.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-3xl font-semibold mb-4">What You Get</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
              <li>Next.js and React-based builds</li>
              <li>Fully responsive, mobile-first layouts</li>
              <li>SEO-ready and performance optimized</li>
              <li>Clean, scalable, and maintainable code</li>
              <li>Lightning-fast page loads and smooth UX</li>
              <li>Integration with APIs, CMS, and databases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Process</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white">1. Strategy & Planning</h3>
                <p className="text-gray-400">Understanding your goals, target audience, and competition to shape the right approach.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">2. UI/UX & Architecture</h3>
                <p className="text-gray-400">Crafting intuitive layouts, user journeys, and a solid technical foundation.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">3. Development</h3>
                <p className="text-gray-400">Building with modern frameworks, clean code, and best practices across the board.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">4. Optimization & Launch</h3>
                <p className="text-gray-400">Performance tuning, SEO improvements, testing, deployment, and handoff.</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
            <div className="bg-gray-900 p-6 rounded-xl text-center">Next.js</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">React</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Tailwind CSS</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Node.js</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">TypeScript</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Vercel</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">REST & GraphQL APIs</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Headless CMS</div>
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