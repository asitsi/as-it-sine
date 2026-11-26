import Link from "next/link";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";
import { createPageMetadata, getBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services — Websites, Mobile Apps, SaaS & Autonomous AI Agents",
  description:
    "Explore AS-IT SINE software services: custom SEO websites, iOS & Android mobile apps, scalable multi-tenant SaaS platforms, and autonomous AI agents.",
  path: "/services",
  keywords: [
    "website development services",
    "mobile app development",
    "SaaS architecture",
    "AI agent development",
    "AS-IT SINE services",
  ],
});

const OFFERINGS = [
  {
    id: "websites",
    badge: "01 • Websites & Web Apps",
    title: "Conversion-Engineered Websites & Web Platforms",
    summary:
      "We build blazingly fast, accessible, and SEO-optimized websites using Next.js, React, and Tailwind CSS—designed to rank high and convert visitors into customers.",
    deliverables: [
      "Custom UI/UX Design Systems & Responsive Layouts",
      "Technical SEO (Structured Data, Sitemaps, OpenGraph, Core Web Vitals)",
      "Headless CMS & E-Commerce Integrations",
      "Interactive Dashboards & Customer Portals",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Edge CDN"],
  },
  {
    id: "mobile",
    badge: "02 • Mobile Applications",
    title: "Native-Grade iOS & Android Mobile Apps",
    summary:
      "From consumer apps to field-operations tools, we craft responsive mobile applications with smooth 60fps animations, offline caching, and secure authentication.",
    deliverables: [
      "Cross-Platform React Native & Flutter Apps",
      "Push Notifications, Deep Linking & Biometric Auth",
      "Real-Time Maps, Chat & Payment Gateways",
      "App Store & Google Play Deployment Pipelines",
    ],
    stack: ["React Native", "Flutter", "Swift / Kotlin", "Expo", "Firebase / Supabase"],
  },
  {
    id: "saas",
    badge: "03 • SaaS Engineering",
    title: "Scalable Multi-Tenant SaaS Platforms",
    summary:
      "Launch and scale subscription software with rock-solid tenant isolation, automated billing, role-based permissions, and clean observability.",
    deliverables: [
      "Multi-Tenant Database & Auth Architecture",
      "Stripe Subscriptions, Usage Metering & Invoicing",
      "Admin Consoles, Audit Logs & Analytics Views",
      "CI/CD Automation & Cloud Infrastructure",
    ],
    stack: ["PostgreSQL", "Node.js / Python", "Docker", "AWS / GCP", "Stripe"],
  },
  {
    id: "ai-agents",
    badge: "04 • Autonomous AI Agents",
    title: "Intelligent AI Agents & Workflow Automation",
    summary:
      "Deploy domain-specific AI agents that integrate directly into your CRM, support desk, or internal databases—handling research, triage, and multi-step execution.",
    deliverables: [
      "Custom Tool-Calling & Multi-Agent Orchestration",
      "Private Knowledge Bases (RAG & Vector Search)",
      "AI Customer Support, Booking & Lead Qualification Agents",
      "Evaluation Harnesses, Guardrails & Cost Controls",
    ],
    stack: ["LLM APIs", "RAG Pipelines", "Vector DBs", "Python / TypeScript", "Webhooks"],
  },
];

export default function ServicesPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development & AI Agent Engineering",
    provider: {
      "@type": "Organization",
      name: "AS-IT SINE",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AS-IT SINE Offerings",
      itemListElement: OFFERINGS.map((o) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: o.title,
          description: o.summary,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 py-20 sm:py-28">
        <SineWaveBackdrop />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-white/80 dark:bg-slate-900/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md">
            Our Capabilities
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Full-Spectrum Software,{" "}
            <span className="sine-gradient-text">Built to Perform.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Whether you are launching an MVP or modernizing enterprise workflows with AI
            agents, AS-IT SINE delivers end-to-end engineering across Web, Mobile, SaaS,
            and AI.
          </p>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {OFFERINGS.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-8 sm:p-10 shadow-sm"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-300">
                    {item.badge}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-1 text-xs font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-[#070b1a] p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                    Key Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {item.deliverables.map((deliv) => (
                      <li
                        key={deliv}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full sine-gradient-bg text-[10px] font-bold text-white">
                          ✓
                        </span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Flagship Product Highlight Strip */}
      <section className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/70 dark:bg-[#070b1a] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-cyan-500/30 bg-white dark:bg-[#0b1124] p-8 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Newly Launched SaaS Product
              </span>
              <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                See Our Engineering in Action with AS-IT SINE HotelOS
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Experience our live 5-step hotel onboarding platform built on this exact stack.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/hotel/onboarding"
                className="rounded-full sine-gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-md"
              >
                Open HotelOS →
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
