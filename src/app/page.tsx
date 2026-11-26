import Image from "next/image";
import Link from "next/link";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";
import { HotelOsSpotlight } from "@/components/HotelOsSpotlight";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AS-IT SINE | Websites, Mobile Apps, SaaS & Autonomous AI Agents",
  description:
    "AS-IT SINE engineers custom websites, mobile apps, scalable SaaS platforms, and autonomous AI agents. Discover our newly launched HotelOS onboarding platform.",
  path: "/",
  keywords: [
    "AS-IT SINE",
    "AI agent development",
    "SaaS development company",
    "mobile app agency",
    "website design and development",
    "HotelOS",
  ],
});

const SERVICES = [
  {
    id: "websites",
    tag: "01 / WEB PLATFORMS",
    title: "High-Velocity Websites",
    description:
      "SEO-first marketing sites, interactive brand flagships, and edge-rendered Next.js web applications built for sub-second loads and high conversion.",
    highlights: ["Next.js & React 19", "Technical SEO & Core Web Vitals", "Custom Motion & Design Systems"],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "mobile",
    tag: "02 / MOBILE APPS",
    title: "iOS & Android Apps",
    description:
      "Fluid native and cross-platform mobile experiences with offline resilience, real-time sync, biometric security, and App Store polish.",
    highlights: ["React Native & Flutter", "Native iOS / Android Bridges", "Real-Time Telemetry & Push"],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "saas",
    tag: "03 / SAAS ENGINEERING",
    title: "Multi-Tenant SaaS",
    description:
      "End-to-end cloud software platforms featuring role-based access, subscription billing, live analytics dashboards, and resilient APIs.",
    highlights: ["Multi-Tenant Architecture", "Stripe & Usage Billing", "SOC2-Ready Cloud Infra"],
    accent: "from-indigo-500 to-violet-600",
  },
  {
    id: "ai-agents",
    tag: "04 / AI AGENTS",
    title: "Autonomous AI Agents",
    description:
      "Production AI agents that reason, call tools, orchestrate workflows, query private knowledge bases, and automate complex operations 24/7.",
    highlights: ["Multi-Agent Orchestration", "RAG & Tool-Calling Pipelines", "Human-in-the-Loop Guardrails"],
    accent: "from-violet-500 to-fuchsia-600",
  },
];

export default function HomePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AS-IT SINE HotelOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/hotel/onboarding`,
    creator: {
      "@type": "Organization",
      name: "AS-IT SINE",
    },
    description:
      "Newly launched hotel & hospitality SaaS onboarding engine by AS-IT SINE for rapid property setup, amenity indexing, and multi-currency pricing.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <SineWaveBackdrop />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-white/80 dark:bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                <span>AS-IT SINE Software Studio • Now Shipping HotelOS</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-[3.75rem] lg:leading-[1.08]">
                Software Engineered in{" "}
                <span className="sine-gradient-text">Harmonic Precision.</span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                We partner with ambitious founders and enterprises to design and build
                high-converting <strong>Websites</strong>, fluid <strong>Mobile Apps</strong>,
                scalable <strong>SaaS Platforms</strong>, and autonomous{" "}
                <strong>AI Agents</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full sine-gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/30"
                >
                  Build With AS-IT SINE
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="#new-launch"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 backdrop-blur-md transition-all hover:border-cyan-500/60"
                >
                  Explore New Launch
                </Link>
              </div>

              {/* Capability Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="rounded-lg bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1.5">
                  Websites & Portals
                </span>
                <span className="rounded-lg bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1.5">
                  iOS & Android Apps
                </span>
                <span className="rounded-lg bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1.5">
                  Multi-Tenant SaaS
                </span>
                <span className="rounded-lg bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1.5">
                  Autonomous AI Agents
                </span>
              </div>
            </div>

            {/* Right Interactive-Style Brand & Signal Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-slate-200/90 dark:border-slate-700/70 bg-white/85 dark:bg-[#0b1124]/85 p-6 sm:p-8 shadow-2xl shadow-blue-950/10 dark:shadow-cyan-950/30 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-5">
                  <div className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200/80">
                    <Image
                      src="/logo.png"
                      alt="AS-IT SINE Official Brand Mark"
                      width={110}
                      height={70}
                      className="h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    ● Systems Operational
                  </span>
                </div>

                <div className="mt-6 space-y-3.5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Full-Spectrum Delivery Stack
                  </p>
                  {[
                    { label: "Web Architecture", sub: "Next.js • Edge SSR • Technical SEO", color: "bg-cyan-500" },
                    { label: "Mobile Products", sub: "iOS • Android • Cross-Platform", color: "bg-blue-500" },
                    { label: "Cloud SaaS", sub: "Multi-Tenancy • Billing • APIs", color: "bg-indigo-500" },
                    { label: "AI Agent Systems", sub: "LLM Orchestration • RAG • Automation", color: "bg-violet-500" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-slate-200/70 dark:border-slate-800/90 bg-slate-50/80 dark:bg-slate-900/60 px-4 py-3 transition-colors hover:border-cyan-500/40"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {item.sub}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                        Ready
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWLY LAUNCHED PRODUCT SPOTLIGHT */}
      <HotelOsSpotlight />

      {/* Core Services Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                What We Build
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Four Pillars of Modern Software Delivery
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              View all service capabilities →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    {service.tag}
                  </span>
                  <span
                    className={`h-2.5 w-10 rounded-full bg-gradient-to-r ${service.accent}`}
                  />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 group-hover:gap-2.5 transition-all"
                  >
                    Explore {service.title} <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl sine-gradient-bg px-8 py-14 text-center text-white shadow-2xl sm:px-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Launch Your Next Digital Product?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              Whether you need a conversion-focused website, a mobile app, a custom SaaS
              platform, or intelligent AI agents, AS-IT SINE turns vision into production code.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-transform hover:scale-[1.03]"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/teams"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Meet Our Engineering Teams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
