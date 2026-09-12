/**
 * app/sitemap.ts
 * Sitemap généré depuis lib/services : impossible de le désynchroniser
 * des pages réellement publiées.
 */
import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/services";
import { SITE_URL } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
