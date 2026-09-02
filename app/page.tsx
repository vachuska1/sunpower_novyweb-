import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartLineUp, Check, CloudArrowUp, EnvelopeSimple, MapPin, Phone, Wrench } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import { services } from "@/lib/services";

export default function Home() {
  return <><Header /><main>
    <section className="hero">
      <div className="hero-shape" />
      <div className="container hero-inner">
        <div className="hero-copy"><span className="eyebrow">Ryze česká společnost</span><h1>Sunpower —<br /><em>smysluplné energie</em></h1><p>Vítáme vás na webu společnosti SUNPOWER s.r.o. Zaměřujeme se na energetické koncepce, využívání a ukládání jednotlivých druhů energií s důrazem na nejvyšší efektivnost.</p><div className="hero-note">Energetická řešení · projekt · realizace · optimalizace</div><div className="hero-actions"><Link className="button button-gold" href="#sluzby">Naše řešení <ArrowRight /></Link><Link className="plain-link" href="#poptavka">Chci konzultaci</Link></div></div>
        <div className="hero-visual"><div className="image-frame publication"><Image src="/images/publicita-page.jpg" fill sizes="(max-width: 900px) 100vw, 54vw" alt="Projekt EGREAL spolufinancovaný Evropskou unií" priority /></div></div>
      </div>
    </section>

    <section className="remote-intro">
      <div className="container remote-intro-grid">
        <div className="remote-copy"><span className="eyebrow">Nový model spolupráce</span><h2>Regulace připravená na dálku.<br /><em>Zapojená místním elektrikářem.</em></h2><p>Navrhneme zapojení, dodáme kompletně vystrojený rozvaděč a po připojení k internetu systém vzdáleně naprogramujeme, zkontrolujeme a odladíme.</p><div className="remote-benefits"><div><Wrench /><span><strong>Jednoduchá montáž</strong>Místní technik zapojí zařízení podle jasně označeného schématu.</span></div><div><CloudArrowUp /><span><strong>Vzdálené spuštění</strong>Náš specialista provede programování a kontrolu přes internet.</span></div><div><ChartLineUp /><span><strong>Data pod kontrolou</strong>Vizualizace, statistiky a optimalizace provozu odkudkoliv.</span></div></div><Link href="/dalkove-programovani-regulaci" className="button button-gold">Jak spolupráce funguje <ArrowRight /></Link></div>
        <div className="remote-visual"><div className="remote-main-image"><Image src="/images/regulation-visualization-house.jpeg" fill sizes="(max-width: 800px) 100vw, 48vw" alt="Vizualizace dálkově řízeného energetického systému" /></div><div className="remote-small-image"><Image src="/images/regulation-graph.jpeg" fill sizes="260px" alt="Graf měřených hodnot regulace" /></div><div className="remote-status"><span></span> Připojeno k systému</div></div>
      </div>
    </section>

    <section className="stats"><div className="container stats-grid"><div><strong>23</strong><span>let na trhu</span></div><div><strong>1 268+</strong><span>realizovaných instalací</span></div><div><strong>4</strong><span>státy působnosti</span></div><div><strong>1</strong><span>partner pro celý projekt</span></div></div></section>

    <section className="services-section" id="sluzby"><div className="container"><div className="section-head"><div><span className="eyebrow">Co umíme</span><h2>Produkty a služby</h2></div><p>Propojujeme vytápění, chlazení, ukládání energie a chytré řízení do jednoho funkčního celku.</p></div><div className="services-grid">{services.map((service, i) => <Link href={`/produkty/${service.slug}`} className="service-card" key={service.slug} style={{"--accent": service.color} as React.CSSProperties}><span className="service-number">0{i+1}</span><h3>{service.title}</h3><div className="service-icon"><Image src={service.image} width={170} height={150} alt="" /></div><span className="service-link">Zjistit více <ArrowRight /></span></Link>)}</div></div></section>

    <section className="about"><div className="container about-grid"><div className="about-collage"><Image src="/images/gallery-2.jpg" fill sizes="50vw" alt="Realizace technologií Sunpower" /><div className="about-badge">Od návrhu<br />po spuštění</div></div><div className="about-copy"><span className="eyebrow">Proč Sunpower</span><h2>Energie musí fungovat jako jeden celek</h2><p>Nedodáváme izolované technologie. Díváme se na budovu komplexně a hledáme řešení, které bude spolehlivé, úsporné a příjemné pro každodenní používání.</p><ul><li><Check weight="bold" /> Vlastní návrh a projektová příprava</li><li><Check weight="bold" /> Ověřené technologie a zkušený tým</li><li><Check weight="bold" /> Servis a dlouhodobá optimalizace</li></ul><Link className="plain-link" href="#poptavka">Probrat moje řešení <ArrowRight /></Link></div></div></section>

    <section className="contact-section" id="poptavka"><div className="container contact-grid"><div className="contact-intro"><span className="eyebrow light">Máte projekt?</span><h2>Najdeme pro něj smysluplné řešení.</h2><p>Popište nám svou představu. Ozveme se, probereme možnosti a doporučíme další postup.</p><div className="contact-lines"><a href="tel:+420731744188"><Phone /> +420 731 744 188</a><a href="mailto:office@sunpower.cz"><EnvelopeSimple /> office@sunpower.cz</a><span><MapPin /> Jindřichův Hradec</span></div></div><ContactForm /></div></section>

    <section className="gallery-section" id="reference"><div className="container"><div className="section-head"><div><span className="eyebrow">Naše práce</span><h2>Fotogalerie instalací</h2></div><p>Kliknutím fotografii zvětšíte a mezi snímky můžete přecházet šipkami.</p></div></div><Gallery /></section>

    <Partners />

    <section className="direct-contact" id="kontakt"><div className="container"><span>Máte otázku?</span><h2>Stačí se ozvat.</h2><a href="mailto:office@sunpower.cz">office@sunpower.cz <ArrowRight /></a></div></section>
  </main><Footer /></>;
}
