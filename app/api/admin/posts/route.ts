import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { createArticle, getArticles } from "@/lib/articles";

export async function GET() {
  if (!await isAdmin()) return NextResponse.json({ error: "Nepřihlášen." }, { status: 401 });
  return NextResponse.json(await getArticles(true));
}
export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Nepřihlášen." }, { status: 401 });
  try { return NextResponse.json(await createArticle(await request.json()), { status: 201 }); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Článek se nepodařilo uložit." }, { status: 400 }); }
}
