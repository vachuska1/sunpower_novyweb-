import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartLineUp, Check, CloudArrowUp, EnvelopeSimple, MapPin, Phone, Wrench } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import ProjectGallery from "@/components/ProjectGallery";
import Partners from "@/components/Partners";
import { services } from "@/lib/services";

export default function Home() {
  return <><Header /><main>
    <section className="hero">
      <div className="hero-shape" />
      <div className="container hero-inner">
        <div className="hero-copy"><h1><span className="hero-brand">SUNPOWER</span><span className="hero-dash">–</span><em>smysluplné energie</em></h1><p>Dynamická a vysoce inovativní společnost, která již více než čtvrt století nabízí kompletní řešení pro bydlení a využití komerčních objektů s důrazem na optimální komfort, nízké provozní náklady a ekonomické použití obnovitelných zdrojů energie.</p><div className="hero-note">Energetická řešení · projekt · realizace · optimalizace</div><div className="hero-actions"><Link className="button button-gold" href="#sluzby">Naše řešení <ArrowRight /></Link><Link className="plain-link" href="#poptavka">Chci konzultaci</Link></div></div>
        <div className="hero-visual"><div className="latest-projects"><h2>Naše nejnovější projekty</h2><div className="project-summary-row"><ul><li>Zařízení na demonstraci pokročilého energetického managementu a řízení komplexních procesů</li><li>Patentované řešení ukládání energie do baterií, tepla a chladu</li><li>100% rekuperace odpadní energie v technologickém procesu</li><li>Mobilní pivovar schopný plného ostrovního provozu</li></ul><a className="plain-link project-brewery-link" href="https://lucius-beer.cz/">Mobilní pivovar <ArrowRight /></a></div><ProjectGallery /><div className="project-partner-row"><p className="project-partners"><strong>Hledáme partnery a investory</strong><span>pro komerční uplatnění patentu.</span></p><Link className="button button-gold" href="#poptavka">Mám zájem o spolupráci <ArrowRight /></Link></div></div></div>
      </div>
    </section>

    <section className="remote-intro">
      <div className="container remote-intro-grid">
        <div className="remote-copy"><h2>Řízení komplexních systémů na dálku.<br /><em>Zapojí místní elektrikář.</em></h2><p><strong>Nabízíme řešení pro řízení komplexních systémů s využitím kvalitních volně programovatelných regulací rakouské firmy Technische Alternative.</strong></p><p>Pro elektrikáře, instalatéry, dodavatele tepelných čerpadel, FVE, vzduchotechniky, stínění a dalších technologií.</p><div className="remote-benefits"><div><Wrench /><span><strong>Jednoduché zapojení</strong>Místní elektrikář zapojí zařízení podle jasně označeného schématu.</span></div><div><CloudArrowUp /><span><strong>Vzdálené spuštění</strong>Programování, kontrolu a odladění provedeme přes internet.</span></div><div><ChartLineUp /><span><strong>Vzdálený dohled</strong>Vizualizace, statistiky a provozní data odkudkoliv.</span></div></div><Link href="/dalkove-programovani-regulaci" className="button button-gold">Jak spolupráce funguje <ArrowRight /></Link><div className="resource-links resource-links-sunpower"><Link href="/vice-o-sunpower">Více o SUNPOWER</Link><a href="https://www.ta.co.at/en/downloads/documents">Dokumentace Technische Alternative</a><a href="https://www.ta.co.at/en/downloads/software">Software Technische Alternative</a></div></div>
        <div className="remote-visual"><div className="remote-main-image"><Image src="/images/regulation-visualization-house.jpeg" fill sizes="(max-width: 800px) 100vw, 48vw" alt="Vizualizace dálkově řízeného energetického systému" /></div><div className="remote-small-image"><Image src="/images/regulation-graph.jpeg" fill sizes="260px" alt="Graf měřených hodnot regulace" /></div><div className="remote-status"><span></span> Připojeno k systému</div></div>
      </div>
    </section>

    <section className="stats"><div className="container stats-grid"><div><strong>23</strong><span>let na trhu</span></div><div><strong>1 268+</strong><span>realizovaných instalací</span></div><div><strong>4</strong><span>státy působnosti</span></div><div><strong>1</strong><span>partner pro celý projekt</span></div></div></section>

    <section className="services-section" id="sluzby"><div className="container"><div className="section-head"><div><h2>Produkty a služby</h2></div></div><div className="services-grid">{services.map((service, i) => <Link href={service.slug === "vytapeni-a-chlazeni" ? "https://klimastena.cz/" : service.slug === "ridici-systemy" ? "/dalkove-programovani-regulaci" : `/produkty/${service.slug}`} className="service-card" key={service.slug} style={{"--accent": service.color} as React.CSSProperties}><span className="service-number">0{i+1}</span><h3>{service.title}</h3>{service.slug === "ostrovni-dum" && <p className="service-summary">Modulární bydlení s minimálními provozními náklady.</p>}<div className="service-icon"><Image src={service.image} width={170} height={150} alt="" /></div><span className="service-link">Zjistit více <ArrowRight /></span></Link>)}</div></div></section>

    <section className="about"><div className="container about-grid"><div className="about-collage"><Image src="/images/gallery-2.jpg" fill sizes="50vw" alt="Realizace technologií Sunpower" /><div className="about-badge">Od návrhu<br />po spuštění</div></div><div className="about-copy"><h2>Energie musí fungovat jako jeden celek</h2><p>Nedodáváme izolované technologie. Díváme se na budovu komplexně a hledáme řešení, které bude spolehlivé, úsporné a příjemné pro každodenní používání.</p><ul><li><Check weight="bold" /> Vlastní návrh a projektová příprava</li><li><Check weight="bold" /> Ověřené technologie a zkušený tým</li><li><Check weight="bold" /> Servis a dlouhodobá optimalizace</li></ul><Link className="plain-link" href="#poptavka">Probrat moje řešení <ArrowRight /></Link></div></div></section>

    <section className="contact-section" id="poptavka"><div className="container contact-grid"><div className="contact-intro"><h2>Najdeme pro Vás smysluplné řešení.</h2><p>Popište nám svou představu. Ozveme se, probereme možnosti a doporučíme další postup.</p><div className="contact-lines"><a href="tel:+420734571415"><Phone /> +420 734 571 415</a><a href="mailto:office@sunpower.cz"><EnvelopeSimple /> office@sunpower.cz</a><a href="https://www.google.com/maps/search/?api=1&query=49.155819%2C15.018243" target="_blank" rel="noreferrer"><MapPin /> <span>Jarošovská 840/II<br />377 02 Jindřichův Hradec</span></a></div><div className="company-identifiers"><span>IČO: 26025655</span><span>DIČ: CZ26025655</span></div><div className="technical-support"><strong>Technická podpora MaR:</strong><span>Ing. Jan Pilný</span><a href="tel:+420734571415">+420 734 571 415</a></div><div className="contact-map"><iframe title="Mapa – SUNPOWER, Jarošovská 840/II, Jindřichův Hradec" src="https://maps.google.com/maps?q=49.155819%2C15.018243&t=k&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div><ContactForm /></div></section>

    <section className="gallery-section" id="reference"><div className="container"><div className="section-head"><div><h2>Fotogalerie instalací</h2></div></div></div><Gallery /></section>

    <Partners />

    <section className="direct-contact" id="kontakt"><div className="container"><h2>Stačí se ozvat.</h2><a href="mailto:office@sunpower.cz">office@sunpower.cz <ArrowRight /></a></div></section>
  </main><Footer /></>;
}
