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
    <div className="form-grid"><label className="form-field"><span>Jméno</span><input required name="firstName" autoComplete="given-name" placeholder="Vaše jméno" /></label><label className="form-field"><span>Příjmení</span><input required name="lastName" autoComplete="family-name" placeholder="Vaše příjmení" /></label></div>
    <div className="form-grid"><label className="form-field"><span>Telefon</span><input required name="phone" type="tel" autoComplete="tel" placeholder="+420 000 000 000" /></label><label className="form-field"><span>E-mail</span><input required name="email" type="email" autoComplete="email" placeholder="vas@email.cz" /></label></div>
    <label className="form-field form-field-full"><span>Místo realizace</span><input required name="place" autoComplete="address-level2" placeholder="Město nebo obec" /></label>
    <label className="form-field form-field-full"><span>Jak vám můžeme pomoci?</span><textarea required name="message" rows={4} placeholder="Napište nám pár slov o vašem projektu…" /></label>
    <div className="form-footer"><p className="privacy">Odesláním souhlasíte se zpracováním osobních údajů pouze pro vyřízení této poptávky.</p><button className="button button-gold submit" type="submit">Odeslat poptávku <ArrowRight /></button></div>
  </form>;
}
