import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-graphite-line bg-graphite/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center"
          aria-label="Zé Pierno — home"
        >
          <Logo className="h-7 w-auto" />
        </Link>

        <nav className="flex items-center gap-6 font-body text-sm">
          <Link
            href="/career"
            className="text-bone-dim hover:text-bone transition-colors"
          >
            Career
          </Link>
          <Link
            href="/articles"
            className="text-bone-dim hover:text-bone transition-colors"
          >
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
