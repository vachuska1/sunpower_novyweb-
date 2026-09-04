import { redirect } from "next/navigation";
import Image from "next/image";
import { isAdmin } from "@/lib/auth";
import LoginForm from "@/components/admin/LoginForm";
export default async function Login() {
  if (await isAdmin()) redirect("/adminbucan");
  return <main className="admin-login"><section><Image src="/logo.svg" width={150} height={66} alt="Sunpower" /><span>Administrace webu</span><h1>Vítejte zpět</h1><p>Přihlaste se a spravujte články, fotografie a publikaci novinek.</p><LoginForm /><a href="/">← Zpět na web</a></section></main>;
}
