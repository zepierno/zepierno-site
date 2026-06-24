import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Articles — Zé Pierno",
};

export default function ArticlesPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="font-mono-data text-xs text-bone-dim hover:text-amber transition-colors"
      >
        ← Home
      </Link>

      <p className="font-mono-data text-xs uppercase tracking-[0.2em] text-amber mt-8 mb-4">
        Articles
      </p>
      <h1 className="font-display text-4xl text-bone mb-4">Articles</h1>
      <p className="text-bone-dim mb-12 max-w-xl leading-relaxed">
        Notes on Sales Ops, Ads, AI automation, and the personal projects I
        build on the side.
      </p>

      {posts.length === 0 ? (
        <p className="text-bone-dim">No articles published yet.</p>
      ) : (
        <ul className="divide-y divide-graphite-line">
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <Link href={`/articles/${post.slug}`} className="group block">
                <p className="font-mono-data text-xs text-bone-dim mb-2">
                  {post.date}
                </p>
                <h2 className="font-display text-2xl text-bone group-hover:text-amber-soft transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-bone-dim leading-relaxed">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-data text-xs text-teal-data border border-graphite-line rounded-sm px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
