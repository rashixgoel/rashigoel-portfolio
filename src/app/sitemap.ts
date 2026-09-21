import type { MetadataRoute } from "next";

const BASE = "https://rashigoel.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/work/clinicflow`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/work/faxbridge`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/work/caresignal`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
