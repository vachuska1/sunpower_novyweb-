import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/dalkove-programovani-regulaci`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/vice-o-sunpower`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/dokumenty`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/zasady-ochrany-osobnich-udaju`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
  const productPages: MetadataRoute.Sitemap = services
    .filter(({ slug }) => slug !== "ridici-systemy")
    .map(({ slug }) => ({
      url: `${siteUrl}/produkty/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  const articles = await getArticles();
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...staticPages, ...productPages, ...articlePages];
}
