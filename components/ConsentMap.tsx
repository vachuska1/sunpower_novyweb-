"use client";

import { useEffect, useState } from "react";
import { consentKey } from "@/components/CookieConsent";

export default function ConsentMap() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(localStorage.getItem(consentKey) === "all");
    const update = (event: Event) => setAllowed((event as CustomEvent<string>).detail === "all");
    window.addEventListener("sunpower-consent", update);
    return () => window.removeEventListener("sunpower-consent", update);
  }, []);

  function allowMap() {
    localStorage.setItem(consentKey, "all");
    window.dispatchEvent(new CustomEvent("sunpower-consent", { detail: "all" }));
    setAllowed(true);
  }

  if (!allowed) return <div className="map-consent"><p>Pro zobrazení mapy povolte obsah Google Maps.</p><button type="button" onClick={allowMap}>Zobrazit mapu</button></div>;
  return <iframe title="Mapa – SUNPOWER, Jarošovská 840/II, Jindřichův Hradec" src="https://maps.google.com/maps?q=49.155819%2C15.018243&t=k&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
}
