import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    return {};
  }

  if (!post) return {};

  const url = `https://zepierno.com/articles/${post.slug}`;
  const imageUrl = "https://zepierno.com/ze-pierno.jpg";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Zé Pierno",
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
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
