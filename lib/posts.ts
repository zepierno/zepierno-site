import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/articles");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
};

function ensureDir() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensureDir();
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      tags: data.tags ?? [],
    } as PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  ensureDir();
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: (data.tags ?? []) as string[],
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
