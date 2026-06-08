import type { MetadataRoute } from "next";
import { getBlogPosts, getInterviews, getRichText } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const BASE = "https://rashigoel.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/learning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/interviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  let interviewRoutes: MetadataRoute.Sitemap = [];

  try {
    const posts = (await getBlogPosts()) as PageObjectResponse[];
    blogRoutes = posts.map((post) => ({
      url: `${BASE}/blog/${getRichText((post.properties as any)["Slug"])}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // regenerates on next deploy
  }

  try {
    const interviews = (await getInterviews()) as PageObjectResponse[];
    interviewRoutes = interviews.map((i) => ({
      url: `${BASE}/interviews/${getRichText((i.properties as any)["Slug"])}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // regenerates on next deploy
  }

  return [...staticRoutes, ...blogRoutes, ...interviewRoutes];
}
