import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticle } from "@/lib/articles";

export const dynamic = "force-dynamic";

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) notFound();
  return <><Header /><main className="article-page"><header className="article-head"><div className="container"><Link href="/blog" className="back"><ArrowLeft /> Zpět na novinky</Link><span className="eyebrow">{new Date(post.publishedAt).toLocaleDateString("cs-CZ")} · Novinky</span><h1>{post.title}</h1><p>{post.excerpt}</p></div></header><article className="article-content"><div className="container article-layout"><div className="article-body article-rich" dangerouslySetInnerHTML={{ __html: post.content }} /><aside className="article-images">{post.gallery.map((image, index) => <div key={image}><Image src={image} fill sizes="(max-width: 800px) 100vw, 38vw" alt={`${post.title} – obrázek ${index + 1}`} /></div>)}</aside></div></article><section className="article-next"><div className="container"><h2>Máte podobný projekt?</h2><Link className="button button-gold" href="/#poptavka">Nezávazně nás kontaktujte <ArrowRight /></Link></div></section></main><Footer /></>;
}
