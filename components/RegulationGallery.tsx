"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, MagnifyingGlassPlus, X } from "@phosphor-icons/react";
import { useCallback, useEffect, useState } from "react";

const images = [
  "regulation-cooling-schedule.jpeg",
  "regulation-peptonization.jpeg",
  "regulation-pool.jpeg",
  "regulation-heating-hotel.jpeg",
  "regulation-vzt.jpeg",
  "regulation-brewery.jpeg",
].map((name, index) => ({ src: `/images/${name}`, alt: `Ukázka vizualizace regulace ${index + 1}` }));

export default function RegulationGallery() {
  const [active, setActive] = useState<number | null>(null);
  const previous = useCallback(() => setActive((current) => current === null ? null : (current - 1 + images.length) % images.length), []);
  const next = useCallback(() => setActive((current) => current === null ? null : (current + 1) % images.length), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active, next, previous]);

  return <>
    <div className="remote-gallery-grid">{images.map((item, index) => <button key={item.src} onClick={() => setActive(index)} aria-label={`Zvětšit obrázek ${index + 1} z ${images.length}`}><Image src={item.src} fill sizes="(max-width: 700px) 100vw, 33vw" alt={item.alt} /><span><MagnifyingGlassPlus /> Zvětšit</span></button>)}</div>
    {active !== null && <div className="lightbox regulation-lightbox" role="dialog" aria-modal="true" aria-label="Ukázky regulací" onClick={() => setActive(null)}>
      <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Zavřít galerii"><X /></button>
      <button className="lightbox-prev" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Předchozí obrázek"><ArrowLeft /></button>
      <div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={images[active].src} fill sizes="96vw" alt={images[active].alt} priority /></div>
      <button className="lightbox-next" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Další obrázek"><ArrowRight /></button>
      <div className="lightbox-count">{active + 1} / {images.length}</div>
    </div>}
  </>;
}
