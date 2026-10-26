"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { consentKey } from "@/components/CookieConsent";

export default function ConsentAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const update = () => {
      const consent = localStorage.getItem(consentKey) === "all";
      // Also stop an already loaded tag if consent changes in another tab.
      (window as Window & { "ga-disable-G-T5V0832VK3"?: boolean })["ga-disable-G-T5V0832VK3"] = !consent;
      setAllowed(consent);
    };
    update();
    window.addEventListener("sunpower-consent", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("sunpower-consent", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return allowed ? <GoogleAnalytics gaId="G-T5V0832VK3" /> : null;
}
