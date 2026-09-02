import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CloudArrowUp, Cpu, DesktopTower, HouseLine, Lightning, Wrench } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegulationGallery from "@/components/RegulationGallery";

const steps = [
  ["01", "Návrh koncepce", "Vytvoříme hydraulické schéma zapojení, popíšeme komponenty a přidělíme jim jednoznačné kódy."],
  ["02", "Připravený rozvaděč", "Dodáme kompletně vystrojený rozvaděč MaR s podrobným elektrickým schématem a označenými svorkami."],
  ["03", "Montáž na místě", "Místní elektrikář připojí napájení, internet, čerpadla, ventily, čidla, termostaty a další zařízení."],
  ["04", "Spuštění na dálku", "Po připojení se regulace spojí se serverem a náš technik provede vzdálené programování, kontrolu a odladění."],
] as const;

const controls = ["Topení a chlazení", "Tepelná čerpadla a zdroje", "Fotovoltaika a ukládání energie", "Rekuperace a vzduchotechnika", "Spotřebiče, žaluzie a zavlažování", "Nabíjení automobilů a baterií"];
export default function RemoteProgrammingPage() {
  return <><Header /><main className="remote-page">
    <section className="remote-hero"><div className="container remote-hero-grid"><div><span className="eyebrow">Dálkové programování regulací</span><h1>Specialista nemusí být na stavbě.</h1><p>Kompletní koncepce regulace pro vzdálený přístup a instalaci běžným elektrikářem. Od návrhu schématu přes hardware až po vzdálené odladění provozu.</p><div className="hero-actions"><Link className="button button-gold" href="/#poptavka">Chci navrhnout řešení <ArrowRight /></Link><a className="plain-link" href="tel:+420731744188">+420 731 744 188</a></div></div><div className="remote-hero-image"><Image src="/images/regulation-heating-choice.jpeg" fill sizes="(max-width: 800px) 100vw, 50vw" alt="Webové rozhraní dálkového řízení vytápění" priority /></div></div></section>

    <section className="remote-steps"><div className="container"><div className="section-head"><div><span className="eyebrow">Od návrhu po provoz</span><h2>Jak spolupráce funguje</h2></div><p>Jednotné označení komponent propojuje projekt, rozvaděč a práci technika na místě. Programování zajišťujeme vzdáleně.</p></div><div className="remote-step-grid">{steps.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="remote-platform"><div className="container remote-platform-grid"><div className="platform-image"><Image src="/images/regulation-cooling-floor.jpeg" fill sizes="(max-width: 800px) 100vw, 48vw" alt="Dálkové ovládání chlazení jednotlivých místností" /></div><div><span className="eyebrow light">Technische Alternative</span><h2>Osvědčený hardware. Software bez dalších poplatků.</h2><p>Používáme volně programovatelné regulace rakouského výrobce Technische Alternative. Se společností spolupracujeme 25 let a zajišťujeme generální zastoupení pro Českou republiku a Slovensko.</p><ul><li><Check /> Kompletní české prostředí a manuály</li><li><Check /> Aplikace pro iOS a Android</li><li><Check /> Webové rozhraní a statistiky provozu</li><li><Check /> Simulace provozu a tvorba vizualizací</li><li><Check /> Export dat do dalších systémů</li><li><Check /> Záruční a pozáruční servis</li></ul></div></div></section>

    <section className="remote-control"><div className="container"><div className="section-head"><div><span className="eyebrow">Jeden systém</span><h2>Co lze inteligentně řídit</h2></div><p>Systém propojuje různé zdroje a technologie, vyhodnocuje jejich provoz a automaticky reaguje na potřeby budovy i aktuální cenu energie.</p></div><div className="control-grid">{controls.map((item,index) => <div key={item}>{index===0?<HouseLine />:index===1?<Cpu />:index===2?<Lightning />:index===3?<DesktopTower />:index===4?<Wrench />:<CloudArrowUp />}<span>{item}</span></div>)}</div></div></section>

    <section className="remote-gallery"><div className="container"><div className="section-head"><div><span className="eyebrow">Rozhraní v praxi</span><h2>Přehledné ovládání odkudkoliv</h2></div><p>Každá vizualizace vzniká podle konkrétní technologie a požadavků uživatele. Kliknutím ji můžete zobrazit v plné velikosti.</p></div><RegulationGallery /></div></section>

    <section className="partner-call"><div className="container partner-call-grid"><div><span className="eyebrow light">Aktuálně hledáme partnery</span><h2>Montujete elektro, topení nebo tepelná čerpadla?</h2><p>Provedeme základní zaškolení, dodáme hardware s partnerským rabatem a v případě potřeby zajistíme programování i tvorbu vizualizací kompletně na dálku.</p></div><div className="partner-types"><span><Wrench /> Elektrikáři</span><span><HouseLine /> Instalatéři</span><span><Cpu /> Dodavatelé tepelných čerpadel</span><span><Lightning /> Fotovoltaické elektrárny</span></div><Link className="button button-light" href="/#poptavka">Chci se stát partnerem <ArrowRight /></Link></div></section>
  </main><Footer /></>;
}
