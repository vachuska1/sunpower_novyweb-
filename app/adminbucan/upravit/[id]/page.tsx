import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { getArticle } from "@/lib/articles";
import ArticleEditor from "@/components/admin/ArticleEditor";
export default async function EditArticle({ params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) redirect("/adminbucan/login");
  const article = await getArticle((await params).id, true);
  if (!article) notFound();
  return <ArticleEditor initial={article} />;
}
