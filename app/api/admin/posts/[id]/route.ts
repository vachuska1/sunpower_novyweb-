import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { deleteArticle, getArticle, updateArticle } from "@/lib/articles";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Nepřihlášen." }, { status: 401 });
  const article = await getArticle((await params).id, true);
  return article ? NextResponse.json(article) : NextResponse.json({ error: "Nenalezeno." }, { status: 404 });
}
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Nepřihlášen." }, { status: 401 });
  try { return NextResponse.json(await updateArticle(Number((await params).id), await request.json())); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Článek se nepodařilo uložit." }, { status: 400 }); }
}
export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "Nepřihlášen." }, { status: 401 });
  await deleteArticle(Number((await params).id));
  return NextResponse.json({ ok: true });
}
