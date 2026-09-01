import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <><Header /><main className="article-page"><header className="article-head"><div className="container"><Link href="/blog" className="back"><ArrowLeft /> Zpět na novinky</Link><span className="eyebrow">{post.date} · Novinky</span><h1>{post.title}</h1><p>{post.excerpt}</p></div></header><article className="article-content"><div className="container article-layout"><div className="article-body">{post.blocks.map((block, index) => <section key={index}>{block.heading && <h2>{block.heading}</h2>}{block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}{post.blocks.length === 0 && <p className="visual-note">Původní příspěvek je publikován jako obrazový dokument.</p>}</div><aside className="article-images">{post.images.map((image, index) => <div key={image}><Image src={image} fill sizes="(max-width: 800px) 100vw, 38vw" alt={`${post.title} – obrázek ${index + 1}`} /></div>)}</aside></div></article><section className="article-next"><div className="container"><h2>Máte podobný projekt?</h2><Link className="button button-gold" href="/#poptavka">Nezávazně nás kontaktujte <ArrowRight /></Link></div></section></main><Footer /></>;
}
