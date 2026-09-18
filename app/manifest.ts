import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SUNPOWER – smysluplné energie",
    short_name: "SUNPOWER",
    description: "Energetické koncepce, regulace budov a energetický management.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d99a00",
    lang: "cs",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
