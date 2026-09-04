import "server-only";
import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "sunpower_admin";
const MAX_AGE = 60 * 60 * 12;

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value) throw new Error("Chybí AUTH_SECRET.");
  return value;
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export function verifyPassword(input: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + MAX_AGE;
  const value = `${expires}.${sign(String(expires))}`;
  (await cookies()).set(COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroyAdminSession() {
  (await cookies()).delete(COOKIE_NAME);
}

export async function isAdmin() {
  const value = (await cookies()).get(COOKIE_NAME)?.value;
  if (!value) return false;
  const [expires, signature] = value.split(".");
  if (!expires || !signature || Number(expires) < Date.now() / 1000) return false;
  const expected = sign(expires);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
