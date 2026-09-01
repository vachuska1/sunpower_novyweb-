"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="header">
    <div className="header-inner">
      <Link href="/" aria-label="Sunpower – domů"><Image src="/logo.svg" width={160} height={83} alt="Sunpower" priority /></Link>
      <nav className={open ? "nav open" : "nav"} aria-label="Hlavní navigace">
        <Link href="/" onClick={close}>Úvod</Link>
        <Link href="/#sluzby" onClick={close}>Produkty a služby</Link>
        <Link href="/blog" onClick={close}>Novinky</Link>
        <Link href="/#kontakt" onClick={close}>Kontakt</Link>
      </nav>
      <Link className="button button-green header-cta" href="/#poptavka">Nezávazná poptávka</Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Zavřít menu" : "Otevřít menu"}>{open ? <X /> : <List />}</button>
    </div>
  </header>;
}
