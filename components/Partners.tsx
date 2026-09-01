import Image from "next/image";

const partners = [
  { src: "/images/partner-ekz.png", name: "EKZ Energieberatung" },
  { src: "/images/partner-jcu.png", name: "Jihočeská univerzita" },
  { src: "/images/partner-tsi.png", name: "Fakulta strojního inženýrství" },
  { src: "/images/publicita-page.jpg", name: "Projekt spolufinancovaný Evropskou unií" },
  { src: "/images/partner-nukleon.png", name: "Nukleon" },
  { src: "/images/partner-ta.png", name: "Technische Alternative" },
  { src: "/images/partner-5.png", name: "Technische Alternative" },
];

export default function Partners() {
  return <section className="partners" aria-label="Partneři Sunpower"><div className="partners-track">{partners.map((partner, index) => <div className="partner" key={`${partner.src}-${index}`}><Image src={partner.src} fill sizes="240px" alt={partner.name} /></div>)}</div></section>;
}
