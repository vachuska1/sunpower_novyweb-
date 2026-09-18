import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticle } from "@/lib/articles";
import { absoluteUrl, pageMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) return {};
  const base = pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.coverImage || "/images/banner.jpg", type: "article" });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: ["SUNPOWER s.r.o."] } };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) notFound();
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, url: absoluteUrl(`/blog/${post.slug}`), image: (post.gallery.length ? post.gallery : [post.coverImage]).filter(Boolean).map(absoluteUrl), datePublished: post.publishedAt, dateModified: post.updatedAt, inLanguage: "cs-CZ", author: { "@id": `${siteUrl}/#organization` }, publisher: { "@id": `${siteUrl}/#organization` }, mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Novinky", item: absoluteUrl("/blog") }, { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) }] };
  const structuredData = { "@context": "https://schema.org", "@graph": [articleSchema, breadcrumbSchema].map(({ "@context": _, ...item }) => item) };
  return <><Header /><main className="article-page"><header className="article-head"><div className="container"><Link href="/blog" className="back"><ArrowLeft /> Zpět na novinky</Link><h1>{post.title}</h1><p>{post.excerpt}</p></div></header><article className="article-content"><div className="container article-layout"><div className="article-body article-rich" dangerouslySetInnerHTML={{ __html: post.content }} /><aside className="article-images">{post.gallery.map((image, index) => <div key={image}><Image src={image} fill sizes="(max-width: 800px) 100vw, 38vw" alt={`${post.title} – obrázek ${index + 1}`} /></div>)}</aside></div></article><section className="article-next"><div className="container"><h2>Máte podobný projekt?</h2><Link className="button button-gold" href="/#poptavka">Nezávazně nás kontaktujte <ArrowRight /></Link></div></section></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
