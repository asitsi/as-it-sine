import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/teams", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/hotel-os", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/hotel/onboarding", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: "2026-11-27",
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
