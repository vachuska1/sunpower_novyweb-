import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";

export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Nepřihlášen." }, { status: 401 });
  if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: "Lokálně chybí BLOB_READ_WRITE_TOKEN." }, { status: 503 });
  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File) || !file.type.startsWith("image/")) return NextResponse.json({ error: "Vyberte obrázek." }, { status: 400 });
  if (file.size > 4_500_000) return NextResponse.json({ error: "Obrázek může mít maximálně 4,5 MB." }, { status: 413 });
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const blob = await put(`articles/${Date.now()}-${safeName}`, file, { access: "public", addRandomSuffix: true });
  return NextResponse.json({ url: blob.url });
}
