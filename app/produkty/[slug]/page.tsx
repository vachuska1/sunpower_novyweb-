import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { notFound, redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IslandHouse from "@/components/IslandHouse";
import { services } from "@/lib/services";
import { absoluteUrl, pageMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "ridici-systemy") return { alternates: { canonical: "/dalkove-programovani-regulaci" }, robots: { index: false, follow: true } };
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.text, path: `/produkty/${service.slug}`, image: service.photos[0] });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "ridici-systemy") redirect("/dalkove-programovani-regulaci");
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "@id": `${siteUrl}/produkty/${service.slug}#service`, name: service.title, description: service.text, url: absoluteUrl(`/produkty/${service.slug}`), image: service.photos.map(absoluteUrl), provider: { "@id": `${siteUrl}/#organization` }, areaServed: { "@type": "Country", name: "Česká republika" }, serviceType: service.title };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl }, { "@type": "ListItem", position: 2, name: service.title, item: absoluteUrl(`/produkty/${service.slug}`) }] };
  const structuredData = { "@context": "https://schema.org", "@graph": [serviceSchema, breadcrumbSchema].map(({ "@context": _, ...item }) => item) };
  if (slug === "ostrovni-dum") return <><IslandHouse /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
  return <><Header /><main className={`detail-main detail-${slug}`}>
    <section className="detail-hero" style={{"--accent": service.color} as React.CSSProperties}><div className="container detail-grid"><div><Link href="/#sluzby" className="back"><ArrowLeft /> Všechny služby</Link><h1>{service.title}</h1><p>{service.text}</p><Link className="button button-gold" href="/#poptavka">Nezávazně poptat <ArrowRight /></Link></div><div className="detail-photo"><Image src={service.photos[0]} fill sizes="(max-width: 800px) 100vw, 45vw" alt={service.title} priority /><div className="detail-icon"><Image src={service.image} fill sizes="110px" alt="" /></div></div></div></section>
    {slug === "vytapeni-a-chlazeni" && <section className="product-resources"><div className="container"><a className="plain-link" href="https://klimastena.cz/">Více na webu Klimastěna <ArrowRight /></a></div></section>}
    <section className="detail-benefits"><div className="container"><h2>Řešení promyšlené do detailu</h2><div className="benefit-grid">{service.points.map((point, index) => <div key={point}><span>0{index+1}</span><Check weight="bold" /><h3>{point}</h3></div>)}</div></div></section>
    <section className="detail-gallery"><div className="container"><div><h2>Technologie v praxi</h2></div><div className="detail-gallery-images">{service.photos.map((photo, index) => <div key={photo}><Image src={photo} fill sizes="(max-width: 700px) 100vw, 50vw" alt={`${service.title} – vizuální podklad ${index + 1}`} /></div>)}</div></div></section>
    <section className="detail-cta"><div className="container"><div><h2>Pojďme probrat váš projekt</h2></div><Link className="button button-light" href="/#poptavka">Chci konzultaci <ArrowRight /></Link></div></section>
  </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
