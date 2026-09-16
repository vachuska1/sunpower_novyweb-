import { FilePdf } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const documents = [
  ["Formulář – Odstoupení od smlouvy", "/documents/Formular-Odstoupeni-od-smlouvy.pdf"],
  ["Poučení spotřebitele o právu na odstoupení od smlouvy uzavřené distančním způsobem", "/documents/Pouceni-spotrebitele-o-pravu-na-odstoupeni-od-smlouvy-uzavrene-distancnim-zpusobem.pdf"],
  ["VOP – klimastena.cz", "/documents/VOP-klimastena.cz_.pdf"],
  ["VOP – sunpower.cz", "/documents/VOP-sunpower.cz-.pdf"],
] as const;

export default function Documents() {
  return <><Header /><main className="subpage documents-page">
    <section className="documents-head"><div className="container"><span>Dokumenty</span><h1>Letáky, katalogy<br />a další dokumenty ke stažení</h1></div></section>
    <section className="documents"><div className="container">{documents.map(([title, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}><FilePdf weight="duotone" /><h2>{title}</h2></a>)}</div></section>
  </main><Footer /></>;
}
