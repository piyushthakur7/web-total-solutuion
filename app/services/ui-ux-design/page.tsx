import Link from "next/link";

export const metadata = {
  title: "UI/UX Design | Web Total Solution",
  description: "Design that blends aesthetics, usability, and user psychology.",
};

export default function UiUxDesignPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl">
          We craft interfaces that feel effortless, look refined, and guide users
          toward action without confusion or cognitive overload. Every decision
          is backed by usability principles, behavioral psychology, and clear
          interaction patterns.
        </p>

        {/* Hero Feature Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Human-Centered</h3>
            <p className="text-gray-400 text-sm">Design decisions rooted in real user behavior, not guesswork.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Premium Visuals</h3>
            <p className="text-gray-400 text-sm">Clean, modern UI that builds trust and communicates brand identity.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Purposeful UX</h3>
            <p className="text-gray-400 text-sm">Flows built to reduce friction and increase conversions.</p>
          </div>
        </section>

        {/* What You Get */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">What You Get</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-16">
            <li>Wireframes, prototypes, and high-fidelity UI</li>
            <li>Design systems, typography, color tokens, and components</li>
            <li>User flow mapping and micro-interaction planning</li>
            <li>UX research, competitor analysis, and heuristics review</li>
            <li>Figma collaborative files and smooth developer handoff</li>
          </ul>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Our Design Process</h2>
          <div className="space-y-10">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">1. Research & Discovery</h3>
              <p className="text-gray-400">User interviews, analytics review, competitive audit, and clarity on goals.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">2. UX Architecture</h3>
              <p className="text-gray-400">User flows, IA planning, low-fidelity wireframes, and navigation logic.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">3. UI Design</h3>
              <p className="text-gray-400">High-fidelity visuals, components, branding, and polished interactions.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">4. Prototyping & Testing</h3>
              <p className="text-gray-400">Clickable prototypes tested with users for clarity, flow, and friction.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-1">5. Developer Handoff</h3>
              <p className="text-gray-400">Documentation, spacing tokens, components, and full Figma organization.</p>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">Tools & Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
            <div className="bg-gray-900 p-6 rounded-xl text-center">Figma</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Adobe XD</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">FigJam</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Miro</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Notion</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Illustrator</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Design Tokens</div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">Component Libraries</div>
          </div>
        </section>

        {/* Buttons */}
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