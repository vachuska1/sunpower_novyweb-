"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/lucius-rizeni.jpeg", width: 1501, height: 923, alt: "Schéma energetického řízení mobilního pivovaru" },
  { src: "/images/lucius-mobilni.jpg", width: 4608, height: 2592, alt: "Mobilní pivovar se solárními panely" },
  { src: "/images/lucius-pivovar.jpg", width: 4608, height: 2592, alt: "Mobilní pivovar Lucius v provozu" },
];

export default function ProjectGallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const move = (direction: number) => setActive(current => (current + direction + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const modal = dialog.current;
    const overflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = overflow;
      trigger.current?.focus();
    };
  }, [open]);

  return <>
    <div className="project-photos">{images.map((item, index) => <button className="project-photo" key={item.src} aria-label={`Zvětšit: ${item.alt}`} onClick={event => { trigger.current = event.currentTarget; setActive(index); setOpen(true); }}><Image unoptimized {...item} /></button>)}</div>
    <dialog ref={dialog} className="project-gallery-dialog" aria-label="Galerie mobilního pivovaru" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }}>
      {open && <>
        <button className="project-gallery-close" aria-label="Zavřít galerii" onClick={() => setOpen(false)} autoFocus><X /></button>
        <button className="project-gallery-prev" aria-label="Předchozí obrázek" onClick={() => move(-1)}><ArrowLeft /></button>
        <figure onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => { if (touchStart.current !== null) { const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 50) move(delta < 0 ? 1 : -1); } touchStart.current = null; }}>
          <Image unoptimized {...images[active]} />
          <figcaption aria-live="polite">{active + 1} / {images.length} · {images[active].alt}</figcaption>
        </figure>
        <button className="project-gallery-next" aria-label="Další obrázek" onClick={() => move(1)}><ArrowRight /></button>
      </>}
    </dialog>
  </>;
}
