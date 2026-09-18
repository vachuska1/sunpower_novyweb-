import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = pageMetadata({ title: "Novinky a realizace", description: "Novinky SUNPOWER, realizované energetické projekty, inovace v řízení budov, vytápění, chlazení a úsporných technologiích.", path: "/blog", image: "/images/blog-pivovar.png" });
export default async function Blog() { const posts = await getArticles(); return <><Header /><main className="subpage"><section className="subpage-head"><div className="container"><h1>Novinky ze Sunpoweru</h1><p>Původní články, realizace a vývoj nových technologií. Každou novinku můžete otevřít a přečíst samostatně.</p></div></section><section className="posts"><div className="container posts-grid">{posts.map((post) => <article className="post" key={post.slug}><Link className="post-image landscape" href={`/blog/${post.slug}`}>{post.coverImage && <Image src={post.coverImage} fill sizes="(max-width: 700px) 100vw, 33vw" alt={post.title} />}</Link><div className="post-body"><span>{new Date(post.publishedAt).toLocaleDateString("cs-CZ")} · Novinky</span><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`}>Otevřít článek <ArrowRight /></Link></div></article>)}</div></section></main><Footer /></> }
