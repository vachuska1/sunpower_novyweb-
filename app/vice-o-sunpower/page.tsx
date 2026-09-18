import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Více o SUNPOWER", description: "Model spolupráce SUNPOWER s elektrikáři a instalatéry, dálkové programování a regulace Technische Alternative pro Česko a Slovensko.", path: "/vice-o-sunpower", image: "/images/regulation-visualization-house.jpeg" });

const sections = [
  {
    title: "Pro koho je řešení vhodné",
    text: "Pro elektrikáře, instalatéry, dodavatele tepelných čerpadel a fotovoltaických elektráren. Všude tam, kde nároky uživatelů nebo konstrukce soustavy překračují standardní požadavky.",
    points: ["Kombinace různých zdrojů energie", "Řízení soustavy podle výroby z FVE nebo ceny energie na krátkodobých trzích (SPOT)", "Dálkové ovládání celého systému prostřednictvím aplikace nebo webového rozhraní", "Automatické zasílání chybových hlášení", "Přístup několika uživatelů s různou úrovní přístupových práv"],
  },
  {
    title: "Model spolupráce",
    text: "Provedeme základní zaškolení a dodáme hardware s dohodnutým rabatem. Hardware není dostupný na e-shopech s nekorektními slevami.",
    points: ["Bezplatný software pro objektové programování s knihovnou kompletních funkcí", "Technik s běžnými znalostmi může zvládnout programování po jednodenním zaškolení", "Pokud se partner nechce zabývat programováním a tvorbou vizualizací, zajistí tyto činnosti naši pracovníci na dálku prostřednictvím internetu"],
  },
  {
    title: "Technische Alternative",
    text: "Používáme hardware našeho rakouského partnera Technische Alternative RT GmbH, který působí na trhu více než 30 let. SUNPOWER s ním spolupracuje 25 let a zajišťuje generální zastoupení pro ČR a SR.",
    points: ["Záruční a pozáruční servis", "Kompletní české prostředí a manuály", "Veškerý software zdarma"],
  },
  {
    title: "Software a vzdálený přístup",
    text: "Nástroje pro přípravu, ovládání i vyhodnocování provozu soustavy jsou k dispozici zdarma.",
    points: ["Program pro objektové programování", "Vytváření vizualizací a simulace provozu na PC", "Aplikace pro iOS i Android", "Webové rozhraní včetně statistik o provozu", "Stahování veškerých dat pro další vyhodnocení nebo export do dalších systémů"],
  },
  {
    title: "Hardware a příslušenství",
    text: "Volně programovatelné regulace doplňuje rozhraní pro připojení k internetu a široká nabídka příslušenství.",
    points: ["Volně programovatelná regulace: 6 vstupů / 10 výstupů", "Volně programovatelná regulace: 16 vstupů / 16 výstupů", "Speciální příslušenství pro využití přebytků z fotovoltaických elektráren", "Ovládací prvky a rozhraní pro připojení produktů třetích stran", "Bezdrátové komponenty", "Směšované skupiny a sestavy pro průtokový ohřev vody"],
  },
];

const steps = [
  ["Hydraulické schéma", "Vytvoříme hydraulické schéma zapojení. Jednotlivé komponenty popíšeme a přidělíme jim kódy."],
  ["Dodávka regulace", "Na stavbu dodáme regulaci nebo kompletně vystrojený rozvaděč MaR. Součástí dodávky je podrobné schéma elektrického zapojení se stejnými kódy na svorkovnici jako v hydraulickém schématu."],
  ["Zapojení na místě", "Místní elektrikář připojí přívod elektrické energie, internet, tepelná a oběhová čerpadla, ventily, čidla, termostaty a další komponenty."],
  ["Kontrola na dálku", "Po připojení k síti se zařízení automaticky spojí s naším serverem. Náš technik provede na dálku odladění a kontrolu."],
];

export default function AboutSunpower() {
  return <><Header /><main className="subpage sunpower-profile">
    <section className="subpage-head"><div className="container"><Link className="back" href="/"><ArrowLeft /> Zpět na úvod</Link><h1>Více o SUNPOWER</h1><p>Koncepce regulace pro vzdálený přístup a instalaci běžným elektrikářem.</p></div></section>
    <div className="container profile-sections">{sections.map(({ title, text, points }) => <section className="profile-section" key={title}><h2>{title}</h2><p>{text}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul></section>)}</div>
    <section className="remote-steps"><div className="container"><div className="section-head"><h2>Od návrhu po kontrolu systému</h2></div><div className="remote-step-grid">{steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="product-resources"><div className="container"><h2>Dokumentace a software</h2><div className="resource-links"><a href="https://www.ta.co.at/en/downloads/documents">Dokumentace Technische Alternative</a><a href="https://www.ta.co.at/en/downloads/software">Software Technische Alternative</a></div></div></section>
    <section className="detail-cta"><div className="container"><h2>Máte zájem o spolupráci?</h2><Link className="button button-light" href="/#poptavka">Kontaktujte nás <ArrowRight /></Link></div></section>
  </main><Footer /></>;
}
