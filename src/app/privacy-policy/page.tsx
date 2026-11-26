import Link from "next/link";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";
import { CONTACT_EMAIL, createPageMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy — AS-IT SINE Data Protection & Security",
  description:
    "Read the AS-IT SINE Privacy Policy covering our websites, mobile apps, SaaS platforms, autonomous AI agents, and HotelOS onboarding services.",
  path: "/privacy-policy",
  keywords: ["AS-IT SINE privacy policy", "data protection", "AI data privacy", "SaaS security"],
});

const SECTIONS = [
  {
    id: "collection",
    title: "1. Information We Collect",
    body: "When you interact with AS-IT SINE websites, mobile apps, SaaS tools, or our HotelOS onboarding workflow, we may collect contact details (name, email, phone, company name), property or project onboarding inputs you explicitly submit, and essential technical diagnostics (browser type, theme preference, and anonymized usage telemetry).",
  },
  {
    id: "usage",
    title: "2. How We Use Information",
    body: "We use your information strictly to deliver requested software services, respond to project inquiries, configure and operate SaaS workspaces such as HotelOS, improve product reliability and security, and communicate important service updates.",
  },
  {
    id: "ai-agents",
    title: "3. AI Agents & Client Data Isolation",
    body: "For custom AI agent deployments and SaaS platforms built by AS-IT SINE, client knowledge bases, prompts, and operational data remain isolated within dedicated tenant boundaries. We never sell client data or train public third-party models on confidential client payloads without explicit written authorization.",
  },
  {
    id: "cookies",
    title: "4. Local Storage & Cookies",
    body: "Our site uses minimal browser storage—such as saving your Dark or Light theme preference locally—and essential session mechanisms required for core functionality. We do not deploy invasive third-party advertising trackers.",
  },
  {
    id: "security",
    title: "5. Data Security & Retention",
    body: "We enforce industry-standard encryption in transit (TLS), access control policies, and secure cloud infrastructure practices. Data is retained only for as long as necessary to fulfill contractual, operational, or legal obligations.",
  },
  {
    id: "rights",
    title: "6. Your Rights & Contact",
    body: `You may request access to, correction of, or deletion of your personal data at any time by emailing our privacy team at ${CONTACT_EMAIL}.`,
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 py-16 sm:py-24">
        <SineWaveBackdrop />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-white/80 dark:bg-slate-900/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md">
            Legal & Compliance
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            Effective Date: November 27, 2026 • AS-IT SINE Software Technologies
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0b1124] p-8 sm:p-12 shadow-sm space-y-10">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              At <strong>AS-IT SINE</strong>, protecting your privacy and securing your
              software ecosystems is foundational to everything we engineer. This Privacy
              Policy explains how we handle information across our corporate website,
              mobile applications, SaaS platforms, AI agent solutions, and HotelOS
              onboarding portal.
            </p>

            {SECTIONS.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="scroll-mt-24 border-t border-slate-100 dark:border-slate-800/90 pt-8"
              >
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                  {sec.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {sec.body}
                </p>
              </article>
            ))}

            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Questions about compliance or enterprise DPA agreements?
              </p>
              <Link
                href="/contact"
                className="rounded-full sine-gradient-bg px-6 py-2.5 text-xs font-semibold text-white shadow-sm"
              >
                Contact Privacy Team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
