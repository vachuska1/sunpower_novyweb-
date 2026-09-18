"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const consentKey = "sunpower-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(consentKey));
  }, []);

  function choose(value: "all" | "necessary") {
    localStorage.setItem(consentKey, value);
    window.dispatchEvent(new CustomEvent("sunpower-consent", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;
  return <aside className="cookie-bar" aria-label="Nastavení cookies">
    <p>Cookies nám pomáhají zajistit správné fungování webu, zjistit, jak je web používán, a zobrazovat relevantní obsah a reklamu. Nezbytné cookies používáme vždy, ostatní pouze s vaším souhlasem. <Link href="/zasady-ochrany-osobnich-udaju">Více informací</Link></p>
    <div><button type="button" className="cookie-secondary" onClick={() => choose("necessary")}>Pouze nezbytné</button><button type="button" className="cookie-primary" onClick={() => choose("all")}>Povolit vše</button></div>
  </aside>;
}
