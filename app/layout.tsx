import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunpower.cz"),
  applicationName: siteName,
  title: { default: "SUNPOWER – smysluplné energie", template: "%s | SUNPOWER" },
  description: defaultDescription,
  keywords: ["energetické koncepce", "energetický management", "řízení budov", "MaR", "regulace vytápění", "fotovoltaika", "akumulace energie", "Jindřichův Hradec"],
  authors: [{ name: "SUNPOWER s.r.o.", url: siteUrl }],
  creator: "SUNPOWER s.r.o.",
  publisher: "SUNPOWER s.r.o.",
  category: "energy",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: { title: "SUNPOWER – smysluplné energie", siteName, description: defaultDescription, type: "website", locale: "cs_CZ", url: "/", images: [{ url: "/images/banner.jpg", width: 1920, height: 1080, alt: "SUNPOWER – energetická řešení" }] },
  twitter: { card: "summary_large_image", title: "SUNPOWER – smysluplné energie", description: defaultDescription, images: ["/images/banner.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName: "SUNPOWER s.r.o.",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/images/banner.jpg`,
    description: defaultDescription,
    telephone: "+420603516197",
    email: "info@sunpower.cz",
    taxID: "CZ26025655",
    vatID: "CZ26025655",
    identifier: "26025655",
    priceRange: "$$",
    address: { "@type": "PostalAddress", streetAddress: "Jarošovská 840/II", postalCode: "377 02", addressLocality: "Jindřichův Hradec", addressCountry: "CZ" },
    geo: { "@type": "GeoCoordinates", latitude: 49.155819, longitude: 15.018243 },
    areaServed: [{ "@type": "Country", name: "Česká republika" }, { "@type": "Country", name: "Slovensko" }],
    sameAs: ["https://www.facebook.com/sunpowersro", "https://www.instagram.com/sunpower_cz/"],
    contactPoint: { "@type": "ContactPoint", telephone: "+420603516197", email: "info@sunpower.cz", contactType: "customer service", availableLanguage: ["cs"] },
  };
  const website = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: siteName, inLanguage: "cs-CZ", publisher: { "@id": `${siteUrl}/#organization` } };
  return <html lang="cs"><body>{children}<FloatingContact /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, website]) }} /></body></html>;
}
