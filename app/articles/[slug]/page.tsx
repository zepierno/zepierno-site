import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/articles"
        className="font-mono-data text-xs text-bone-dim hover:text-amber transition-colors"
      >
        ← All articles
      </Link>

      <p className="font-mono-data text-xs text-bone-dim mt-8 mb-3">
        {post.date}
      </p>
      <h1 className="font-display text-4xl text-bone leading-tight mb-8">
        {post.title}
      </h1>

      <div
        className="prose-custom text-bone-dim leading-relaxed [&>h2]:font-display [&>h2]:text-bone [&>h2]:text-2xl [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-5 [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-6 [&>ul]:list-disc [&>ul]:pl-6 [&_strong]:text-bone [&_a]:text-amber [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
