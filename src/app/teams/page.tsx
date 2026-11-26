import Link from "next/link";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";
import { createPageMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Teams — Engineering, AI & Design Pods at AS-IT SINE",
  description:
    "Meet the specialized engineering pods at AS-IT SINE across Web Platforms, Mobile Apps, Cloud SaaS, Autonomous AI Agents, and Product Design.",
  path: "/teams",
  keywords: ["AS-IT SINE team", "AI engineers", "SaaS architects", "mobile developers"],
});

const TEAM_PODS = [
  {
    initials: "AS",
    name: "Asit Singh",
    role: "Founder & Chief Systems Architect",
    pod: "Executive & Architecture",
    bio: "Leads product vision, multi-tenant SaaS architecture, and AI-native software strategy across AS-IT SINE client engagements and HotelOS.",
    skills: ["System Design", "Next.js", "SaaS Strategy", "AI Orchestration"],
  },
  {
    initials: "WP",
    name: "Web & SEO Velocity Pod",
    role: "Principal Frontend & Edge Engineers",
    pod: "Websites & Design Systems",
    bio: "Obsessed with Core Web Vitals, semantic HTML, structured SEO metadata, and fluid motion interfaces that convert.",
    skills: ["React 19", "Next.js", "Technical SEO", "Tailwind CSS"],
  },
  {
    initials: "MA",
    name: "Mobile Experience Pod",
    role: "Lead iOS, Android & Cross-Platform Devs",
    pod: "Mobile Engineering",
    bio: "Builds offline-capable, gesture-rich mobile applications engineered for App Store and Play Store reliability.",
    skills: ["React Native", "Flutter", "Native Bridges", "Biometric Auth"],
  },
  {
    initials: "CS",
    name: "Cloud & SaaS Platform Pod",
    role: "Staff Backend & DevOps Engineers",
    pod: "SaaS Infrastructure",
    bio: "Designs fault-tolerant APIs, multi-tenant PostgreSQL schemas, Stripe billing engines, and zero-downtime cloud deployments.",
    skills: ["PostgreSQL", "Node.js", "AWS / GCP", "Billing & RBAC"],
  },
  {
    initials: "AI",
    name: "Autonomous AI Agents Lab",
    role: "Applied AI & Agentic Workflow Engineers",
    pod: "AI Research & Automation",
    bio: "Creates tool-calling AI agents, RAG retrieval pipelines, and human-in-the-loop automation systems tailored to real business KPIs.",
    skills: ["Multi-Agent Systems", "RAG & Vectors", "Tool Calling", "Eval Guardrails"],
  },
  {
    initials: "UX",
    name: "Product & Brand Design Studio",
    role: "UI/UX Designers & Motion Specialists",
    pod: "Design & Prototyping",
    bio: "Crafts distinctive dark/light theme systems, interactive prototypes, and intuitive onboarding experiences like HotelOS.",
    skills: ["Design Systems", "Figma", "Interaction Design", "Accessibility"],
  },
];

export default function TeamsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
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
            People & Pods
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Specialized Pods.{" "}
            <span className="sine-gradient-text">Unified Execution.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            At AS-IT SINE, cross-functional engineering pods combine design, frontend,
            mobile, cloud SaaS, and AI agent expertise to ship faster without cutting corners.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_PODS.map((member) => (
              <article
                key={member.name}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sine-gradient-bg text-lg font-extrabold text-white shadow-md">
                      {member.initials}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        {member.pod}
                      </span>
                      <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                        {member.name}
                      </h2>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-slate-100 dark:border-slate-800">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 dark:bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Collaborate CTA */}
          <div className="mt-16 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-[#070b1a] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Want a Dedicated AS-IT SINE Pod on Your Roadmap?
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Tell us what you&apos;re building and we&apos;ll assemble the right engineering team.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full sine-gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-md"
            >
              Work With Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
