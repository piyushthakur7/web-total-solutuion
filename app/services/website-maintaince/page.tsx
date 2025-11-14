import Link from "next/link";

export const metadata = {
  title: "SEO Optimization | Web Total Solution",
  description: "Rank higher, increase traffic, and turn visitors into revenue.",
};

export default function SeoOptimizationPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">SEO Optimization</h1>
        <p className="text-lg text-gray-300 mb-10">
          We build search-first strategies that bring consistent organic traffic
          and long-term ranking instead of temporary hacks.
        </p>

        <h2 className="text-2xl font-semibold mb-3">What You Get</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
          <li>Technical + on-page SEO audit</li>
          <li>Keyword + content strategy</li>
          <li>Speed, Core Web Vitals & performance fixes</li>
          <li>Monthly reporting and tracking</li>
        </ul>

        <Buttons />
      </div>
    </main>
  );
}

function Buttons() {
  return (
    <div className="flex gap-4">
      <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold">
        Start a Project
      </Link>
      <Link href="/services" className="text-gray-300 underline underline-offset-4">
        Back to all services
      </Link>
    </div>
  );
}
