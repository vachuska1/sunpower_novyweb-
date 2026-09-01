import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><Header /><main className="detail-main">
    <section className="detail-hero" style={{"--accent": service.color} as React.CSSProperties}><div className="container detail-grid"><div><Link href="/#sluzby" className="back"><ArrowLeft /> Všechny služby</Link><span className="eyebrow">{service.eyebrow}</span><h1>{service.title}</h1><p>{service.text}</p><Link className="button button-gold" href="/#poptavka">Nezávazně poptat <ArrowRight /></Link></div><div className="detail-photo"><Image src={service.photos[0]} fill sizes="(max-width: 800px) 100vw, 45vw" alt={service.title} priority /><div className="detail-icon"><Image src={service.image} fill sizes="110px" alt="" /></div></div></div></section>
    <section className="detail-benefits"><div className="container"><span className="eyebrow">Hlavní výhody</span><h2>Řešení promyšlené do detailu</h2><div className="benefit-grid">{service.points.map((point, index) => <div key={point}><span>0{index+1}</span><Check weight="bold" /><h3>{point}</h3></div>)}</div></div></section>
    <section className="detail-gallery"><div className="container"><div><span className="eyebrow">Ukázka realizace</span><h2>Technologie v praxi</h2></div><div className="detail-gallery-images">{service.photos.map((photo, index) => <div key={photo}><Image src={photo} fill sizes="(max-width: 700px) 100vw, 50vw" alt={`${service.title} – realizace ${index + 1}`} /></div>)}</div></div></section>
    <section className="detail-cta"><div className="container"><div><span className="eyebrow light">Další krok</span><h2>Pojďme probrat váš projekt</h2></div><Link className="button button-light" href="/#poptavka">Chci konzultaci <ArrowRight /></Link></div></section>
  </main><Footer /></>;
}
