import type { Metadata } from "next";

export const siteUrl = "https://sunpower.cz";
export const siteName = "SUNPOWER";
export const defaultDescription = "Energetické koncepce, chytré řízení budov, vytápění, chlazení a energetický management pro domy i komerční objekty.";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path, image = "/images/banner.jpg", type = "website" }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "cs_CZ",
      type,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
