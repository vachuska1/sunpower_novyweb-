"use client";

import { ChatCircleDots, EnvelopeSimple, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { useState } from "react";

const actions = [
  { href: "tel:+420731744188", label: "Zavolat", icon: Phone },
  { href: "mailto:office@sunpower.cz", label: "Napsat e-mail", icon: EnvelopeSimple },
  { href: "https://wa.me/420731744188", label: "Napsat na WhatsApp", icon: WhatsappLogo, external: true },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  return <div className={open ? "floating-contact is-open" : "floating-contact"}>
    <div className="floating-actions" aria-hidden={!open}>{actions.map(({ href, label, icon: Icon, external }) => <a href={href} key={label} aria-label={label} tabIndex={open ? 0 : -1} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><span>{label}</span><Icon weight="regular" /></a>)}</div>
    <button className="floating-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Zavřít rychlý kontakt" : "Otevřít rychlý kontakt"}>{open ? <X /> : <ChatCircleDots />}</button>
  </div>;
}
