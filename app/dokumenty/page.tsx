import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Documents() { return <><Header /><main className="subpage"><section className="subpage-head"><div className="container"><span className="eyebrow">Ke stažení</span><h1>Dokumenty</h1><p>Důležité firemní a produktové dokumenty. Soubory doplníme před finálním spuštěním webu.</p></div></section><section className="documents"><div className="container"><div><span>Obchodní dokument</span><h2>Všeobecné obchodní podmínky</h2><DownloadSimple /></div><div><span>Informace pro zákazníky</span><h2>Poučení spotřebitele</h2><DownloadSimple /></div><div><span>Ochrana soukromí</span><h2>Zásady ochrany osobních údajů</h2><DownloadSimple /></div></div></section></main><Footer /></> }
