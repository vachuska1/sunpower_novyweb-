import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return <footer className="footer">
    <div className="footer-inner">
      <div><Image src="/logo.svg" width={160} height={83} alt="Sunpower" /></div>
      <div><h3>Adresa</h3><p>Jarošovská 840/II<br />377 02 Jindřichův Hradec</p></div>
      <div><h3>Kontakt</h3><a href="mailto:office@sunpower.cz">office@sunpower.cz</a><br /><a href="tel:+420731744188">+420 731 744 188</a></div>
      <div><h3>Sledujte nás</h3><div className="socials"><a href="https://www.facebook.com/sunpowersro" aria-label="Facebook"><FacebookLogo /></a><a href="https://www.instagram.com/sunpower_cz/" aria-label="Instagram"><InstagramLogo /></a><a href="https://wa.me/420731744188" aria-label="WhatsApp"><WhatsappLogo /></a></div></div>
    </div>
    <div className="copyright">© {new Date().getFullYear()} Sunpower s.r.o. · všechna práva vyhrazena · <Link href="/dokumenty">Dokumenty</Link></div>
  </footer>;
}
