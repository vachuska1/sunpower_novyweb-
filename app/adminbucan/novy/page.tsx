import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import ArticleEditor from "@/components/admin/ArticleEditor";
export default async function NewArticle() { if (!await isAdmin()) redirect("/adminbucan/login"); return <ArticleEditor />; }
