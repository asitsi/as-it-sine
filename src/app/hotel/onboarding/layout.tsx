import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "HotelOS Onboarding — Newly Launched Hospitality SaaS by AS-IT SINE",
  description:
    "Onboard your hotel property in 5 guided steps with AS-IT SINE HotelOS. Configure details, location, amenities, multi-currency pricing, and media.",
  path: "/hotel/onboarding",
  keywords: ["HotelOS", "hotel onboarding", "hospitality SaaS", "AS-IT SINE product"],
});

export default function HotelOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
