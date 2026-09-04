import { NextResponse } from "next/server";
import { createAdminSession, verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const { password } = await request.json();
  if (typeof password !== "string" || !verifyPassword(password)) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    return NextResponse.json({ error: "Nesprávné heslo." }, { status: 401 });
  }
  await createAdminSession();
  return NextResponse.json({ ok: true });
}
