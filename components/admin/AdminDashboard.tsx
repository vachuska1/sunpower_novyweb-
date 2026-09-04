"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";

export default function AdminDashboard() {
  const [items, setItems] = useState<Article[]>([]); const [loading, setLoading] = useState(true); const [query, setQuery] = useState("");
  async function load() { const res = await fetch("/api/admin/posts", { cache: "no-store" }); if (res.ok) setItems(await res.json()); setLoading(false); }
  useEffect(() => { load(); }, []);
  const filtered = items.filter((x) => x.title.toLowerCase().includes(query.toLowerCase()));
  return <main className="admin-page"><header className="admin-top"><Link href="/adminbucan" className="admin-brand"><Image src="/logo.svg" width={100} height={44} alt="Sunpower" /><span>Správa obsahu</span></Link><nav><a href="/blog" target="_blank">Zobrazit web ↗</a><button onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); location.href = "/adminbucan/login"; }}>Odhlásit</button></nav></header>
    <section className="admin-wrap"><div className="dashboard-head"><div><span className="admin-kicker">Články a novinky</span><h1>Obsah webu</h1><p>Upravujte stávající články nebo připravte novou aktualitu.</p></div><Link className="admin-primary" href="/adminbucan/novy">＋ Nový článek</Link></div>
      <div className="admin-stats"><div><b>{items.length}</b><span>celkem článků</span></div><div><b>{items.filter(x => x.published).length}</b><span>publikováno</span></div><div><b>{items.filter(x => !x.published).length}</b><span>koncepty</span></div></div>
      <div className="article-manager"><div className="manager-bar"><h2>Všechny články</h2><input placeholder="Hledat podle názvu…" value={query} onChange={(e) => setQuery(e.target.value)} /></div>
        {loading ? <p className="admin-empty">Načítám články…</p> : filtered.length === 0 ? <p className="admin-empty">Žádný článek nebyl nalezen.</p> : <div className="admin-list">{filtered.map((article) => <article key={article.id}><div className="admin-thumb">{article.coverImage ? <img src={article.coverImage} alt="" /> : <span>Bez obrázku</span>}</div><div className="admin-item-main"><div><span className={article.published ? "status live" : "status draft"}>{article.published ? "Publikováno" : "Koncept"}</span><time>{new Date(article.publishedAt).toLocaleDateString("cs-CZ")}</time></div><h3>{article.title}</h3><p>/{article.slug}</p></div><div className="admin-actions"><Link href={`/adminbucan/upravit/${article.id}`}>Upravit</Link><button onClick={async () => { if (!confirm(`Opravdu smazat článek „${article.title}“?`)) return; await fetch(`/api/admin/posts/${article.id}`, { method: "DELETE" }); load(); }}>Smazat</button></div></article>)}</div>}
      </div></section></main>;
}
