import "server-only";
import { neon } from "@neondatabase/serverless";
import { posts as originalPosts } from "@/lib/posts";

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  gallery: string[];
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

let ready: Promise<void> | undefined;
function sqlClient() {
  if (!process.env.DATABASE_URL) throw new Error("Chybí DATABASE_URL.");
  return neon(process.env.DATABASE_URL);
}

function originalHtml(post: (typeof originalPosts)[number]) {
  if (!post.blocks.length) return '<p class="visual-note">Původní příspěvek je publikován jako obrazový dokument.</p>';
  return post.blocks.map((block) => `${block.heading ? `<h2>${block.heading}</h2>` : ""}${block.paragraphs.map((p) => `<p>${p}</p>`).join("")}`).join("");
}

function parseCzechDate(value: string) {
  const [d, m, y] = value.replace(/\s/g, "").split(".").map(Number);
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}T12:00:00.000Z`;
}

async function ensureDatabase() {
  if (!ready) ready = (async () => {
    const sql = sqlClient();
    await sql`CREATE TABLE IF NOT EXISTS articles (
      id BIGSERIAL PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL DEFAULT '',
      content TEXT NOT NULL DEFAULT '',
      cover_image TEXT NOT NULL DEFAULT '',
      gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
      published BOOLEAN NOT NULL DEFAULT false,
      published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;
    const count = await sql`SELECT COUNT(*)::int AS count FROM articles`;
    if (Number(count[0].count) === 0) {
      for (const post of originalPosts) {
        await sql`INSERT INTO articles (slug, title, excerpt, content, cover_image, gallery, published, published_at)
          VALUES (${post.slug}, ${post.title}, ${post.excerpt}, ${originalHtml(post)}, ${post.images[0]}, ${JSON.stringify([...post.images])}::jsonb, true, ${parseCzechDate(post.date)})
          ON CONFLICT (slug) DO NOTHING`;
      }
    }
  })();
  return ready;
}

function map(row: Record<string, unknown>): Article {
  return {
    id: Number(row.id), slug: String(row.slug), title: String(row.title), excerpt: String(row.excerpt ?? ""),
    content: String(row.content ?? ""), coverImage: String(row.cover_image ?? ""),
    gallery: Array.isArray(row.gallery) ? row.gallery.map(String) : [], published: Boolean(row.published),
    publishedAt: new Date(String(row.published_at)).toISOString(), createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

export async function getArticles(includeDrafts = false) {
  await ensureDatabase();
  const sql = sqlClient();
  const rows = includeDrafts
    ? await sql`SELECT * FROM articles ORDER BY published_at DESC, id DESC`
    : await sql`SELECT * FROM articles WHERE published = true ORDER BY published_at DESC, id DESC`;
  return rows.map((row) => map(row));
}

export async function getArticle(slugOrId: string, includeDrafts = false) {
  await ensureDatabase();
  const sql = sqlClient();
  const rows = /^\d+$/.test(slugOrId)
    ? includeDrafts ? await sql`SELECT * FROM articles WHERE id = ${Number(slugOrId)} LIMIT 1` : await sql`SELECT * FROM articles WHERE id = ${Number(slugOrId)} AND published = true LIMIT 1`
    : includeDrafts ? await sql`SELECT * FROM articles WHERE slug = ${slugOrId} LIMIT 1` : await sql`SELECT * FROM articles WHERE slug = ${slugOrId} AND published = true LIMIT 1`;
  return rows[0] ? map(rows[0]) : null;
}

export type ArticleInput = Omit<Article, "id" | "createdAt" | "updatedAt">;

export async function createArticle(input: ArticleInput) {
  await ensureDatabase();
  const sql = sqlClient();
  const rows = await sql`INSERT INTO articles (slug,title,excerpt,content,cover_image,gallery,published,published_at)
    VALUES (${input.slug},${input.title},${input.excerpt},${input.content},${input.coverImage},${JSON.stringify(input.gallery)}::jsonb,${input.published},${input.publishedAt}) RETURNING *`;
  return map(rows[0]);
}

export async function updateArticle(id: number, input: ArticleInput) {
  await ensureDatabase();
  const sql = sqlClient();
  const rows = await sql`UPDATE articles SET slug=${input.slug},title=${input.title},excerpt=${input.excerpt},content=${input.content},cover_image=${input.coverImage},gallery=${JSON.stringify(input.gallery)}::jsonb,published=${input.published},published_at=${input.publishedAt},updated_at=NOW() WHERE id=${id} RETURNING *`;
  return rows[0] ? map(rows[0]) : null;
}

export async function deleteArticle(id: number) {
  await ensureDatabase();
  const sql = sqlClient();
  await sql`DELETE FROM articles WHERE id=${id}`;
}
