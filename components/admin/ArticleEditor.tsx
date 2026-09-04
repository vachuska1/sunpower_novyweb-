"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";

const slugify = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const dateInput = (value?: string) => value ? new Date(value).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);

export default function ArticleEditor({ initial }: { initial?: Article }) {
  const router = useRouter(); const editor = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState(initial?.title ?? ""); const [slug, setSlug] = useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? ""); const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [gallery, setGallery] = useState<string[]>(initial?.gallery ?? []); const [publishedAt, setPublishedAt] = useState(dateInput(initial?.publishedAt));
  const [published, setPublished] = useState(initial?.published ?? false); const [saving, setSaving] = useState(false); const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  function command(name: string, value?: string) { editor.current?.focus(); document.execCommand(name, false, value); }
  async function upload(file: File) { setUploading(true); setMessage(""); const body = new FormData(); body.append("file", file); const res = await fetch("/api/admin/upload", { method: "POST", body }); const data = await res.json(); setUploading(false); if (!res.ok) throw new Error(data.error); return data.url as string; }
  async function save() {
    if (!title.trim() || !slug.trim()) { setMessage("Vyplňte název a adresu článku."); return; }
    setSaving(true); setMessage(""); const payload = { title: title.trim(), slug: slugify(slug), excerpt, content: editor.current?.innerHTML ?? "", coverImage, gallery, published, publishedAt: `${publishedAt}T12:00:00.000Z` };
    const res = await fetch(initial ? `/api/admin/posts/${initial.id}` : "/api/admin/posts", { method: initial ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); const data = await res.json(); setSaving(false);
    if (!res.ok) { setMessage(data.error?.includes("unique") ? "Tuto URL už používá jiný článek." : data.error || "Uložení se nepodařilo."); return; }
    setMessage("Článek je uložený."); if (!initial) router.replace(`/adminbucan/upravit/${data.id}`); router.refresh();
  }
  return <main className="admin-page"><header className="admin-top"><Link href="/adminbucan" className="admin-brand"><Image src="/logo.svg" width={100} height={44} alt="Sunpower" /><span>Správa obsahu</span></Link><nav><Link href="/adminbucan">← Všechny články</Link></nav></header>
    <div className="editor-heading"><div><span className="admin-kicker">{initial ? "Úprava článku" : "Nový článek"}</span><h1>{initial ? initial.title : "Vytvořit novinku"}</h1></div><div className="editor-save"><span className={`save-message ${message.includes("uložený") ? "success" : ""}`}>{message}</span><button onClick={save} disabled={saving}>{saving ? "Ukládám…" : "Uložit článek"}</button></div></div>
    <div className="editor-layout"><section className="editor-main admin-card"><label>Název článku<input value={title} onChange={(e) => { setTitle(e.target.value); if (!initial) setSlug(slugify(e.target.value)); }} placeholder="Například Nový projekt Sunpower" /></label><label>Krátký úvod<textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} placeholder="Text, který se zobrazí v přehledu článků…" /></label>
      <div className="field-label">Obsah článku</div><div className="rich-toolbar"><button type="button" onClick={() => command("formatBlock", "h2")}>Nadpis</button><button type="button" onClick={() => command("formatBlock", "p")}>Text</button><button type="button" onClick={() => command("bold")}><b>B</b></button><button type="button" onClick={() => command("italic")}><i>I</i></button><button type="button" onClick={() => command("insertUnorderedList")}>• Seznam</button><button type="button" onClick={() => command("insertOrderedList")}>1. Seznam</button><button type="button" onClick={() => { const url = prompt("Adresa odkazu:"); if (url) command("createLink", url); }}>Odkaz</button><button type="button" onClick={() => command("removeFormat")}>Zrušit formát</button><button type="button" onClick={() => command("undo")}>↶</button><button type="button" onClick={() => command("redo")}>↷</button></div>
      <div ref={editor} className="rich-editor" contentEditable suppressContentEditableWarning dangerouslySetInnerHTML={{ __html: initial?.content ?? "<p>Začněte psát obsah článku…</p>" }} />
    </section><aside className="editor-side"><section className="admin-card publish-card"><h2>Publikace</h2><label>Datum<input type="date" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} /></label><label className="switch-row"><input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} /><span><b>{published ? "Publikováno" : "Koncept"}</b><small>{published ? "Článek je vidět na webu" : "Vidíte ho pouze zde"}</small></span></label></section>
      <section className="admin-card"><h2>Náhledový obrázek</h2><div className="cover-preview">{coverImage ? <img src={coverImage} alt="Náhled" /> : <span>Zatím bez obrázku</span>}</div><label className="upload-button">{uploading ? "Nahrávám…" : "Nahrát obrázek"}<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" disabled={uploading} onChange={async (e) => { const file=e.target.files?.[0]; if (!file) return; try { const url=await upload(file); setCoverImage(url); setGallery((old) => old.includes(url) ? old : [url,...old]); } catch(err) { setMessage(err instanceof Error ? err.message : "Nahrání selhalo."); } }} /></label>{coverImage && <button className="text-button" onClick={() => setCoverImage("")}>Odebrat náhled</button>}</section>
      <section className="admin-card"><h2>Galerie článku</h2><p className="side-help">Nahrajte další fotografie. Pořadí můžete měnit šipkami.</p><label className="upload-button secondary">＋ Přidat fotografie<input multiple type="file" accept="image/jpeg,image/png,image/webp,image/avif" disabled={uploading} onChange={async (e) => { for (const file of Array.from(e.target.files ?? [])) { try { const url=await upload(file); setGallery((old) => [...old,url]); } catch(err) { setMessage(err instanceof Error ? err.message : "Nahrání selhalo."); } } }} /></label><div className="editor-gallery">{gallery.map((url, i) => <div key={url}><img src={url} alt="" /><span><button disabled={i===0} onClick={() => setGallery((g) => { const n=[...g]; [n[i-1],n[i]]=[n[i],n[i-1]]; return n; })}>←</button><button disabled={i===gallery.length-1} onClick={() => setGallery((g) => { const n=[...g]; [n[i+1],n[i]]=[n[i],n[i+1]]; return n; })}>→</button><button onClick={() => setGallery((g) => g.filter((x) => x!==url))}>×</button></span></div>)}</div></section>
      <section className="admin-card"><h2>Adresa článku</h2><label>URL<input value={slug} onChange={(e) => setSlug(slugify(e.target.value))} /></label><small className="slug-preview">/blog/{slug || "adresa-clanku"}</small></section></aside></div>
  </main>;
}
