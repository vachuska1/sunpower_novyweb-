"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [password, setPassword] = useState(""); const [error, setError] = useState(""); const [busy, setBusy] = useState(false); const router = useRouter();
  return <form className="login-form" onSubmit={async (e) => { e.preventDefault(); setBusy(true); setError(""); const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) }); setBusy(false); if (!res.ok) { setError("Heslo není správné."); return; } router.replace("/adminbucan"); router.refresh(); }}>
    <label>Heslo<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus required autoComplete="current-password" /></label>
    {error && <p className="admin-error">{error}</p>}<button disabled={busy}>{busy ? "Přihlašuji…" : "Přihlásit se"}</button>
  </form>;
}
