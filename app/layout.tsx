import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunpower.cz"),
  applicationName: "Sunpower",
  title: { default: "Sunpower", template: "%s | Sunpower" },
  description: "Energetické koncepce, vytápění, chlazení a chytré řízení budov.",
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: { title: "Sunpower", siteName: "Sunpower", description: "Smysluplné energie – energetické koncepce, vytápění, chlazení a chytré řízení budov.", type: "website", locale: "cs_CZ", url: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Sunpower", legalName: "SUNPOWER s.r.o.", url: "https://sunpower.cz", logo: "https://sunpower.cz/logo.svg" };
  return <html lang="cs"><body>{children}<FloatingContact /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
