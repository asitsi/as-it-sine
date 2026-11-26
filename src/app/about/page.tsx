import Link from "next/link";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";
import { createPageMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About AS-IT SINE — Our Story, Mission & Engineering Philosophy",
  description:
    "Learn how AS-IT SINE combines harmonic design with deep engineering to build websites, mobile apps, SaaS products, and autonomous AI agents.",
  path: "/about",
  keywords: ["About AS-IT SINE", "software studio", "AI engineering company", "SaaS builders"],
});

const VALUES = [
  {
    number: "01",
    title: "Signal Over Noise",
    description:
      "Inspired by the mathematical clarity of a sine wave, we strip away bloat and ship software where every interaction, API route, and pixel has purpose.",
  },
  {
    number: "02",
    title: "Production-First AI",
    description:
      "We treat AI agents as deterministic-first engineering systems—equipped with strict guardrails, observable tool calls, and measurable ROI.",
  },
  {
    number: "03",
    title: "Full-Stack Ownership",
    description:
      "From brand identity and Core Web Vitals SEO to mobile binaries and multi-tenant cloud databases, one cohesive squad owns the outcome.",
  },
  {
    number: "04",
    title: "Continuous Momentum",
    description:
      "Our iterative delivery cadence ships testable milestones every week so founders and stakeholders stay ahead of the market.",
  },
];

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 py-20 sm:py-28">
        <SineWaveBackdrop />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-white/80 dark:bg-slate-900/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md">
            About AS-IT SINE
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Where Clean Engineering Meets{" "}
            <span className="sine-gradient-text">Autonomous Intelligence.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            AS-IT SINE is a modern software technology company dedicated to building
            resilient digital products—from lightning-fast websites and mobile apps to
            enterprise SaaS ecosystems and autonomous AI agents.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
                Why &ldquo;AS-IT SINE&rdquo;?
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                A sine wave is nature&apos;s purest representation of smooth oscillation,
                energy transfer, and predictable rhythm. We founded AS-IT SINE with that
                exact philosophy: software shouldn&apos;t feel fragile or fragmented—it
                should flow effortlessly across web, mobile, cloud, and AI layers.
              </p>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Alongside client product engineering, our internal R&amp;D lab builds
                focused SaaS products—most recently launching{" "}
                <strong className="text-slate-900 dark:text-white">
                  AS-IT SINE HotelOS
                </strong>
                , our streamlined hospitality onboarding platform.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  Our Mission
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  Empower Builders & Businesses
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Deliver production-grade websites, apps, SaaS platforms, and AI agents
                  that multiply human leverage.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  Our Vision
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  Software That Thinks & Scales
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Bridge classic software reliability with next-generation agentic
                  automation across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-[#070b1a] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Engineering Ethos
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              Principles Behind Every Release
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((val) => (
              <div
                key={val.number}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-8"
              >
                <span className="inline-block font-mono text-sm font-bold sine-gradient-text">
                  {val.number}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full sine-gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-md"
            >
              Explore Our Services →
            </Link>
            <Link
              href="/hotel/onboarding"
              className="rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              Try Newly Launched HotelOS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
