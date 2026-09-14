import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cube, Drop, Lightning, Sun } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const principles = [
  {
    title: "Modulární stavba", icon: Cube, label: "Dům, který se přizpůsobí",
    text: "Většina výstavby probíhá ve výrobní hale. Samonosné moduly umožňují rychlou montáž, snadnou přepravu i pozdější přemístění domu. Velikost bydlení lze postupně rozšiřovat podle potřeb rodiny.",
    points: ["Maximální využití obytného prostoru", "Možnost vhodné orientace vůči světovým stranám", "Technologie mimo obytnou část pro omezení hluku a vibrací"],
  },
  {
    title: "Energie", icon: Lightning, label: "Každá uložená energie má smysl",
    text: "Koncepce počítá s fotovoltaikou a dalšími obnovitelnými zdroji, například větrnou elektrárnou. Nízkonapěťové stejnosměrné rozvody napájejí osvětlení, nabíjení telefonů a notebooků, topení i regulaci a snižují nároky na akumulátory.",
    points: ["Ukládání elektrické energie do baterií", "Samostatný okruh 230 V podle dostupné energie", "Pro vytápění a ohřev vody se počítá i se dřevem a vyvíjeným biomilířem"],
  },
  {
    title: "Voda a chlazení", icon: Drop, label: "Voda pro komfort i zahradu",
    text: "Pro léto je navrženo pasivní chlazení ze studny nebo zemního vrtu se systémem Klimastěna. Nadzemní sběrná nádrž shromažďuje vodu použitou pro chlazení i dešťovou vodu a umožňuje kapkovou závlahu zahrady.",
    points: ["Pasivní chlazení obytného prostoru", "Akumulace vody a její další využití", "Kompostovací toaleta; řešení šedé vody ve spolupráci s odborníky"],
  },
  {
    title: "Ostrovní provoz", icon: Sun, label: "Nezávislost s ohledem na roční období",
    text: "Provoz domu se přizpůsobuje dostupné energii a chrání baterie před úplným vybitím. Od jara do podzimu koncepce počítá s menšími omezeními, v nejchladnějších zimních měsících s úsporným režimem pro základní potřeby domácnosti.",
    points: ["Řízení spotřeby podle aktuálních podmínek", "Doplňkový zdroj energie nezávislý na počasí", "Připravenost na doplnění dalších alternativních zdrojů"],
  },
];

export default function IslandHouse() {
  return <><Header /><main className="detail-main island-house">
    <section className="detail-hero" style={{ "--accent": "#5b401b" } as React.CSSProperties}>
      <div className="container detail-grid">
        <div><Link href="/#sluzby" className="back"><ArrowLeft /> Všechny služby</Link><h1>Bydlení navržené pro větší nezávislost.</h1><p>Modulární dům, který lze rychle postavit, postupně rozšiřovat a v případě potřeby přemístit. Koncepce spojuje nízké provozní náklady, obnovitelné zdroje energie a maximální využití obytného prostoru.</p></div>
        <div className="detail-photo"><Image src="/images/detail-dum.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="Ostrovní dům SUNPOWER" priority /></div>
      </div>
    </section>
    <section className="island-principles" aria-label="Koncepce ostrovního domu"><div className="container island-principles-grid">
      {principles.map(({ title, icon: Icon, label, text, points }, index) => <article className="island-block" key={title}>
        <div className="island-block-top"><Icon aria-hidden="true" /><span>0{index + 1}</span></div><h2>{title}</h2><h3>{label}</h3><p>{text}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
        {title === "Voda a chlazení" && <a className="plain-link" href="https://klimastena.cz/">Poznat systém Klimastěna <ArrowRight /></a>}
      </article>)}
    </div></section>
    <section className="product-resources"><div className="container"><h2>Prezentace ostrovního domu</h2><a className="button button-gold" href="/documents/ostrovni-dum-2023.pdf" target="_blank" rel="noopener noreferrer">Otevřít prezentaci (PDF) <ArrowRight /></a><div className="resource-links"><a href="/documents/ostrovni-dum-2023.pdf" download>Stáhnout prezentaci ostrovního domu</a></div></div></section>
    <section className="detail-cta"><div className="container"><div><h2>Pojďme probrat vaše představy</h2></div><Link className="button button-light" href="/#poptavka">Chci konzultaci <ArrowRight /></Link></div></section>
  </main><Footer /></>;
}
