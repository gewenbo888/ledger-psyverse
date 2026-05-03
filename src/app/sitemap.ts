import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ledger.psyverse.fun";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/timeline`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/decisions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/meaning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/collective`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
