"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  if (sent) return <div className="form-success"><CheckCircle weight="fill" /><h3>Děkujeme za poptávku</h3><p>Ozveme se vám co nejdříve.</p><button onClick={() => setSent(false)} className="text-button">Poslat další zprávu</button></div>;
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-heading"><span>Nezávazná poptávka</span><h2>Povězte nám o svém projektu</h2><p>Vyplnění vám zabere jen pár minut. Ozveme se a společně probereme vhodné řešení.</p></div>
    <div className="form-grid"><label className="form-field"><span>Jméno</span><input required name="firstName" autoComplete="given-name" placeholder="Vaše jméno*" /></label><label className="form-field"><span>Příjmení</span><input required name="lastName" autoComplete="family-name" placeholder="Vaše příjmení*" /></label></div>
    <div className="form-grid"><label className="form-field"><span>Telefon</span><input required name="phone" type="tel" autoComplete="tel" placeholder="Telefonní číslo*" /></label><label className="form-field"><span>E-mail</span><input required name="email" type="email" autoComplete="email" placeholder="E-mailová adresa*" /></label></div>
    <label className="form-field form-field-full"><span>Místo realizace</span><input required name="place" autoComplete="address-level2" placeholder="Místo realizace*" /></label>
    <label className="form-field form-field-full"><span>Jak vám můžeme pomoci?</span><textarea required name="message" rows={4} placeholder="Vaše zpráva*" /></label>
    <label className="form-consent"><input required type="checkbox" name="consent" /><span>Odesláním formuláře souhlasíte se zpracováním údajů, s podmínkami <a href="/zasady-ochrany-osobnich-udaju" target="_blank">zásady ochrany os. údajů</a> a potvrzujete, že jste se seznámil s <a href="/documents/VOP-sunpower.cz-.pdf" target="_blank">VOP</a> a <a href="/documents/Pouceni-spotrebitele-o-pravu-na-odstoupeni-od-smlouvy-uzavrene-distancnim-zpusobem.pdf" target="_blank">poučením</a>.</span></label>
    <div className="form-footer"><button className="button button-gold submit" type="submit">Odeslat poptávku <ArrowRight /></button></div>
  </form>;
}
